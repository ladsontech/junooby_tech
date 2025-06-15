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
import { Upload, X } from 'lucide-react';
import { Database } from '@/integrations/supabase/types';

import ProductSpecsFields from './ProductSpecsFields';

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

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { admin, isLoading } = useAdmin();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    category: 'gadgets' as 'gadgets' | 'cctv',
    gadgetSubcategory: '',
    laptopBrand: '',
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

  // ----------------------------
  // New state for DB-driven subcats, brands, and spec values
  // ----------------------------
  const [subcategories, setSubcategories] = useState<{id: string, name: string}[]>([]);
  const [brands, setBrands] = useState<{id: string, name: string}[]>([]);
  const [specValues, setSpecValues] = useState<{[specId: string]: string}>({});

  useEffect(() => {
    if (isEdit && id && admin) {
      fetchProduct();
    }
  }, [isEdit, id, admin]);

  // ---------------
  // Fetch subcategories and brands on mount
  // ---------------
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

  // ---------------
  // On subcat/brand select reset specs
  // ---------------
  useEffect(() => {
    setSpecValues({});
  }, [formData.gadgetSubcategory, formData.laptopBrand]);

  const fetchProduct = async () => {
    try {
      const { data: product, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (productError) throw productError;

      // Determine possible subcategories/brands from product.name or add a new property if your data model supports it
      let gadgetSubcategory = '';
      let laptopBrand = '';
      if (product.category === 'gadgets') {
        for (const option of gadgetSubcategories) {
          if (
            product.name.toLowerCase().includes(option.label.toLowerCase()) ||
            product.description?.toLowerCase().includes(option.label.toLowerCase())
          ) {
            gadgetSubcategory = option.value;
            break;
          }
        }
        if (gadgetSubcategory === 'laptops') {
          for (const brand of laptopBrands) {
            if (
              product.name.toLowerCase().includes(brand.label.toLowerCase()) ||
              product.description?.toLowerCase().includes(brand.label.toLowerCase())
            ) {
              laptopBrand = brand.value;
              break;
            }
          }
        }
      }

      setFormData({
        name: product.name,
        category: product.category,
        gadgetSubcategory,
        laptopBrand,
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
    (x) => x.name.toLowerCase() === formData.gadgetSubcategory.toLowerCase()
  )?.id || null;

  const selectedBrandId = brands.find(
    (x) => x.name.toLowerCase() === formData.laptopBrand.toLowerCase()
  )?.id || null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const mainImage = images.find(img => img.is_main);
      // Build displayCategory string for storage and searchability
      let displayCategory = formData.category;
      if (formData.category === 'gadgets' && formData.gadgetSubcategory) {
        displayCategory += ':' + formData.gadgetSubcategory;
        if (formData.gadgetSubcategory.toLowerCase() === 'laptops' && formData.laptopBrand) {
          displayCategory += ':' + formData.laptopBrand;
        }
      }

      const productData: any = {
        ...formData,
        category: formData.category,
        subcategory: formData.gadgetSubcategory,
        brand: formData.laptopBrand,
        main_image_url: mainImage?.image_url || null,
        // Instead of specs: formData.specs...use specValues as a map {specId:value}
        specs: specValues,
        display_category: displayCategory,
        subcategory_id: selectedSubcatId,
        brand_id: selectedBrandId,
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
          .insert(productData)
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
    return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div>Loading...</div>
    </div>;
  }

  if (!admin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      <div className="pt-20 p-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">{isEdit ? 'Edit Product' : 'Add New Product'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData(prev => ({
                        ...prev,
                        category: value as 'gadgets' | 'cctv',
                        gadgetSubcategory: '',
                        laptopBrand: ''
                      }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gadgets">Gadgets</SelectItem>
                        <SelectItem value="cctv">CCTV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* ------------------------------- */}
                {/* Sub-Category select from DB */}
                {formData.category === 'gadgets' && (
                  <div>
                    <Label htmlFor="gadgetSubcategory">Gadget Type</Label>
                    <select
                      id="gadgetSubcategory"
                      className="w-full border rounded p-2 mt-1"
                      value={formData.gadgetSubcategory}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          gadgetSubcategory: e.target.value,
                          laptopBrand: '',
                        }))
                      }
                    >
                      <option value="">Select Gadget Type</option>
                      {subcategories.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {/* Laptop Brand select from DB */}
                {formData.category === 'gadgets' &&
                  formData.gadgetSubcategory.toLowerCase() === 'laptops' && (
                    <div>
                      <Label htmlFor="laptopBrand">Laptop Brand</Label>
                      <select
                        id="laptopBrand"
                        className="w-full border rounded p-2 mt-1"
                        value={formData.laptopBrand}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            laptopBrand: e.target.value,
                          }))
                        }
                      >
                        <option value="">Select Laptop Brand</option>
                        {brands.map((b) => (
                          <option key={b.id} value={b.name}>
                            {b.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                {/* --- Specs fields --- */}
                {formData.category === 'gadgets' && (
                  <div>
                    <Label>Specifications</Label>
                    <ProductSpecsFields
                      subcategoryId={selectedSubcatId}
                      brandId={
                        formData.gadgetSubcategory?.toLowerCase() === 'laptops'
                          ? selectedBrandId
                          : undefined
                      }
                      values={specValues}
                      onChange={setSpecValues}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="UGX 1,000,000"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select value={formData.condition} onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value as 'new' | 'refurbished' }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Brand New</SelectItem>
                        <SelectItem value="refurbished">Refurbished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
                    />
                    <Label htmlFor="featured">Featured Product</Label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="detailed_description">Detailed Description</Label>
                  <Textarea
                    id="detailed_description"
                    value={formData.detailed_description}
                    onChange={(e) => setFormData(prev => ({ ...prev, detailed_description: e.target.value }))}
                    rows={6}
                  />
                </div>

                <div>
                  <Label>Product Images</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image.image_url}
                          alt={`Product ${index + 1}`}
                          className={`w-full h-32 object-cover rounded ${image.is_main ? 'ring-2 ring-blue-500' : ''}`}
                        />
                        <div className="absolute top-2 right-2 flex gap-1">
                          {!image.is_main && (
                            <Button
                              type="button"
                              size="sm"
                              variant="secondary"
                              onClick={() => setMainImage(index)}
                              className="p-1 h-6 text-xs"
                            >
                              Main
                            </Button>
                          )}
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            onClick={() => removeImage(index)}
                            className="p-1 h-6"
                          >
                            <X size={12} />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400">
                      <Upload className="mx-auto mb-2" size={24} />
                      <span className="text-sm">Upload Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                        className="hidden"
                        disabled={uploading}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" disabled={saving} className="flex-1 sm:flex-initial">
                    {saving ? 'Saving...' : isEdit ? 'Update Product' : 'Create Product'}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => navigate('/admin')} className="flex-1 sm:flex-initial">
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
