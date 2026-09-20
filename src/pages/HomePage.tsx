import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Heart, 
  PhoneCall,
  Calendar,
  Layers,
  Award,
  Clock,
  Palette,
  BadgeDollarSign,
  HeartHandshake
} from 'lucide-react';
import { 
  BRAND_INFO, 
  SERVICE_CATEGORIES, 
  PRODUCTS, 
  PACKAGE_TIERS, 
  TESTIMONIALS, 
  BLOG_POSTS, 
  WORK_PROCESS,
  WHY_CHOOSE_US
} from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { ProductItem } from '../types';
import { getAssetUrl } from '../utils/image';

interface HomePageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTone, setSelectedTone] = useState('all');

  const bannerSlides = [
    {
      image: getAssetUrl('/images/cuoi1.jpg'),
      subheading: 'Dã Quỳ Decor & Event - Dịch Vụ Cưới Hỏi Trọn Gói TP.HCM',
      title: 'TRANG TRÍ GIA TIÊN CAO CẤP · GIÁ RẺ TIẾT KIỆM',
      desc: 'Trọn gói trang trí bàn thờ gia tiên, bàn họ 12 ghế Tiffany, ấm tách Minh Long và cổng hoa cưới chỉ từ 3.999.000đ',
      ctaText: 'Xem Bảng Giá',
      ctaLink: '/bang-gia',
      secondaryText: 'Tư Vấn Miễn Phí',
      badge: 'ƯU ĐÃI ĐẶC BIỆT MÙA CƯỚI 2026'
    },
    {
      image: getAssetUrl('/images/slide-1.jpg'),
      subheading: 'Hơn 500+ Mẫu Hoa Lụa Nhập Khẩu Đẹp Tựa Hoa Tươi',
      title: 'THIẾT KẾ GIA TIÊN TÔNG SEN · VINTAGE & HIỆN ĐẠI',
      desc: 'Tùy biến phong cách riêng biệt, khảo sát đo đạc tại nhà miễn phí trên khắp 24 quận huyện TP.HCM',
      ctaText: 'Xem Mẫu Gia Tiên',
      ctaLink: '/trang-tri-gia-tien',
      secondaryText: 'Khảo Sát Tận Nhà',
      badge: 'CAM KẾT GIỐNG MẪU 100%'
    },
    {
      image: getAssetUrl('/images/cuoi3.jpg'),
      subheading: 'Trọn Gói Cưới Hỏi Tiết Kiệm Thời Gian & Chi Phí',
      title: 'RẠP CƯỚI · SÂN KHẤU · BACKDROP · MÂM QUẢ',
      desc: 'Đồng bộ màu sắc từ lễ gia tiên tại nhà đến sảnh tiệc, mang lại dấu ấn viên mãn và khó quên nhất',
      ctaText: 'Dịch Vụ Cưới',
      ctaLink: '/dich-vu-cuoi',
      secondaryText: 'Nhận Báo Giá',
      badge: 'ĐỘI NGŨ 10+ NĂM KINH NGHIỆM'
    }
  ];

  // Auto advance slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  const toneTabs = [
    { id: 'all', label: 'Tất Cả Mẫu' },
    { id: 'Tông Đỏ', label: 'Tông Đỏ' },
    { id: 'Tông Sen', label: 'Tông Sen' },
    { id: 'Tông Đỏ Trắng', label: 'Tông Đỏ Trắng' },
    { id: 'Tông Nâu Vintage', label: 'Tông Nâu Vintage' },
    { id: 'Tông Vàng Hoàng Gia', label: 'Tông Vàng' },
    { id: 'Tông Hồng Pastel', label: 'Tông Hồng Pastel' }
  ];

  const filteredProducts = selectedTone === 'all'
    ? PRODUCTS.filter((p) => p.category === 'gia-tien')
    : PRODUCTS.filter((p) => p.category === 'gia-tien' && p.tone === selectedTone);

  return (
    <div className="w-full bg-[#f8f9fa]">
      {/* 1. HERO BANNER SLIDER */}
      <section className="relative w-full h-[480px] sm:h-[540px] md:h-[620px] overflow-hidden bg-gray-900">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Dark & Warm Vignette */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
            </div>

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 bg-rose-600/90 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  {slide.badge}
                </span>

                <p className="text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 font-sans">
                  {slide.subheading}
                </p>

                <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-gray-200 text-xs sm:text-base leading-relaxed mb-8 max-w-xl">
                  {slide.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to={slide.ctaLink}
                    className="bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg hover:shadow-rose-700/50 transition-all transform active:scale-95 flex items-center gap-2"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onOpenQuoteModal('Gia Tiên Trọn Gói')}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/40 font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg backdrop-blur-xs transition-all cursor-pointer"
                  >
                    {slide.secondaryText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Slide trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Slide tiếp theo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Đi tới slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. DỊCH VỤ CHO THUÊ TRỌN GÓI (8 Service Categories matching trangtrigiatiengiare.com) */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
              DÃ QUỲ WEDDING &amp; EVENT
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
              Dịch Vụ Cho Thuê Trọn Gói
            </h2>
            <div className="w-20 h-1 bg-rose-700 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Cung cấp trọn vẹn mọi hạng mục trang trí cưới hỏi tại gia và tiệc cưới nhà hàng với chất lượng hoàn hảo, thẩm mỹ tinh tế và báo giá hợp lý nhất TP.HCM.
            </p>
          </div>

          {/* Grid of 8 Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                className="bg-[#fafafa] rounded-xl overflow-hidden border border-gray-200 hover:border-rose-400 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {cat.itemCount}+ Mẫu
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 text-xs sm:text-sm uppercase tracking-wide group-hover:text-rose-700 transition-colors mb-2 leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-200/80 flex items-center justify-between">
                    <Link
                      to={cat.slug}
                      className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:text-rose-800 group-hover:translate-x-1 transition-all"
                    >
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => onOpenQuoteModal(cat.name)}
                      className="text-[11px] text-gray-500 hover:text-amber-600 font-semibold cursor-pointer"
                    >
                      Báo giá
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VÌ SAO CHỌN CHÚNG TÔI (Why Choose Us) */}
      <section className="py-14 sm:py-16 bg-[#faf5f5] border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
              UY TÍN &amp; TẬN TÂM
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
              Vì Sao Chọn Dã Quỳ Decor?
            </h2>
            <div className="w-20 h-1 bg-rose-700 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Chúng tôi thấu hiểu ngày cưới là cột mốc trăm năm của đời người, mỗi chi tiết dù nhỏ nhất đều được chăm chút bằng tất cả tấm lòng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-rose-100 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  {idx === 0 && <BadgeDollarSign className="w-6 h-6" />}
                  {idx === 1 && <Palette className="w-6 h-6" />}
                  {idx === 2 && <Award className="w-6 h-6" />}
                  {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                  {idx === 4 && <Sparkles className="w-6 h-6" />}
                  {idx === 5 && <Clock className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CÁC MẪU GIA TIÊN NỔI BẬT (Featured Products with Tone Filter Tabs) */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
              BỘ SƯU TẬP MỚI NHẤT 2026
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
              Các Mẫu Gia Tiên Nổi Bật
            </h2>
            <div className="w-20 h-1 bg-rose-700 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Tuyển tập những mẫu trang trí gia tiên đẹp sang trọng, hợp phong thủy được thi công thực tế tại các quận huyện TP.HCM.
            </p>
          </div>

          {/* Tone Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {toneTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTone(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTone === tab.id
                    ? 'bg-rose-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onConsult={(p) => onOpenQuoteModal(p.name)}
              />
            ))}
          </div>

          {/* View more button */}
          <div className="text-center">
            <Link
              to="/trang-tri-gia-tien"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-rose-700 text-rose-700 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-8 rounded-lg border-2 border-rose-700 transition-all"
            >
              <span>Xem Thêm Tất Cả Mẫu Gia Tiên</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BÁO GIÁ TRỌN GÓI TIẾT KIỆM (Pricing Package Comparison) */}
      <section className="py-14 sm:py-18 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
              BẢNG GIÁ NIÊM YẾT MINH BẠCH
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
              Báo Giá Trọn Gói Gia Tiên
            </h2>
            <div className="w-20 h-1 bg-rose-700 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Giá trọn gói niêm yết không phát sinh, đã bao gồm phí vận chuyển, công thợ thi công và hỗ trợ chỉnh chu trong ngày lễ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGE_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-white rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 ${
                  tier.isPopular 
                    ? 'border-rose-600 shadow-xl ring-2 ring-rose-500/20 md:-translate-y-2' 
                    : 'border-gray-200 shadow-xs hover:shadow-lg'
                }`}
              >
                {/* Header */}
                <div className={`p-5 text-center ${tier.isPopular ? 'bg-rose-700 text-white' : 'bg-gray-50 text-gray-800'}`}>
                  {tier.badge && (
                    <span className={`inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-2 ${
                      tier.isPopular ? 'bg-amber-400 text-gray-900' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-base uppercase font-serif mb-1">
                    {tier.name}
                  </h3>
                  <div className="text-2xl font-black my-2">
                    {tier.priceFormatted}
                  </div>
                  <p className={`text-[11px] leading-snug ${tier.isPopular ? 'text-rose-100' : 'text-gray-500'}`}>
                    {tier.tagline}
                  </p>
                </div>

                {/* Items */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                    {tier.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <p className="text-[10px] text-gray-400 italic mb-4 text-center">
                      * {tier.note}
                    </p>
                    <button
                      onClick={() => onOpenQuoteModal(tier.name)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        tier.isPopular
                          ? 'bg-rose-700 hover:bg-rose-800 text-white shadow-md'
                          : 'bg-gray-100 hover:bg-rose-700 hover:text-white text-gray-800'
                      }`}
                    >
                      Đặt Lịch Ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUY TRÌNH THỰC HIỆN CHUYÊN NGHIỆP */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
              QUY TRÌNH THI CÔNG CHUẨN MỰC
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
              Quy Trình Làm Việc Chuyên Nghiệp
            </h2>
            <div className="w-20 h-1 bg-rose-700 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Tư vấn – Thiết kế – Sản xuất – Thi công chuyên nghiệp – Bàn giao chính xác mẫu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {WORK_PROCESS.map((p, idx) => (
              <div 
                key={p.step} 
                className="bg-[#fcf8f8] rounded-2xl p-5 border border-rose-100 text-center relative flex flex-col items-center hover:bg-white hover:shadow-lg transition-all"
              >
                {/* Step number badge */}
                <div className="w-12 h-12 rounded-full bg-rose-700 text-white font-black text-lg flex items-center justify-center mb-4 shadow-md border-4 border-rose-100">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 text-sm uppercase mb-2 font-serif">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CHÚNG MÌNH LÀ DÃ QUỲ DECOR & EVENT (About Brand Section) */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#faf5f5] to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={getAssetUrl('images/cuoi1.jpg')} 
                  alt="Trang trí gia tiên Dã Quỳ Decor" 
                  className="rounded-2xl shadow-md w-full aspect-4/5 object-cover"
                />
                <img 
                  src={getAssetUrl('images/cuoi3.jpg')} 
                  alt="Gia tiên tông sen Dã Quỳ Decor" 
                  className="rounded-2xl shadow-md w-full aspect-square object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={getAssetUrl('images/cuoi2.jpg')} 
                  alt="Backdrop tiệc cưới Dã Quỳ Decor" 
                  className="rounded-2xl shadow-md w-full aspect-square object-cover"
                />
                <img 
                  src={getAssetUrl('images/cuoi4.jpg')} 
                  alt="Cổng hoa cưới Dã Quỳ Decor" 
                  className="rounded-2xl shadow-md w-full aspect-4/5 object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                CHÚNG MÌNH LÀ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
                DÃ QUỲ WEDDING &amp; EVENT DECOR
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                Khởi nguồn từ niềm đam mê đem lại cái đẹp và nét trang trọng cho ngày hạnh phúc của các cặp uyên ương, <strong>Dã Quỳ Decor</strong> đã có hơn 10 năm kinh nghiệm trong lĩnh vực trang trí gia tiên, cổng hoa cưới và sự kiện cưới hỏi trọn gói tại TP.HCM.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Với xưởng sản xuất trực tiếp và kho phụ kiện hoa lụa cao cấp đồ sộ, chúng tôi mang đến cho cô dâu chú rể mức giá tận gốc, tiết kiệm tối đa chi phí mà vẫn sở hữu không gian cưới trang hoàng lộng lẫy, chuẩn phong tục gia truyền.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-rose-100 py-6 mb-6">
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-rose-700 font-serif">10+</span>
                  <span className="text-[11px] text-gray-500 font-medium">Năm kinh nghiệm</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-rose-700 font-serif">5.000+</span>
                  <span className="text-[11px] text-gray-500 font-medium">Tiệc cưới hoàn thành</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-rose-700 font-serif">100%</span>
                  <span className="text-[11px] text-gray-500 font-medium">Hài lòng cam kết</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/gioi-thieu"
                  className="bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-colors"
                >
                  Xem Thêm Về Chúng Tôi
                </Link>
                <a
                  href={`tel:${BRAND_INFO.hotline}`}
                  className="flex items-center gap-2 text-rose-700 hover:text-rose-800 font-bold text-xs uppercase"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hotline: {BRAND_INFO.hotlineFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI (Testimonials) */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
              FEEDBACK THỰC TẾ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
              Khách Hàng Nói Gì Về Chúng Tôi?
            </h2>
            <div className="w-20 h-1 bg-rose-700 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Sự hài lòng và nụ cười rạng rỡ của cô dâu chú rể cùng gia đình hai họ là niềm tự hào lớn nhất của Dã Quỳ Decor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#fafafa] p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed italic mb-4">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-rose-200 shrink-0">
                    <img src={t.avatar} alt={t.coupleName} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 font-serif">
                      {t.coupleName}
                    </h4>
                    <span className="text-[10px] text-gray-500 block">
                      {t.location} • {t.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BLOGS & CẨM NANG CƯỚI MỚI NHẤT */}
      <section className="py-14 sm:py-18 bg-[#faf5f5] border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                KINH NGHIỆM TỔ CHỨC CƯỚI
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
                Cẩm Nang &amp; Tin Tức Mới
              </h2>
            </div>
            <Link
              to="/cam-nang-cuoi"
              className="text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1"
            >
              <span>Xem tất cả bài viết</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((blog) => (
              <div 
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden border border-rose-100 shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative aspect-16/9 overflow-hidden bg-gray-100">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-rose-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 block mb-1">
                      {blog.date} • Bởi {blog.author}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-gray-900 group-hover:text-rose-700 transition-colors line-clamp-2 mb-2 leading-snug">
                      <Link to={`/cam-nang-cuoi/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/cam-nang-cuoi/${blog.slug}`}
                    className="text-xs font-bold text-rose-700 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ĐĂNG KÝ TƯ VẤN TRỰC TIẾP (Quick CTA Banner) */}
      <section className="py-12 bg-gradient-to-r from-rose-800 to-rose-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-block bg-amber-400 text-gray-900 font-extrabold text-[10px] uppercase px-3 py-0.5 rounded-full mb-2">
              TIẾT KIỆM ĐẾN 20%
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black mb-2">
              Bạn Cần Tư Vấn Gói Gia Tiên Phù Hợp Với Ngôi Nhà?
            </h2>
            <p className="text-rose-100 text-xs sm:text-sm">
              Để lại thông tin hoặc gọi ngay cho chúng mình để được nhân viên đến tận nhà đo đạc, xem mẫu thực tế và báo giá chi tiết hoàn toàn miễn phí.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Tư Vấn Miễn Phí Tại Nhà')}
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg transition-all transform active:scale-95 cursor-pointer"
            >
              Đăng Ký Tư Vấn Ngay
            </button>
            <a
              href={`tel:${BRAND_INFO.hotline}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl backdrop-blur-xs transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Gọi: {BRAND_INFO.hotlineFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
