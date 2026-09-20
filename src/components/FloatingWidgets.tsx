import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, FileSpreadsheet } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface FloatingWidgetsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gray-800/90 text-white flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all cursor-pointer hover:scale-110"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Quote Request Button */}
      <button
        onClick={onOpenQuoteModal}
        className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3.5 py-2.5 rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer font-bold text-xs uppercase tracking-wider"
        title="Nhận báo giá chi tiết"
      >
        <FileSpreadsheet className="w-4 h-4" />
        <span className="hidden sm:inline">Nhận Báo Giá</span>
      </button>

      {/* Zalo Button */}
      <a
        href={BRAND_INFO.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 group relative"
        title="Chat Zalo tư vấn ngay"
      >
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0088cc] font-black text-xs">
          Zalo
        </div>
        <span className="absolute right-14 bg-gray-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
          Chat Zalo với Dã Quỳ Decor
        </span>
      </a>

      {/* Hotline Pulsating Phone Button */}
      <a
        href={`tel:${BRAND_INFO.hotline}`}
        className="relative w-12 h-12 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group"
        title="Gọi hotline ngay"
      >
        {/* Pulsating radar circles */}
        <span className="absolute -inset-1.5 rounded-full bg-rose-500/50 animate-ping"></span>
        <span className="absolute -inset-1 rounded-full bg-rose-600/40"></span>
        
        <Phone className="w-6 h-6 relative z-10 fill-white animate-bounce" />
        
        <span className="absolute right-14 bg-rose-800 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
          Gọi ngay: {BRAND_INFO.hotlineFormatted}
        </span>
      </a>
    </div>
  );
};
