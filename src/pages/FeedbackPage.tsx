import React from 'react';
import { Star, Heart, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS, BRAND_INFO } from '../data/mockData';

export const FeedbackPage: React.FC = () => {
  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 text-white py-12 border-b border-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            ĐÁNH GIÁ TỪ CÔ DÂU CHÚ RỂ
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Khách Hàng Nói Gì Về Dã Quỳ Decor?
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Hơn 5.000+ cặp đôi đã tin tưởng lựa chọn Dã Quỳ Decor trong ngày trọng đại. Dưới đây là những lời chia sẻ chân thành nhất.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Rating Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xs mb-10 text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-4xl font-black text-gray-900 font-serif block mb-1">5.0 / 5.0</span>
          <p className="text-xs text-gray-500 font-medium">
            Dựa trên hơn 1.200+ đánh giá thực tế từ khách hàng tại Google &amp; Facebook Fanpage
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.concat([
            {
              id: 't5',
              coupleName: 'Quốc Bảo & Lan Anh',
              location: 'Quận 7, TP.HCM',
              weddingDate: '12/2025',
              service: 'Gia Tiên Tông Nâu Vintage & Cổng Hoa',
              rating: 5,
              comment: 'Tone màu nâu vintage lên hình rất điện ảnh và sang chảnh. Ai đến dự cũng khen bàn thờ gia tiên nhìn tôn nghiêm mà tinh tế. Cảm ơn Dã Quỳ Decor rất nhiều!',
              avatar: '/images/cuoi1.jpg'
            },
            {
              id: 't6',
              coupleName: 'Thành Đạt & Phương Vy',
              location: 'Quận Bình Thạnh, TP.HCM',
              weddingDate: '01/2026',
              service: 'Rạp Cưới & Bàn Ghế Tiffany',
              rating: 5,
              comment: 'Rạp cưới dựng rất chắc chắn, hoa trang trí tươi tắn và đồng bộ màu. Các bạn thợ đến dọn dẹp sau tiệc rất sạch sẽ, đúng giờ.',
              avatar: '/images/cuoi4.jpg'
            }
          ]).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded">
                    Đã hoàn thành
                  </span>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-rose-200 shrink-0">
                  <img src={item.avatar} alt={item.coupleName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-gray-900">
                    {item.coupleName}
                  </h4>
                  <span className="text-[11px] text-gray-500 block">
                    {item.location}
                  </span>
                  <span className="text-[10px] text-rose-700 font-semibold block mt-0.5">
                    {item.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
