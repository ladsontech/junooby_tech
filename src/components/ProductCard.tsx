
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
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3}>
          <img 
            src={product.main_image_url || '/images/HP 15_6.jpg'} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop";
            }}
          />
        </AspectRatio>
      </div>
      
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium text-white mb-2 ${
            product.condition === 'new' 
              ? 'bg-emerald-600' 
              : 'bg-amber-600'
          }`}>
            {product.condition === 'new' ? 'Brand New' : 'Refurbished'}
        </span>
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="space-y-1 mb-3 flex-grow">
          {product.specs && product.specs.slice(0, 2).map((spec, index) => (
            <p key={index} className="text-xs text-gray-600 line-clamp-1">• {spec}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-auto">
          <span className="text-lg md:text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link 
              to={`/product/${product.id}`}
              className="flex-1 bg-white border border-blue-600 text-blue-600 px-3 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 text-sm text-center"
            >
              View Details
            </Link>
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 text-sm"
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
