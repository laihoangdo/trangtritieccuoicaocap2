import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';

interface GiaTienPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const GiaTienPage: React.FC<GiaTienPageProps> = ({ onOpenQuoteModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('q') || '';
  const queryTier = searchParams.get('tier') || '';

  const [selectedTone, setSelectedTone] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>(queryTier ? queryTier : 'all');
  const [sortOrder, setSortOrder] = useState<string>('default');
  const [localSearch, setLocalSearch] = useState(querySearch);

  const tones = [
    { id: 'all', name: 'Tất cả tông màu' },
    { id: 'Tông Đỏ', name: 'Tông Đỏ Truyền Thống' },
    { id: 'Tông Sen', name: 'Tông Sen Thanh Lịch' },
    { id: 'Tông Đỏ Trắng', name: 'Tông Đỏ Trắng Hiện Đại' },
    { id: 'Tông Nâu Vintage', name: 'Tông Nâu Vintage' },
    { id: 'Tông Vàng Hoàng Gia', name: 'Tông Vàng Hoàng Gia' },
    { id: 'Tông Hồng Pastel', name: 'Tông Hồng Pastel' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Must be gia-tien or cong-hoa
      const matchCat = item.category === 'gia-tien' || item.category === 'cong-hoa';
      const matchTone = selectedTone === 'all' || item.tone === selectedTone;
      const matchSearch = localSearch
        ? item.name.toLowerCase().includes(localSearch.toLowerCase()) ||
          item.shortDesc.toLowerCase().includes(localSearch.toLowerCase())
        : true;
      return matchCat && matchTone && matchSearch;
    }).sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedTone, localSearch, sortOrder]);

  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-950 text-white py-12 border-b border-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            BỘ SƯU TẬP 2026
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Trang Trí Gia Tiên &amp; Cổng Hoa Cưới
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Dã Quỳ Decor mang đến hơn 500+ mẫu gia tiên đẹp trang nghiêm, từ phong cách truyền thống đến thiết kế độc bản theo yêu cầu, trọn gói chỉ từ 3.999.000đ.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb & Filter Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tone Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-rose-700 shrink-0 hidden sm:block" />
            <span className="text-xs font-bold text-gray-600 shrink-0 hidden sm:block">Màu sắc:</span>
            {tones.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTone(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTone === t.id
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Sort & Search */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-xs rounded-lg px-3 py-2 outline-hidden font-medium text-gray-700"
            >
              <option value="default">Sắp xếp mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>

            <div className="relative flex-1 md:w-48">
              <input
                type="text"
                placeholder="Tìm mẫu..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-lg outline-hidden"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onConsult={(p) => onOpenQuoteModal(p.name)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 mb-12">
            <p className="text-gray-500 text-sm mb-4">
              Không tìm thấy mẫu phù hợp với tiêu chí lọc của bạn.
            </p>
            <button
              onClick={() => {
                setSelectedTone('all');
                setLocalSearch('');
              }}
              className="bg-rose-700 text-white font-bold text-xs py-2 px-4 rounded-lg"
            >
              Xem tất cả mẫu
            </button>
          </div>
        )}

        {/* Consultation Callout */}
        <div className="bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Khảo Sát Miễn Phí Tại Nhà
            </span>
            <h3 className="font-serif font-black text-xl text-gray-900 mb-2">
              Bạn có kích thước nhà riêng đặc thù hoặc muốn phối màu riêng?
            </h3>
            <p className="text-xs text-gray-600 max-w-xl">
              Đội ngũ thiết kế của Dã Quỳ Decor sẵn sàng đến tận nhà bạn để đo đạc và lên bản phối màu 3D miễn phí 100%.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal('Gia Tiên Thiết Kế Theo Yêu Cầu')}
              className="bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-md cursor-pointer"
            >
              Đặt Lịch Khảo Sát
            </button>
            <a
              href={`tel:${BRAND_INFO.hotline}`}
              className="bg-white text-rose-700 border border-rose-300 font-bold text-xs uppercase px-4 py-3 rounded-lg flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{BRAND_INFO.hotlineFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
