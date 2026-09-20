import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Star, 
  PhoneCall, 
  ShieldCheck, 
  Share2, 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  React.useEffect(() => {
    setActiveImage(product.image);
    setBookingSuccess(false);
  }, [product.id, product.image]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.tone === product.tone)
  ).slice(0, 3);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingPhone) return;
    setBookingSuccess(true);
  };

  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-rose-700">Trang chủ</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/trang-tri-gia-tien" className="hover:text-rose-700">{product.categoryName}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-800 font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Main Product Container */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 shadow-xs mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {/* Left: Product Images */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-4/3 relative bg-gray-100 mb-3 shadow-sm">
                <img
                  src={activeImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = product.image;
                  }}
                />
                {product.isHot && (
                  <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-black uppercase px-2.5 py-1 rounded shadow-md">
                    HOT
                  </span>
                )}
                {product.district && (
                  <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {product.district}
                  </span>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {product.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative aspect-4/3 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === imgUrl ? 'border-rose-600 ring-2 ring-rose-300 shadow-sm' : 'border-gray-200 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Quality Guarantee Box */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-rose-700 shrink-0" />
                <div className="text-xs text-gray-700">
                  <span className="font-bold text-rose-800 block mb-0.5">Cam Kết Dã Quỳ Decor:</span>
                  <span>Thi công thực tế giống ảnh 100%. Đội ngũ kỹ thuật hỗ trợ xuyên suốt đến khi hoàn tất buổi lễ gia tiên.</span>
                </div>
              </div>
            </div>

            {/* Right: Info & Pricing */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">
                  {product.categoryName} • {product.tone}
                </span>

                <h1 className="font-serif text-2xl sm:text-3xl font-black text-gray-900 mb-3 leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100 text-xs">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800">5.0 / 5.0</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã phục vụ hơn 85+ cặp đôi
                  </span>
                </div>

                {/* Price */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
                  <span className="text-xs text-gray-500 uppercase font-semibold block mb-1">
                    Giá trọn gói khuyến mãi:
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-rose-700 font-serif">
                      {product.priceText || formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-base text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <span className="bg-rose-100 text-rose-800 text-[11px] font-bold px-2 py-0.5 rounded ml-auto">
                      Tiết kiệm 20%
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2">
                    * Giá đã bao gồm phí vận chuyển và thi công hoàn thiện nội thành TP.HCM.
                  </p>
                </div>

                {/* Items Breakdown */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-rose-700" />
                    Hạng Mục Trọn Gói Bao Gồm ({product.inclusions.length} món):
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {product.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-gray-50/80 p-2 rounded-lg border border-gray-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Booking Form / Actions */}
              <div className="pt-4 border-t border-gray-200">
                {bookingSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center text-xs">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <span className="font-bold text-sm block mb-1">Đã nhận thông tin tư vấn!</span>
                    <span>Chuyên viên Dã Quỳ Decor sẽ gọi điện qua số <strong>{bookingPhone}</strong> để gửi báo giá chi tiết trong ít phút.</span>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3">
                    <span className="block text-xs font-bold text-gray-800 uppercase">
                      Đặt lịch khảo sát &amp; giữ mẫu ngay:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder="Tên của bạn..."
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        className="px-3 py-2 text-xs border border-gray-300 rounded-lg outline-hidden"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại / Zalo *"
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        className="px-3 py-2 text-xs border border-gray-300 rounded-lg outline-hidden"
                      />
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="px-3 py-2 text-xs border border-gray-300 rounded-lg outline-hidden"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <button
                        type="submit"
                        className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                      >
                        Giữ Giá Ưu Đãi Mẫu Này
                      </button>
                      <a
                        href={BRAND_INFO.zaloUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors text-center block"
                      >
                        Chat Zalo Tư Vấn Nhanh
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-xs mb-10">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Thông Tin Chi Tiết Về {product.name}
          </h2>
          <div className="prose prose-sm max-w-none text-gray-600 text-xs sm:text-sm leading-relaxed space-y-4">
            <p>
              {product.description}
            </p>
            <p>
              Mẫu gia tiên <strong>{product.name}</strong> được thiết kế theo đúng quy chuẩn lễ nghi cưới hỏi truyền thống của người Việt, đồng thời được cách tân với sự tinh tế của nghệ thuật cắm hoa hiện đại. Tone màu {product.tone} biểu trưng cho sự viên mãn, may mắn, hạnh phúc bền lâu của đôi lứa.
            </p>
            <h3 className="font-bold text-gray-800 text-sm mt-4">Quy trình bàn giao và cam kết dịch vụ:</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
              <li>Đo đạc, khảo sát mặt bằng tận nhà tại TP.HCM hoàn toàn miễn phí.</li>
              <li>Thi công hoàn thiện trước ngày diễn ra hôn lễ tối thiểu nửa ngày để gia đình chuẩn bị chu đáo.</li>
              <li>Bộ tách trà, chân nến, chữ Hỷ được lau chùi sáng bóng, sẵn sàng sử dụng.</li>
              <li>Hỗ trợ thu dọn sạch sẽ, gọn gàng sau khi buổi lễ kết thúc.</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Các Mẫu Cùng Tông Màu &amp; Danh Mục
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onConsult={() => onOpenQuoteModal(p.name)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
