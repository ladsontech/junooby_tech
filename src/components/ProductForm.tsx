import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLogin from '@/components/AdminLogin';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Upload, X, ArrowLeft } from 'lucide-react';
import { Database } from '@/integrations/supabase/types';

import ProductSpecsFields from './ProductSpecsFields';
import CctvSpecsFields from './CctvSpecsFields';

type DbProduct = Database['public']['Tables']['products']['Row'];

interface ProductImage {
  id?: string;
  image_url: string;
  is_main: boolean;
  display_order: number;
}

const gadgetSubcategories = [
  { value: 'iphones', label: 'iPhones' },
  { value: 'samsung_phones', label: 'Samsung Phones' },
  { value: 'tecno_phones', label: 'Tecno Phones' },
  { value: 'laptops', label: 'Laptops' }
];

const laptopBrands = [
  { value: 'hp', label: 'HP' },
  { value: 'dell', label: 'Dell' },
  { value: 'lenovo', label: 'Lenovo' },
  { value: 'acer', label: 'Acer' },
  { value: 'asus', label: 'ASUS' },
  { value: 'macbook', label: 'MacBook' },
  { value: 'msi', label: 'MSI' },
  { value: 'toshiba', label: 'Toshiba' }
];

const phoneSubcategories = [
  { value: 'samsung', label: 'Samsung' },
  { value: 'zte', label: 'ZTE' },
  { value: 'iphone', label: 'iPhone' },
  { value: 'googlepixel', label: 'Google Pixel' },
  { value: 'other', label: 'Other' },
];

const pcBrands = [
  { value: 'hp', label: 'HP' },
  { value: 'dell', label: 'Dell' },
  { value: 'lenovo', label: 'Lenovo' },
  { value: 'acer', label: 'Acer' },
  { value: 'asus', label: 'ASUS' },
  { value: 'macbook', label: 'MacBook' },
  { value: 'msi', label: 'MSI' },
  { value: 'toshiba', label: 'Toshiba' },
  { value: 'other', label: 'Other' },
];

const cctvSubcategories = [
  { value: 'bullet', label: 'Bullet' },
  { value: 'dome', label: 'Dome' },
  { value: 'ptz', label: 'PTZ' },
  { value: 'other', label: 'Other' },
];

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { admin, isLoading } = useAdmin();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    category: 'phones' as 'phones' | 'pcs' | 'cctv',
    phoneSubcategory: '',
    pcBrand: '',
    cctvSubcategory: '',
    ptzType: '',
    price: '',
    description: '',
    detailed_description: '',
    specs: [] as string[],
    featured: false,
    condition: 'new' as 'new' | 'refurbished'
  });
  
  const [images, setImages] = useState<ProductImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  // New state for DB-driven subcats, brands, and spec values
  const [subcategories, setSubcategories] = useState<{id: string, name: string}[]>([]);
  const [brands, setBrands] = useState<{id: string, name: string}[]>([]);
  const [specValues, setSpecValues] = useState<{[specId: string]: string}>({});

  // New state for CCTV subcategories, PTZ types, and cctv spec field values
  const [cctvSubcategories, setCctvSubcategories] = useState<{ id: string; name: string }[]>([]);
  const [ptzTypes, setPtzTypes] = useState<{ id: string; name: string; subcategory_id: string | null }[]>([]);
  const [cctvSpecValues, setCctvSpecValues] = useState<{ [specId: string]: string }>({});

  useEffect(() => {
    // Fetch product data once metadata is available to avoid race conditions
    if (isEdit && id && admin && cctvSubcategories.length > 0) {
      fetchProduct();
    }
  }, [isEdit, id, admin, cctvSubcategories, ptzTypes]);

  // Fetch subcategories and brands on mount
  useEffect(() => {
    const fetchMeta = async () => {
      const [{ data: subcat }, { data: brand }] = await Promise.all([
        supabase.from('gadget_subcategories').select('id, name').order('name'),
        supabase.from('laptop_brands').select('id, name').order('name'),
      ]);
      setSubcategories(subcat || []);
      setBrands(brand || []);
    };
    fetchMeta();
  }, []);

  // Fetch all meta on mount
  useEffect(() => {
    const fetchCctvMeta = async () => {
      const [{ data: cctvSubcat }, { data: ptz }] = await Promise.all([
        supabase.from('cctv_subcategories').select('id, name').order('name'),
        supabase.from('ptz_camera_types').select('id, name, subcategory_id').order('name'),
      ]);
      setCctvSubcategories(cctvSubcat || []);
      setPtzTypes(ptz as any[] || []);
    };
    fetchCctvMeta();
  }, []);

  // On subcat/brand select reset specs
  useEffect(() => {
    setSpecValues({});
  }, [formData.phoneSubcategory, formData.pcBrand]);

  // On cctv subcat/ptz type select reset cctv specs
  useEffect(() => {
    setCctvSpecValues({});
  }, [formData.category, formData.cctvSubcategory, formData.ptzType]);

  const fetchProduct = async () => {
    try {
      const { data: product, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (productError) throw productError;

      let phoneSubcategory = '';
      let pcBrand = '';

      // Only compare to our new enum values
      if (product.category === 'phones') {
        for (const option of phoneSubcategories) {
          if (
            product.name.toLowerCase().includes(option.label.toLowerCase()) ||
            product.description?.toLowerCase().includes(option.label.toLowerCase())
          ) {
            phoneSubcategory = option.value;
            break;
          }
        }
      }
      if (product.category === 'pcs') {
        for (const brand of pcBrands) {
          if (
            product.name.toLowerCase().includes(brand.label.toLowerCase()) ||
            product.description?.toLowerCase().includes(brand.label.toLowerCase())
          ) {
            pcBrand = brand.value;
            break;
          }
        }
      }

      let cctvSubcategory = '';
      let ptzType = '';
      if (product.category === 'cctv' && cctvSubcategories.length > 0) {
        const subcat = cctvSubcategories.find(s => s.id === product.cctv_subcategory_id);
        if (subcat) {
          cctvSubcategory = subcat.name;
          const ptz = ptzTypes.find(p => p.id === product.ptz_type_id);
          if (ptz) {
            ptzType = ptz.name;
          }
        }
      }

      if (product.specs && typeof product.specs === 'object' && !Array.isArray(product.specs)) {
        if (product.category === 'phones' || product.category === 'pcs') {
          setSpecValues(product.specs as { [specId: string]: string });
        } else if (product.category === 'cctv') {
          setCctvSpecValues(product.specs as { [specId: string]: string });
        }
      }

      setFormData({
        name: product.name,
        category: product.category,
        phoneSubcategory,
        pcBrand,
        cctvSubcategory,
        ptzType,
        price: product.price,
        description: product.description || '',
        detailed_description: product.detailed_description || '',
        specs: Array.isArray(product.specs) ? (product.specs as string[]) : [],
        featured: product.featured || false,
        condition: (product.condition as 'new' | 'refurbished') || 'new'
      });

      const { data: productImages, error: imagesError } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', id)
        .order('display_order');

      if (imagesError) throw imagesError;
      setImages(productImages || []);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { data, error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      setImages(prev => [...prev, {
        image_url: publicUrl,
        is_main: prev.length === 0,
        display_order: prev.length
      }]);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const setMainImage = (index: number) => {
    setImages(prev => prev.map((img, i) => ({
      ...img,
      is_main: i === index
    })));
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const addSpec = () => {
    setFormData(prev => ({
      ...prev,
      specs: [...prev.specs, '']
    }));
  };

  const updateSpec = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      specs: prev.specs.map((spec, i) => i === index ? value : spec)
    }));
  };

  const removeSpec = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specs: prev.specs.filter((_, i) => i !== index)
    }));
  };

  // Helper to resolve actual subcategory/brand IDs
  const selectedSubcatId = subcategories.find(
    (x) => x.name.toLowerCase() === formData.phoneSubcategory.toLowerCase()
  )?.id || null;

  const selectedBrandId = brands.find(
    (x) => x.name.toLowerCase() === formData.pcBrand.toLowerCase()
  )?.id || null;

  const selectedCctvSubcatId = cctvSubcategories.find(
    x => x.name.toLowerCase() === (formData.cctvSubcategory || "").toLowerCase()
  )?.id || null;
  const selectedPtzTypeId = ptzTypes.find(
    x => x.name.toLowerCase() === (formData.ptzType || "").toLowerCase()
      && x.subcategory_id === selectedCctvSubcatId
  )?.id || null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const mainImage = images.find(img => img.is_main);
      const productSpecs = formData.category === 'phones' || formData.category === 'pcs'
        ? specValues
        : cctvSpecValues;

      // Compose insert type with required fields for Supabase
      const productData = {
        name: formData.name,
        category: formData.category,
        price: formData.price,
        description: formData.description,
        detailed_description: formData.detailed_description,
        condition: formData.condition,
        featured: formData.featured,
        main_image_url: mainImage?.image_url || null,
        specs: productSpecs,
        subcategory_id: selectedSubcatId,
        brand_id: selectedBrandId,
        cctv_subcategory_id: selectedCctvSubcatId,
        ptz_type_id: selectedPtzTypeId,
      };

      let productId = id;

      if (isEdit) {
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', id);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('products')
          .insert([productData])
          .select()
          .single();
        if (error) throw error;
        productId = data.id;
      }

      // Delete existing images if editing
      if (isEdit) {
        await supabase
          .from('product_images')
          .delete()
          .eq('product_id', id);
      }

      // Insert new images
      if (images.length > 0) {
        const imageData = images.map((img, index) => ({
          product_id: productId,
          image_url: img.image_url,
          is_main: img.is_main,
          display_order: index
        }));

        const { error: imagesError } = await supabase
          .from('product_images')
          .insert(imageData);
        
        if (imagesError) throw imagesError;
      }

      navigate('/admin');
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!admin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      {/* Main Content Container with proper spacing */}
      <div className="pt-20 md:pt-24 pb-6 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Button>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                {isEdit ? 'Edit Product' : 'Add New Product'}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Product Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter product name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData(prev => ({
                        ...prev,
                        category: value as 'phones' | 'pcs' | 'cctv',
                        phoneSubcategory: '',
                        pcBrand: '',
                        cctvSubcategory: '',
                        ptzType: '',
                      }))}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phones">Phones</SelectItem>
                        <SelectItem value="pcs">PCs</SelectItem>
                        <SelectItem value="cctv">CCTV Cameras</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Category-specific fields */}
                {formData.category === 'phones' && (
                  <div className="space-y-2">
                    <Label htmlFor="phoneSubcategory" className="text-sm font-medium">Phone Brand</Label>
                    <Select
                      value={formData.phoneSubcategory}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          phoneSubcategory: value,
                        }))
                      }
                    >
                      <SelectTrigger id="phoneSubcategory" className="w-full">
                        <SelectValue placeholder="Select Phone Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {phoneSubcategories.map((b) => (
                          <SelectItem key={b.value} value={b.value}>
                            {b.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {formData.category === 'pcs' && (
                  <div className="space-y-2">
                    <Label htmlFor="pcBrand" className="text-sm font-medium">PC/Laptop Brand</Label>
                    <Select
                      value={formData.pcBrand}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          pcBrand: value,
                        }))
                      }
                    >
                      <SelectTrigger id="pcBrand" className="w-full">
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {pcBrands.map((b) => (
                          <SelectItem key={b.value} value={b.value}>
                            {b.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {formData.category === 'cctv' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cctvSubcategory" className="text-sm font-medium">Camera Type</Label>
                      <Select
                        value={formData.cctvSubcategory}
                        onValueChange={(value) =>
                          setFormData(prev => ({
                            ...prev,
                            cctvSubcategory: value,
                            ptzType: '',
                          }))
                        }
                      >
                        <SelectTrigger id="cctvSubcategory" className="w-full">
                          <SelectValue placeholder="Select Camera Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {cctvSubcategories.map((s) => (
                            <SelectItem key={s.id} value={s.name}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.cctvSubcategory.toLowerCase() === 'ptz' && (
                      <div className="space-y-2">
                        <Label htmlFor="ptzType" className="text-sm font-medium">PTZ Type</Label>
                        <Select
                          value={formData.ptzType || ''}
                          onValueChange={(value) =>
                            setFormData(prev => ({
                              ...prev,
                              ptzType: value,
                            }))
                          }
                        >
                          <SelectTrigger id="ptzType" className="w-full">
                            <SelectValue placeholder="Select PTZ Type" />
                          </SelectTrigger>
                          <SelectContent>
                            {ptzTypes
                              .filter((t) => t.subcategory_id === selectedCctvSubcatId)
                              .map((t) => (
                                <SelectItem key={t.id} value={t.name}>
                                  {t.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                )}

                {/* Price, Condition, Featured */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-sm font-medium">Price</Label>
                    <Input
                      id="price"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="UGX 1,000,000"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="condition" className="text-sm font-medium">Condition</Label>
                    <Select 
                      value={formData.condition} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value as 'new' | 'refurbished' }))}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Brand New</SelectItem>
                        <SelectItem value="refurbished">Refurbished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-3 pt-6">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
                    />
                    <Label htmlFor="featured" className="text-sm font-medium">Featured Product</Label>
                  </div>
                </div>

                {/* Descriptions */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">Short Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                      placeholder="Brief product description"
                      className="w-full resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="detailed_description" className="text-sm font-medium">Detailed Description</Label>
                    <Textarea
                      id="detailed_description"
                      value={formData.detailed_description}
                      onChange={(e) => setFormData(prev => ({ ...prev, detailed_description: e.target.value }))}
                      rows={6}
                      placeholder="Detailed product information"
                      className="w-full resize-none"
                    />
                  </div>
                </div>

                {/* Product Images */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Product Images</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image.image_url}
                          alt={`Product ${index + 1}`}
                          className={`w-full h-32 object-cover rounded-lg border-2 transition-all ${
                            image.is_main ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
                          }`}
                        />
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {!image.is_main && (
                            <Button
                              type="button"
                              size="sm"
                              variant="secondary"
                              onClick={() => setMainImage(index)}
                              className="p-1 h-6 text-xs bg-white/90 hover:bg-white"
                            >
                              Main
                            </Button>
                          )}
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            onClick={() => removeImage(index)}
                            className="p-1 h-6 w-6"
                          >
                            <X size={12} />
                          </Button>
                        </div>
                        {image.is_main && (
                          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                            Main
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Upload Button */}
                    <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors flex flex-col items-center justify-center h-32">
                      <Upload className="mx-auto mb-2" size={24} />
                      <span className="text-sm text-gray-600">
                        {uploading ? 'Uploading...' : 'Upload Image'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                        className="hidden"
                        disabled={uploading}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    Click "Main" to set the primary product image. First uploaded image is automatically set as main.
                  </p>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                  <Button 
                    type="submit" 
                    disabled={saving} 
                    className="flex-1 sm:flex-initial min-w-[140px]"
                  >
                    {saving ? 'Saving...' : isEdit ? 'Update Product' : 'Create Product'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate('/admin')} 
                    className="flex-1 sm:flex-initial min-w-[100px]"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;