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
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';

type DbProduct = Database['public']['Tables']['products']['Row'];
type ProductCategory = Database['public']['Enums']['product_category'];

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
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
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setProduct(null);
      setRelatedProducts([]);
      fetchProduct();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (productError) throw productError;
      
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
      
      const mainImage = imagesData?.find(img => img.is_main);
      setSelectedImage(mainImage?.image_url || transformedProduct.main_image_url || (imagesData?.[0]?.image_url || ''));

      // Fetch related products
      if (transformedProduct.category) {
        const { data: relatedData, error: relatedError } = await supabase
          .from('products')
          .select('*')
          .eq('category', transformedProduct.category)
          .neq('id', transformedProduct.id)
          .limit(4);

        if (relatedError) {
          console.error('Error fetching related products:', relatedError);
        } else if (relatedData) {
          const transformedRelatedData: Product[] = relatedData.map((p: DbProduct) => ({
            id: p.id,
            name: p.name,
            category: p.category,
            price: p.price,
            description: p.description || '',
            detailed_description: p.detailed_description || '',
            specs: Array.isArray(p.specs) ? (p.specs as string[]) : [],
            main_image_url: p.main_image_url || '',
            featured: p.featured || false,
            condition: p.condition || 'new',
          }));
          setRelatedProducts(transformedRelatedData);
        }
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (productToAdd: Product) => {
    addToCart({
      id: parseInt(productToAdd.id),
      name: productToAdd.name,
      price: productToAdd.price,
      image: productToAdd.main_image_url || '/images/HP 15_6.jpg'
    });
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
      <WhatsAppButton />
      
      <section className="py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link to="/products">
              <Button variant="outline" className="mb-2 text-sm">
                <ArrowLeft className="mr-2" size={16} />
                Back to Products
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
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
            <div className="space-y-3 md:space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-xl md:text-2xl font-bold text-blue-600 mb-3">{formatPrice(product.price)}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Description</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.detailed_description && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Detailed Description</h2>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {product.detailed_description}
                  </p>
                </div>
              )}

              {product.specs && product.specs.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Specifications</h2>
                  <ul className="space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <Button 
                  onClick={() => product && handleAddToCart(product)}
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {relatedProducts.length > 0 && (
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </ProductsLayout>
  );
};

export default ProductDetail;
