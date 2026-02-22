import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowLeft, ShoppingCart, Eye, Heart } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

type ProductCategory = 'phones' | 'pcs' | 'cctv';

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  description: string;
  specs: string[];
  main_image_url: string;
  featured?: boolean;
  condition: string;
}

const formatPrice = (price: string) => {
  const numericPrice = price.replace(/[^0-9]/g, '');
  if (!numericPrice) return price;
  return `UGX ${parseInt(numericPrice).toLocaleString()}`;
};

// Static product data
const staticProducts: Product[] = [
  {
    id: '1',
    name: 'HP EliteBook 840 G5 - 14" Intel Core i5 8th Gen',
    category: 'pcs',
    price: '1500000',
    description: 'Powerful business laptop with Intel Core i5 processor, 8GB RAM, and 256GB SSD. Features a 14-inch Full HD display, fingerprint reader, and long-lasting battery. Perfect for professionals who need reliability and performance on the go.',
    specs: ['Intel Core i5-8250U', '8GB DDR4 RAM', '256GB SSD', '14" Full HD Display', 'Windows 11 Pro', 'Fingerprint Reader'],
    main_image_url: '/images/HP 15_6.jpg',
    featured: true,
    condition: 'refurbished',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 256GB',
    category: 'phones',
    price: '4500000',
    description: 'Flagship smartphone with S Pen, 200MP camera, and titanium frame. Features a stunning 6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3 processor, and AI-powered features for the ultimate mobile experience.',
    specs: ['Snapdragon 8 Gen 3', '12GB RAM', '256GB Storage', '200MP Main Camera', '6.8" Dynamic AMOLED', 'S Pen Included'],
    main_image_url: '/images/HP 15_6.jpg',
    featured: true,
    condition: 'new',
  },
  {
    id: '3',
    name: 'Hikvision 4MP ColorVu Bullet Camera',
    category: 'cctv',
    price: '350000',
    description: '24/7 color surveillance with built-in microphone and IP67 weatherproof rating. ColorVu technology ensures vivid color images even in low-light conditions, providing superior security monitoring.',
    specs: ['4MP Resolution', 'ColorVu Technology', 'IP67 Weatherproof', 'Built-in Microphone', '30m White Light Range', 'H.265+ Compression'],
    main_image_url: '/images/HP 15_6.jpg',
    featured: true,
    condition: 'new',
  },
  {
    id: '4',
    name: 'Dell Latitude 5520 - 15.6" Intel Core i7',
    category: 'pcs',
    price: '2200000',
    description: 'Premium business laptop with Intel Core i7, FHD display, and long battery life. Built for enterprise with robust security features, Thunderbolt 4 connectivity, and a comfortable keyboard for all-day productivity.',
    specs: ['Intel Core i7-1165G7', '16GB DDR4 RAM', '512GB NVMe SSD', '15.6" Full HD Display', 'Thunderbolt 4', 'Windows 11 Pro'],
    main_image_url: '/images/HP 15_6.jpg',
    featured: true,
    condition: 'refurbished',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const found = staticProducts.find(p => p.id === id) || null;
      setProduct(found);
      setSelectedImage(found?.main_image_url || '');

      if (found) {
        const related = staticProducts.filter(
          p => p.category === found.category && p.id !== found.id
        );
        setRelatedProducts(related);
      } else {
        setRelatedProducts([]);
      }

      setLoading(false);
    }
  }, [id]);

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
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 md:pt-24 py-20 flex items-center justify-center min-h-[50vh]">
          <div>Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 md:pt-24 py-20 p-4">
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
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      <WhatsAppButton />

      <section className="pt-20 md:pt-24 py-6 md:py-12">
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
                <AspectRatio ratio={1}>
                  <img
                    src={selectedImage || product.main_image_url || '/images/HP 15_6.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=600&fit=crop";
                    }}
                  />
                </AspectRatio>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-3 md:space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Badge variant={product.category === 'cctv' ? 'default' : 'secondary'}>
                    {product.category === 'phones' && "Phone"}
                    {product.category === 'pcs' && "PC"}
                    {product.category === 'cctv' && "CCTV"}
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

              {/* Single Description Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              </div>

              {product.specs && product.specs.length > 0 && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h2>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        <span className="leading-relaxed">{spec}</span>
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

      {/* Modern Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                You Might Also Like
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Discover more amazing products from our collection
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Product Image Container */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <AspectRatio ratio={1}>
                      <img
                        src={relatedProduct.main_image_url || '/images/HP 15_6.jpg'}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop";
                        }}
                      />
                    </AspectRatio>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <Link to={`/product/${relatedProduct.id}`}>
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                            <Eye size={18} />
                          </button>
                        </Link>
                        <button className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                          <Heart size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Product Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {relatedProduct.condition === 'new' && (
                        <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-2 py-1">
                          New
                        </Badge>
                      )}
                      {relatedProduct.featured && (
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-2 py-1">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 md:p-5">
                    {/* Product Category */}
                    <div className="mb-2">
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                        {relatedProduct.category === 'phones' && "Smartphone"}
                        {relatedProduct.category === 'pcs' && "Computer"}
                        {relatedProduct.category === 'cctv' && "Security"}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>

                    {/* Product Description */}
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {relatedProduct.description || "Premium quality product with excellent features and performance."}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-lg md:text-xl font-bold text-gray-900">
                        {formatPrice(relatedProduct.price)}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(relatedProduct)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                      <Link to={`/product/${relatedProduct.id}`}>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-md">
                          <Eye size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Products Button */}
            <div className="text-center mt-8 md:mt-12">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;