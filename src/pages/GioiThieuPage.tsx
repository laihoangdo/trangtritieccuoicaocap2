import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  PhoneCall, 
  Clock, 
  Users, 
  Target 
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface GioiThieuPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const GioiThieuPage: React.FC<GioiThieuPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 text-white py-14 border-b border-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            VỀ CHÚNG TÔI
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Giới Thiệu Dã Quỳ Decor &amp; Event
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Hơn 10 năm đồng hành cùng hạnh phúc trăm năm của hàng ngàn cặp đôi tại TP.HCM và các tỉnh lân cận.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Story Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                CÂU CHUYỆN THƯƠNG HIỆU
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                Dã Quỳ Decor – Vun Đắp Hạnh Phúc Bền Lâu
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                Được thành lập từ tình yêu với nét đẹp văn hóa cưới hỏi cổ truyền Việt Nam kết hợp cùng tư duy thẩm mỹ hiện đại, <strong>{BRAND_INFO.name}</strong> đã và đang khẳng định vị thế là một trong những đơn vị trang trí gia tiên, tiệc cưới uy tín và chất lượng hàng đầu tại TP.HCM.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Loài hoa Dã Quỳ tượng trưng cho sức sống mãnh liệt, sự thủy chung son sắt và tình yêu kiên định. Với thông điệp đó, chúng tôi luôn nỗ lực mang lại không gian tiệc cưới ấm cúng, sang trọng và chuẩn mực lễ nghi gia tiên, giúp cô dâu chú rể lưu giữ những khoảnh khắc đẹp nhất đời mình.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-rose-700 shrink-0" />
                  <div>
                    <span className="block font-bold text-base text-gray-900 font-serif">10+ Năm</span>
                    <span className="text-xs text-gray-500">Kinh nghiệm ngành cưới</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-rose-700 shrink-0" />
                  <div>
                    <span className="block font-bold text-base text-gray-900 font-serif">5.000+</span>
                    <span className="text-xs text-gray-500">Cặp đôi tin tưởng</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/cuoi1.jpg" 
                alt="Gia tiên Dã Quỳ" 
                className="rounded-2xl aspect-4/5 object-cover shadow-md"
              />
              <img 
                src="/images/cuoi3.jpg" 
                alt="Tiệc cưới Dã Quỳ" 
                className="rounded-2xl aspect-4/5 object-cover shadow-md mt-6"
              />
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
            <Target className="w-10 h-10 text-rose-700 mb-4" />
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Sứ Mệnh</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mang đến những không gian cưới hỏi thiêng liêng, hoàn hảo với mức chi phí tối ưu nhất, xóa tan nỗi lo toan ngân sách cho các cặp đôi trẻ.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
            <Sparkles className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Tầm Nhìn</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Trở thành thương hiệu trang trí tiệc cưới hàng đầu miền Nam về chất lượng thiết kế, sự tận tâm và cam kết đúng tiến độ 100%.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
            <Heart className="w-10 h-10 text-rose-600 mb-4" />
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Giá Trị Cốt Lõi</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Tâm huyết trong từng chi tiết – Tôn trọng chuẩn mực gia phong – Đổi mới sáng tạo không ngừng – Đồng hành chu đáo như người thân.
            </p>
          </div>
        </div>

        {/* Showroom Contact Card */}
        <div className="bg-gradient-to-r from-rose-900 to-rose-950 text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">Ghé Thăm Showroom Trưng Bày Của Dã Quỳ</h3>
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl">
              Địa chỉ: {BRAND_INFO.address}. Mở cửa đón tiếp cô dâu chú rể từ {BRAND_INFO.openingHours} tất cả các ngày trong tuần.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Tư Vấn Showroom')}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shrink-0 cursor-pointer"
          >
            Hẹn Lịch Tư Vấn Trực Tiếp
          </button>
        </div>
      </div>
    </div>
  );
};
