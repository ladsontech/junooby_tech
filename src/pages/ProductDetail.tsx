
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductsLayout from '@/components/ProductsLayout';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Database } from '@/integrations/supabase/types';

type DbProduct = Database['public']['Tables']['products']['Row'];

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  detailed_description: string;
  specs: string[];
  main_image_url: string;
  featured?: boolean;
  condition: string;
}

interface ProductImage {
  id: string;
  image_url: string;
  is_main: boolean;
  display_order: number;
}

const formatPrice = (price: string) => {
  const numericPrice = price.replace(/[^0-9]/g, '');
  if (!numericPrice) return price;
  return `UGX ${parseInt(numericPrice).toLocaleString()}`;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [images, setImages] = useState<ProductImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (productError) throw productError;
      
      // Transform the product data to ensure specs is always a string array
      const transformedProduct: Product = {
        id: productData.id,
        name: productData.name,
        category: productData.category,
        price: productData.price,
        description: productData.description || '',
        detailed_description: productData.detailed_description || '',
        specs: Array.isArray(productData.specs) ? (productData.specs as string[]) : [],
        main_image_url: productData.main_image_url || '',
        featured: productData.featured || false,
        condition: productData.condition || 'new'
      };
      
      setProduct(transformedProduct);

      const { data: imagesData, error: imagesError } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', id)
        .order('display_order');

      if (imagesError) throw imagesError;
      setImages(imagesData || []);
      
      // Set main image as selected or first image if no main image
      const mainImage = imagesData?.find(img => img.is_main);
      setSelectedImage(mainImage?.image_url || transformedProduct.main_image_url || (imagesData?.[0]?.image_url || ''));
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: parseInt(product.id),
        name: product.name,
        price: product.price,
        image: product.main_image_url || '/images/HP 15_6.jpg'
      });
    }
  };

  if (loading) {
    return (
      <ProductsLayout>
        <div className="py-20 flex items-center justify-center min-h-[50vh]">
          <div>Loading...</div>
        </div>
      </ProductsLayout>
    );
  }

  if (!product) {
    return (
      <ProductsLayout>
        <div className="py-20 p-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Link to="/products">
              <Button variant="outline">
                <ArrowLeft className="mr-2" size={16} />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </ProductsLayout>
    );
  }

  return (
    <ProductsLayout>
      <Cart />
      
      <section className="py-8 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 md:mb-6">
            <Link to="/products">
              <Button variant="outline" className="mb-4 text-sm">
                <ArrowLeft className="mr-2" size={16} />
                Back to Products
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-3 md:p-4 shadow-lg">
                <AspectRatio ratio={4/3}>
                  <img
                    src={selectedImage || product.main_image_url || '/images/HP 15_6.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=450&fit=crop";
                    }}
                  />
                </AspectRatio>
              </div>
              
              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImage(image.image_url)}
                      className={`bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 ${
                        selectedImage === image.image_url ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <AspectRatio ratio={1}>
                        <img
                          src={image.image_url}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </AspectRatio>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Badge variant={product.category === 'gadgets' ? 'default' : 'secondary'}>
                    {product.category === 'gadgets' ? 'Gadget' : 'CCTV'}
                  </Badge>
                  <Badge variant={product.condition === 'new' ? 'default' : 'secondary'} className={
                    product.condition === 'new' ? 'bg-emerald-600' : 'bg-amber-600'
                  }>
                    {product.condition === 'new' ? 'Brand New' : 'Refurbished'}
                  </Badge>
                  {product.featured && (
                    <Badge variant="destructive">Featured</Badge>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-4">{formatPrice(product.price)}</p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Description</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.detailed_description && (
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Detailed Description</h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {product.detailed_description}
                  </p>
                </div>
              )}

              {product.specs && product.specs.length > 0 && (
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Specifications</h2>
                  <ul className="space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-gray-600 text-sm md:text-base flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProductsLayout>
  );
};

export default ProductDetail;
