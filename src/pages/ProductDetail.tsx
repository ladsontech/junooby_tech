
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import Cart from '@/components/Cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  detailed_description: string;
  specs: string[];
  main_image_url: string;
}

interface ProductImage {
  id: string;
  image_url: string;
  is_main: boolean;
  display_order: number;
}

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
      setProduct(productData);

      const { data: imagesData, error: imagesError } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', id)
        .order('display_order');

      if (imagesError) throw imagesError;
      setImages(imagesData || []);
      
      const mainImage = imagesData?.find(img => img.is_main);
      setSelectedImage(mainImage?.image_url || productData?.main_image_url || '');
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
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div>Loading...</div>
        </div>
        <Footer />
        <BottomNav />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      
      <section className="pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <AspectRatio ratio={1}>
                  <img
                    src={selectedImage || product.main_image_url || '/images/HP 15_6.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=600&fit=crop";
                    }}
                  />
                </AspectRatio>
              </Card>
              
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImage(image.image_url)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === image.image_url ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image.image_url}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    product.category === 'gadgets' ? 'bg-blue-600' : 'bg-green-600'
                  }`}>
                    {product.category === 'gadgets' ? 'Gadget' : 'CCTV'}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-6">{product.description}</p>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">{product.price}</div>
              </div>

              {product.specs && product.specs.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                    <ul className="space-y-2">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>

          {product.detailed_description && (
            <Card className="mt-12">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
                <div className="prose max-w-none text-gray-700">
                  {product.detailed_description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ProductDetail;
