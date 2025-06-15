
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  main_image_url: string;
  featured?: boolean;
  condition: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const formatPrice = (price: string) => {
  const numericPrice = price.replace(/[^0-9]/g, '');
  if (!numericPrice) return price;
  return `UGX ${parseInt(numericPrice).toLocaleString()}`;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3}>
          <img 
            src={product.main_image_url || '/images/HP 15_6.jpg'} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop";
            }}
          />
        </AspectRatio>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className={`px-2 py-1 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium text-white ${
            product.category === 'gadgets' 
              ? 'bg-blue-600' 
              : 'bg-green-600'
          }`}>
            {product.category === 'gadgets' ? 'Gadget' : 'CCTV'}
          </span>
          <span className={`px-2 py-1 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium text-white ${
            product.condition === 'new' 
              ? 'bg-emerald-600' 
              : 'bg-amber-600'
          }`}>
            {product.condition === 'new' ? 'Brand New' : 'Refurbished'}
          </span>
          {product.featured && (
            <span className="bg-orange-500 text-white px-2 py-1 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium">
              Featured
            </span>
          )}
        </div>
      </div>
      
      <div className="p-3 md:p-4 lg:p-5 xl:p-6 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-gray-900 mb-2 lg:mb-3 line-clamp-2">{product.name}</h3>
        <div className="space-y-1 lg:space-y-2 mb-3 md:mb-4 lg:mb-4 flex-grow">
          {product.specs && product.specs.slice(0, 2).map((spec, index) => (
            <p key={index} className="text-xs md:text-sm lg:text-sm text-gray-600 line-clamp-1">• {spec}</p>
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:gap-3 xl:gap-4 mt-auto">
          <span className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-blue-600">{formatPrice(product.price)}</span>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-2 xl:gap-3">
            <Link 
              to={`/product/${product.id}`}
              className="flex-1 bg-white border border-blue-600 text-blue-600 px-3 py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 text-sm lg:text-sm xl:text-base text-center"
            >
              View Details
            </Link>
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-blue-600 text-white px-3 py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-sm lg:text-sm xl:text-base"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
