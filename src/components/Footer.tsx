import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard,
  ChevronRight,
  ExternalLink,
  Youtube
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1e22] text-gray-300 pt-12 pb-6 border-t-4 border-rose-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 px-2 bg-white/95 rounded-lg flex items-center justify-center shrink-0 shadow-xs">
                <img src={BRAND_INFO.logo} alt="Logo" className="h-9 w-auto object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-black text-lg text-white tracking-wide uppercase">
                  {BRAND_INFO.shortName}
                </h3>
                <span className="text-[11px] text-amber-400 font-semibold tracking-wider uppercase block">
                  Wedding &amp; Event Decor
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              {BRAND_INFO.slogan}. Tự hào đồng hành cùng hơn 5.000+ cặp đôi xây dựng ngày cưới thiêng liêng, hoàn hảo và trọn vẹn nhất tại TP.HCM.
            </p>

            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Showroom:</strong> {BRAND_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <span><strong>Hotline:</strong> <a href={`tel:${BRAND_INFO.hotline}`} className="text-amber-400 hover:underline font-bold text-sm">{BRAND_INFO.hotlineFormatted}</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span><strong>Email:</strong> <a href={`mailto:${BRAND_INFO.email}`} className="text-gray-300 hover:text-white">{BRAND_INFO.email}</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-500 shrink-0" />
                <span><strong>Giờ mở cửa:</strong> {BRAND_INFO.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-gray-700/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              Dịch Vụ Cưới Hỏi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/trang-tri-gia-tien" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Trang Trí Gia Tiên – Cổng Hoa
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-cuoi#san-khau" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Trang Trí Sân Khấu – Lối Đi
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-cuoi#backdrop" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Backdrop Chụp Hình – Gallery
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-cuoi#rap-cuoi" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Rạp Cưới – Bàn Ghế Tiệc
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-cuoi#mam-qua" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Mâm Quả Cưới – Rồng Phụng
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-cuoi#dam-ngo" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Lễ Vật Dạm Ngõ &amp; Hoa Cầm Tay
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-cuoi#xe-hoa" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Xe Hoa – Trang Trí Xe Hoa
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-cuoi#ao-dai" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Áo Dài – Nhân Sự Bưng Quả
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies & Guides */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-gray-700/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              Chính Sách &amp; Hỗ Trợ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/bang-gia" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Báo Giá Thiết Bị Cưới Hỏi Trọn Gói
                </Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Giới Thiệu Đội Ngũ Dã Quỳ Decor
                </Link>
              </li>
              <li>
                <Link to="/cam-nang-cuoi" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Kinh Nghiệm Chọn Mẫu Gia Tiên Đẹp
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Hình Ảnh Khách Hàng Thực Tế
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  Quy Trình Khảo Sát Tận Nhà Miễn Phí
                </Link>
              </li>
              <li className="pt-2">
                <div className="bg-gray-800/80 p-2.5 rounded border border-gray-700 text-[11px] text-gray-300">
                  <div className="flex items-center gap-1 text-amber-400 font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Cam Kết Của Chúng Tôi</span>
                  </div>
                  <p>Mẫu thi công thực tế giống ảnh thiết kế 100%. Không phát sinh bất kỳ chi phí nào sau khi ký hợp đồng.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Fanpage & Map */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-gray-700/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              Follow Fanpage &amp; Bản Đồ
            </h4>
            
            {/* Fanpage Link Box */}
            <div className="bg-gray-800/90 rounded-lg p-3 border border-gray-700 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  f
                </div>
                <div>
                  <a 
                    href={BRAND_INFO.facebook} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-bold text-xs text-white hover:text-blue-400 flex items-center gap-1"
                  >
                    <span>{BRAND_INFO.facebookText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-gray-400 block">Trang trí tiệc cưới chuyên nghiệp</span>
                </div>
              </div>
              <a 
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold py-1.5 rounded transition-colors"
              >
                Ghé Thăm Fanpage Facebook
              </a>
            </div>

            {/* YouTube Box */}
            <div className="bg-gray-800/90 rounded-lg p-3 border border-gray-700 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Youtube className="w-3.5 h-3.5 fill-white" />
                </div>
                <div className="leading-tight">
                  <a 
                    href={BRAND_INFO.youtube} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-bold text-xs text-white hover:text-red-400 flex items-center gap-1"
                  >
                    <span>Kênh YouTube Dã Quỳ Decor</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-gray-400 block">{BRAND_INFO.youtubeText}</span>
                </div>
              </div>
              <a 
                href={BRAND_INFO.youtube}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-red-600 hover:bg-red-700 text-white text-[11px] font-semibold py-1.5 rounded transition-colors"
              >
                Đăng Ký Kênh YouTube
              </a>
            </div>

            {/* Google Maps link */}
            <div className="bg-gray-800/90 rounded-lg p-3 border border-gray-700 mb-3 text-xs">
              <div className="flex items-center justify-between text-gray-300 mb-1">
                <span className="font-semibold text-white">Chỉ Đường Google Maps</span>
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
              </div>
              <p className="text-[11px] text-gray-400 mb-2 truncate">
                33/6 Phan Văn Hớn, Q.12, TP.HCM
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BRAND_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Xem bản đồ đường đi</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Payment methods */}
            <div className="text-[11px] text-gray-400">
              <span className="block text-gray-300 font-semibold mb-1">Phương thức thanh toán:</span>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300">Tiền mặt</span>
                <span className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300">Chuyển khoản</span>
                <span className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300">Quét mã QR</span>
                <span className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300">Momo / ZaloPay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-6 border-t border-gray-800 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-center sm:text-left">
            © 2026 <strong>{BRAND_INFO.name}</strong>. Tất cả quyền được bảo lưu. Giữ trọn ngày vui cùng hạnh phúc lứa đôi.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <Link to="/gioi-thieu" className="hover:text-gray-300">Về chúng tôi</Link>
            <span>•</span>
            <Link to="/bang-gia" className="hover:text-gray-300">Bảng giá</Link>
            <span>•</span>
            <Link to="/lien-he" className="hover:text-gray-300">Liên hệ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
