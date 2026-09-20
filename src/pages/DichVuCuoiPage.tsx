import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Calendar,
  Layers
} from 'lucide-react';
import { SERVICE_CATEGORIES, BRAND_INFO } from '../data/mockData';

interface DichVuCuoiPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const DichVuCuoiPage: React.FC<DichVuCuoiPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 text-white py-12 border-b border-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            TRỌN GÓI TIỆC CƯỚI TP.HCM
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Dịch Vụ Cưới Hỏi Trọn Gói Cao Cấp
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Dã Quỳ Decor cung cấp đầy đủ các giải pháp trang trí từ lễ gia tiên, rạp cưới, sân khấu, bàn gallery đến xe hoa và mâm quả rồng phụng.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="space-y-12">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <div 
              key={cat.id}
              id={cat.id}
              className={`bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow p-5 sm:p-8 flex flex-col ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-6 lg:gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12 lg:w-1/2 aspect-4/3 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Dịch Vụ Số 0{idx + 1}</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-black text-gray-900 mb-3">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {cat.description}. Với hàng trăm mẫu thiết kế đa phong cách được cập nhật liên tục theo xu hướng cưới mới nhất, đảm bảo tính thẩm mỹ và đồng bộ màu sắc cho toàn bộ buổi lễ.
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Thiết kế kích thước linh hoạt theo diện tích nhà và sảnh tiệc</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Hoa lụa cao cấp, hoa tươi nhập khẩu theo yêu cầu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Vận chuyển, lắp đặt và tháo dỡ trọn gói không phát sinh chi phí</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => onOpenQuoteModal(cat.name)}
                    className="bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Báo Giá Dịch Vụ Này
                  </button>
                  <Link
                    to={cat.slug}
                    className="text-xs font-bold text-gray-700 hover:text-rose-700 px-4 py-2.5 rounded-lg border border-gray-200 transition-colors flex items-center gap-1"
                  >
                    <span>Xem Các Mẫu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
