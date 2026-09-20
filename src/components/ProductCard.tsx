import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, PhoneCall, MapPin, Sparkles } from 'lucide-react';
import { ProductItem } from '../types';
import { BRAND_INFO } from '../data/mockData';

interface ProductCardProps {
  product: ProductItem;
  onConsult?: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onConsult }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.isHot && (
            <span className="bg-rose-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
              HOT
            </span>
          )}
          {product.isNew && (
            <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
              MẪU MỚI
            </span>
          )}
          {product.tone && (
            <span className="bg-amber-500/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
              {product.tone}
            </span>
          )}
        </div>

        {/* District tag */}
        {product.district && (
          <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
            <MapPin className="w-3 h-3 text-rose-400" />
            <span>{product.district}</span>
          </div>
        )}

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link
            to={`/san-pham/${product.id}`}
            className="w-10 h-10 rounded-full bg-white text-rose-700 flex items-center justify-center shadow-lg hover:bg-rose-50 transition-transform transform hover:scale-110"
            title="Xem chi tiết mẫu"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${BRAND_INFO.hotline}`}
            className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:bg-rose-700 transition-transform transform hover:scale-110"
            title="Gọi tư vấn ngay"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-1 block">
            {product.categoryName}
          </span>
          <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 hover:text-rose-700 transition-colors mb-2 leading-snug">
            <Link to={`/san-pham/${product.id}`}>
              {product.name}
            </Link>
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-[11px] text-gray-400 ml-1 font-medium">(5.0)</span>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-gray-100 mt-2">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-base font-extrabold text-rose-700">
                {product.priceText || formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through ml-2">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-gray-500 font-medium bg-gray-100 px-1.5 py-0.5 rounded">
              Trọn gói
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/san-pham/${product.id}`}
              className="w-full text-center text-xs font-semibold py-2 px-2 rounded-lg border border-rose-700 text-rose-700 hover:bg-rose-50 transition-colors"
            >
              Chi tiết
            </Link>
            <button
              onClick={() => onConsult ? onConsult(product) : window.open(BRAND_INFO.zaloUrl, '_blank')}
              className="w-full text-center text-xs font-semibold py-2 px-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white transition-colors cursor-pointer"
            >
              Tư vấn ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
