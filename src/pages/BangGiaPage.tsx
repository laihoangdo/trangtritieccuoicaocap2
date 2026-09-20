import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  FileText,
  BadgePercent
} from 'lucide-react';
import { PACKAGE_TIERS, BRAND_INFO } from '../data/mockData';

interface BangGiaPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const BangGiaPage: React.FC<BangGiaPageProps> = ({ onOpenQuoteModal }) => {
  const equipmentPrices = [
    { name: 'Bàn ghế inox tiêu chuẩn (1 bàn + 10 ghế đôn)', unit: 'Bộ', price: '150.000đ' },
    { name: 'Bàn ghế Tiffany cao cấp kèm nơ theo tone màu (1 bàn + 10 ghế)', unit: 'Bộ', price: '450.000đ - 650.000đ' },
    { name: 'Nhà bạt rạp cưới che mưa nắng vòm cao cấp', unit: 'Khung / Gian', price: '600.000đ - 900.000đ' },
    { name: 'Cổng hoa cưới lụa cao cấp thiết kế vòm tròn / vuông', unit: 'Cổng', price: '1.200.000đ - 2.500.000đ' },
    { name: 'Backdrop chụp hình tiệc cưới hoa lụa (kích thước 3m x 2.5m)', unit: 'Gói', price: '3.500.000đ - 6.000.000đ' },
    { name: 'Bàn Gallery đón khách (thùng tiền mừng, chân nến, hoa)', unit: 'Bàn', price: '1.500.000đ - 2.500.000đ' },
    { name: 'Bộ mâm quả sơn mài cao cấp (trống quả)', unit: 'Bộ 6 quả', price: '500.000đ - 800.000đ' },
    { name: 'Cặp Rồng Phụng kết trái cây tươi nghệ thuật', unit: 'Cặp', price: '1.800.000đ - 2.800.000đ' },
    { name: 'Trang trí xe hoa cưới hoa lụa nhập khẩu cao cấp', unit: 'Xe', price: '800.000đ - 1.500.000đ' },
    { name: 'Áo dài bê quả nam/nữ cách tân truyền thống', unit: 'Bộ', price: '80.000đ - 120.000đ' },
    { name: 'Đội ngũ nhân sự bưng quả đồng đều, duyên dáng', unit: 'Người', price: '150.000đ - 200.000đ' },
    { name: 'Quạt làm mát công nghiệp / Quạt hơi nước', unit: 'Cái', price: '200.000đ - 350.000đ' },
    { name: 'Thảm trải lối đi (đỏ, xám, cỏ nhân tạo xanh)', unit: 'm²', price: '40.000đ - 60.000đ' }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 text-white py-12 border-b border-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            NIÊM YẾT MINH BẠCH - KHÔNG PHÁT SINH
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Bảng Báo Giá Thiết Bị Cưới Hỏi 2026
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Dã Quỳ Decor cam kết mức giá tận xưởng tốt nhất tại TP.HCM. Miễn phí khảo sát mặt bằng tận nhà và tư vấn phương án trang trí tối ưu ngân sách.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Section 1: Gói Gia Tiên So Sánh */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-1">
              BẢNG GIÁ GIA TIÊN TRỌN GÓI
            </span>
            <h2 className="font-serif text-2xl font-black text-gray-900 uppercase">
              Báo Giá 4 Gói Trang Trí Gia Tiên Phổ Biến
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGE_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-white rounded-2xl overflow-hidden border flex flex-col ${
                  tier.isPopular ? 'border-rose-600 shadow-xl ring-2 ring-rose-500/20' : 'border-gray-200 shadow-xs'
                }`}
              >
                <div className={`p-5 text-center ${tier.isPopular ? 'bg-rose-700 text-white' : 'bg-gray-50'}`}>
                  {tier.badge && (
                    <span className="inline-block text-[10px] font-bold bg-amber-400 text-gray-900 px-2 py-0.5 rounded-full mb-1">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-base uppercase font-serif mb-1">
                    {tier.name}
                  </h3>
                  <div className="text-2xl font-black my-2">
                    {tier.priceFormatted}
                  </div>
                  <p className="text-[11px] opacity-80">{tier.tagline}</p>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    {tier.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onOpenQuoteModal(tier.name)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-rose-700 hover:bg-rose-800 text-white transition-colors cursor-pointer"
                  >
                    Đăng Ký Gói Này
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Thiết Bị Cưới Hỏi Bán Lẻ / Cho Thuê Riêng */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <span className="text-rose-700 font-bold text-xs uppercase tracking-widest block mb-1">
                DANH MỤC THIẾT BỊ
              </span>
              <h3 className="font-serif text-xl font-bold text-gray-900">
                Bảng Giá Cho Thuê Thiết Bị Cưới Hỏi Riêng Lẻ
              </h3>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Báo Giá Thiết Bị Rời')}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg cursor-pointer"
            >
              Yêu Cầu Báo Giá Nhanh
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-700">
              <thead className="bg-gray-50 uppercase text-[11px] text-gray-600 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold">STT</th>
                  <th className="py-3 px-4 font-bold">Tên Thiết Bị / Dịch Vụ</th>
                  <th className="py-3 px-4 font-bold">Đơn Vị Tính</th>
                  <th className="py-3 px-4 font-bold text-right">Đơn Giá Tham Khảo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {equipmentPrices.map((eq, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3 px-4 text-gray-400 font-medium">{i + 1}</td>
                    <td className="py-3 px-4 font-semibold text-gray-800">{eq.name}</td>
                    <td className="py-3 px-4 text-gray-500">{eq.unit}</td>
                    <td className="py-3 px-4 text-right font-bold text-rose-700">{eq.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-500 space-y-1">
            <p><strong>Lưu ý:</strong> Đơn giá trên áp dụng cho khu vực nội thành TP.HCM (Quận 12, Gò Vấp, Hóc Môn, Tân Bình, Tân Phú, Bình Tân...).</p>
            <p>Khách hàng thuê trọn gói combo từ 2 dịch vụ trở lên sẽ được áp dụng chính sách chiết khấu giảm 10% - 15% tổng hóa đơn.</p>
          </div>
        </div>

        {/* Section 3: Cam kết & Bảo hành */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-rose-700 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">Cam Kết Không Phát Sinh</h4>
              <p className="text-xs text-gray-600">Giá ký kết hợp đồng là giá trọn gói cuối cùng, không phụ thu phát sinh.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
            <BadgePercent className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">Ưu Đãi Đặt Cọc Sớm</h4>
              <p className="text-xs text-gray-600">Tặng ngay bộ giá để hình cổng và miễn phí chữ xốp kim tuyến tên cô dâu chú rể.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
            <PhoneCall className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">Hỗ Trợ Nhanh 24/7</h4>
              <p className="text-xs text-gray-600">Đội ngũ kỹ thuật túc trực và xử lý sự cố trong suốt quá trình diễn ra buổi lễ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
