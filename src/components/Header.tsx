import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  CalendarDays,
  FileText
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { getAssetUrl } from '../utils/image';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchCategory, setSearchCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/trang-tri-gia-tien?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50">
      {/* 1. TOP BAR */}
      <div className="bg-[#212529] text-gray-200 text-xs py-2 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-2">
            {/* Left: Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a 
                href={`tel:${BRAND_INFO.hotline}`} 
                className="flex items-center gap-1.5 hover:text-rose-400 transition-colors font-medium"
                title="Gọi ngay hotline tư vấn"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Hotline: <strong className="text-white">{BRAND_INFO.hotlineFormatted}</strong></span>
              </a>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span className="truncate max-w-xs xl:max-w-sm">{BRAND_INFO.address}</span>
              </div>
              <span className="text-gray-600 hidden xl:inline">|</span>
              <div className="hidden xl:flex items-center gap-1.5 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-rose-500" />
                <span>{BRAND_INFO.email}</span>
              </div>
            </div>

            {/* Right: Social & Quick links */}
            <div className="flex items-center gap-3 text-xs ml-auto">
              <a 
                href={BRAND_INFO.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-rose-400 transition-colors"
              >
                <span className="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">f</span>
                <span className="hidden sm:inline">Facebook</span>
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href={BRAND_INFO.zaloUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors font-medium"
              >
                <span className="bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">Z</span>
                <span>Zalo</span>
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-amber-400 flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3" /> 07:30 - 22:00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Logo, Search Bar, Hotline Box, Quick CTA) */}
      <div className="py-3.5 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img 
                src={BRAND_INFO.logo} 
                alt={BRAND_INFO.name} 
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = getAssetUrl('images/da-quy.png');
                }}
              />
              <div className="hidden sm:block">
                <span className="block font-black text-lg sm:text-xl tracking-tight text-rose-800 font-serif leading-none uppercase">
                  {BRAND_INFO.shortName}
                </span>
                <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">
                  Wedding &amp; Event Decor
                </span>
              </div>
            </Link>

            {/* Search Box (Desktop & Tablet) */}
            <div className="hidden md:flex flex-1 max-w-xs lg:max-w-md xl:max-w-xl mx-2 lg:mx-4">
              <form onSubmit={handleSearch} className="w-full flex items-center rounded-lg border border-rose-700/40 shadow-xs hover:border-rose-600 focus-within:border-rose-600 overflow-hidden bg-white">
                <select 
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="hidden xl:block bg-gray-50 text-gray-700 text-xs px-3 py-2.5 border-r border-gray-200 outline-hidden font-medium cursor-pointer shrink-0"
                >
                  <option value="all">Tất cả danh mục</option>
                  <option value="gia-tien">Trang trí Gia Tiên</option>
                  <option value="cong-hoa">Cổng Hoa Cưới</option>
                  <option value="san-khau">Sân Khấu - Backdrop</option>
                  <option value="rap-cuoi">Rạp Cưới - Bàn Ghế</option>
                  <option value="mam-qua">Mâm Quả Rồng Phụng</option>
                  <option value="xe-hoa">Xe Hoa Rước Dâu</option>
                </select>
                <input 
                  type="text"
                  placeholder="Tìm kiếm mẫu gia tiên, cổng hoa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-hidden"
                />
                <button 
                  type="submit" 
                  className="bg-rose-700 hover:bg-rose-800 text-white px-3.5 sm:px-5 py-2.5 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  title="Tìm kiếm"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right: Hotline Box & Action Button */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
              {/* Phone box */}
              <a 
                href={`tel:${BRAND_INFO.hotline}`}
                className="hidden sm:flex items-center gap-2.5 p-1 rounded-lg hover:bg-rose-50 transition-colors group"
                title={`Hotline tư vấn 24/7: ${BRAND_INFO.hotlineFormatted}`}
              >
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-700 text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 animate-ping"></span>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 fill-white" />
                </div>
                <div className="hidden xl:block">
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                    Hotline Tư Vấn 24/7
                  </span>
                  <span className="block font-bold text-rose-700 text-base leading-none whitespace-nowrap">
                    {BRAND_INFO.hotlineFormatted}
                  </span>
                </div>
              </a>

              {/* Nhận báo giá button */}
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all transform active:scale-95 cursor-pointer uppercase tracking-wide shrink-0"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Nhận Báo Giá</span>
              </button>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Mở menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-rose-700" /> : <Menu className="w-6 h-6 text-rose-700" />}
              </button>
            </div>
          </div>

          {/* Search Box (Mobile view) */}
          <div className="mt-3 md:hidden">
            <form onSubmit={handleSearch} className="w-full flex items-center rounded-lg border border-rose-700/40 shadow-xs overflow-hidden bg-white">
              <input 
                type="text"
                placeholder="Tìm kiếm mẫu gia tiên, gói trang trí..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-hidden"
              />
              <button 
                type="submit" 
                className="bg-rose-700 text-white px-4 py-2 flex items-center justify-center"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR (Desktop Red/Burgundy Flatsome Theme) */}
      <nav className="hidden lg:block bg-[#991b1b] text-white border-b-2 border-amber-400/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center text-xs font-bold uppercase tracking-wider">
            {/* Trang chủ */}
            <li>
              <Link 
                to="/" 
                className={`block py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                Trang Chủ
              </Link>
            </li>

            {/* DỊCH VỤ CHO THUÊ TRỌN GÓI */}
            <li 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('thue-tron-goi')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/dich-vu-cuoi"
                className={`flex items-center gap-1 py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/dich-vu-cuoi') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                <span>Dịch Vụ Cho Thuê Trọn Gói</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Submenu */}
              <div className="absolute left-0 top-full w-72 bg-white text-gray-800 shadow-xl rounded-b-md border-t-2 border-rose-700 py-2 hidden group-hover:block transition-all z-50">
                <Link to="/trang-tri-gia-tien" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Trang Trí Gia Tiên &amp; Cổng Hoa
                </Link>
                <Link to="/dich-vu-cuoi#san-khau" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Trang Trí Sân Khấu &amp; Lối Đi
                </Link>
                <Link to="/dich-vu-cuoi#backdrop" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Backdrop Chụp Hình &amp; Bàn Gallery
                </Link>
                <Link to="/dich-vu-cuoi#rap-cuoi" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Rạp Cưới &amp; Bàn Ghế Tiệc
                </Link>
                <Link to="/dich-vu-cuoi#xe-hoa" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Xe Hoa &amp; Trang Trí Xe Hoa
                </Link>
                <Link to="/dich-vu-cuoi#ao-dai" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Áo Dài &amp; Nhân Sự Bưng Quả
                </Link>
                <Link to="/dich-vu-cuoi#mam-qua" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Mâm Quả &amp; Rồng Phụng
                </Link>
                <Link to="/dich-vu-cuoi#dam-ngo" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Lễ Vật Dạm Ngõ &amp; Hoa Cầm Tay
                </Link>
              </div>
            </li>

            {/* TRANG TRÍ GIA TIÊN CỔNG HOA */}
            <li 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('gia-tien')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/trang-tri-gia-tien"
                className={`flex items-center gap-1 py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/trang-tri-gia-tien') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                <span>Trang Trí Gia Tiên Cổng Hoa</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Submenu */}
              <div className="absolute left-0 top-full w-64 bg-white text-gray-800 shadow-xl rounded-b-md border-t-2 border-rose-700 py-2 hidden group-hover:block transition-all z-50">
                <Link to="/trang-tri-gia-tien?tier=tiet-kiem" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Gói Gia Tiên Tiết Kiệm (3.999k)
                </Link>
                <Link to="/trang-tri-gia-tien?tier=co-ban" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Gói Gia Tiên Vách Cơ Bản (4.999k)
                </Link>
                <Link to="/trang-tri-gia-tien?tier=nang-cao" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Gói Gia Tiên Nâng Cao (6.499k)
                </Link>
                <Link to="/trang-tri-gia-tien?tier=thiet-ke" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Gói Gia Tiên Thiết Kế VIP (8.999k)
                </Link>
                <div className="my-1 border-t border-gray-100"></div>
                <Link to="/trang-tri-gia-tien?cat=cong-hoa" className="block px-4 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700 transition-colors">
                  Cổng Hoa Cưới Cao Cấp
                </Link>
              </div>
            </li>

            {/* DỊCH VỤ CƯỚI */}
            <li>
              <Link 
                to="/dich-vu-cuoi"
                className={`block py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/dich-vu-cuoi') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                Dịch Vụ Cưới
              </Link>
            </li>

            {/* BÁO GIÁ THIẾT BỊ CƯỚI HỎI */}
            <li>
              <Link 
                to="/bang-gia"
                className={`block py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/bang-gia') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                Báo Giá Thiết Bị Cưới Hỏi
              </Link>
            </li>

            {/* GIỚI THIỆU */}
            <li>
              <Link 
                to="/gioi-thieu"
                className={`block py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/gioi-thieu') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                Giới Thiệu
              </Link>
            </li>

            {/* CẨM NANG CƯỚI */}
            <li>
              <Link 
                to="/cam-nang-cuoi"
                className={`block py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/cam-nang-cuoi') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                Cẩm Nang Cưới
              </Link>
            </li>

            {/* FEEDBACK */}
            <li>
              <Link 
                to="/feedback"
                className={`block py-3 px-3.5 transition-colors hover:bg-rose-900 ${
                  isActive('/feedback') ? 'bg-rose-950 text-amber-300' : 'text-white'
                }`}
              >
                Feedback
              </Link>
            </li>

            {/* LIÊN HỆ */}
            <li className="ml-auto">
              <Link 
                to="/lien-he"
                className={`block py-3 px-4 transition-colors hover:bg-rose-900 font-extrabold ${
                  isActive('/lien-he') ? 'bg-rose-950 text-amber-300' : 'text-amber-300 hover:text-white'
                }`}
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 4. MOBILE DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="p-4 bg-rose-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={BRAND_INFO.logo} alt="Logo" className="w-8 h-8 rounded-full bg-white p-0.5" />
                <span className="font-bold text-sm uppercase">{BRAND_INFO.shortName}</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md hover:bg-rose-900 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 py-3 px-2 space-y-1">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md font-bold text-sm text-gray-800 hover:bg-rose-50 hover:text-rose-700"
              >
                Trang Chủ
              </Link>

              <div className="border-t border-gray-100 my-1"></div>

              <div className="px-3 py-1 text-xs font-bold text-rose-800 uppercase tracking-wider">
                Dịch Vụ Cho Thuê Trọn Gói
              </div>
              <Link 
                to="/trang-tri-gia-tien" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-rose-700"
              >
                • Trang Trí Gia Tiên &amp; Cổng Hoa
              </Link>
              <Link 
                to="/dich-vu-cuoi#san-khau" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-rose-700"
              >
                • Trang Trí Sân Khấu &amp; Lối Đi
              </Link>
              <Link 
                to="/dich-vu-cuoi#backdrop" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-rose-700"
              >
                • Backdrop Chụp Hình &amp; Gallery
              </Link>
              <Link 
                to="/dich-vu-cuoi#rap-cuoi" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-rose-700"
              >
                • Rạp Cưới &amp; Bàn Ghế Tiệc
              </Link>
              <Link 
                to="/dich-vu-cuoi#xe-hoa" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-rose-700"
              >
                • Xe Hoa &amp; Trang Trí Xe Hoa
              </Link>
              <Link 
                to="/dich-vu-cuoi#mam-qua" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-rose-700"
              >
                • Mâm Quả &amp; Rồng Phụng
              </Link>

              <div className="border-t border-gray-100 my-1"></div>

              <Link 
                to="/bang-gia" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md font-bold text-sm text-gray-800 hover:bg-rose-50 hover:text-rose-700"
              >
                Báo Giá Thiết Bị Cưới Hỏi
              </Link>

              <Link 
                to="/gioi-thieu" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md font-bold text-sm text-gray-800 hover:bg-rose-50 hover:text-rose-700"
              >
                Giới Thiệu
              </Link>

              <Link 
                to="/cam-nang-cuoi" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md font-bold text-sm text-gray-800 hover:bg-rose-50 hover:text-rose-700"
              >
                Cẩm Nang Cưới
              </Link>

              <Link 
                to="/feedback" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md font-bold text-sm text-gray-800 hover:bg-rose-50 hover:text-rose-700"
              >
                Khách Hàng Nói Gì (Feedback)
              </Link>

              <Link 
                to="/lien-he" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md font-bold text-sm text-rose-700 hover:bg-rose-50"
              >
                Liên Hệ Showroom
              </Link>
            </div>

            {/* Drawer Footer Contact */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs space-y-2">
              <a href={`tel:${BRAND_INFO.hotline}`} className="flex items-center gap-2 text-rose-700 font-bold">
                <Phone className="w-4 h-4" />
                <span>Hotline: {BRAND_INFO.hotlineFormatted}</span>
              </a>
              <div className="text-gray-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full mt-2 bg-amber-500 text-white font-bold py-2 rounded text-center block uppercase tracking-wider"
              >
                Yêu Cầu Báo Giá
              </button>
            </div>
          </div>

          <div 
            className="flex-1" 
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};
