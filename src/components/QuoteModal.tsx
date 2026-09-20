import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, MapPin, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Quận 12');
  const [service, setService] = useState(defaultService || 'Gói Gia Tiên Tiết Kiệm (3.999k)');
  const [eventDate, setEventDate] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-rose-800 to-rose-700 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Tư Vấn Miễn Phí &amp; Khảo Sát Tận Nhà</span>
          </div>
          <h3 className="font-serif font-bold text-xl text-white">
            Nhận Báo Giá Chi Tiết &amp; Ưu Đãi Ngày Cưới
          </h3>
          <p className="text-xs text-rose-100 mt-1">
            {BRAND_INFO.shortName} cam kết hỗ trợ trong 5 phút - Khảo sát không tốn phí!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 font-serif">
                Đăng Ký Tư Vấn Thành Công!
              </h4>
              <p className="text-sm text-gray-600 mb-4 max-w-sm mx-auto">
                Cảm ơn bạn! Đội ngũ tư vấn viên của <strong>{BRAND_INFO.shortName}</strong> sẽ liên hệ qua số <strong>{phone}</strong> trong ít phút để gửi bảng mẫu và báo giá chi tiết.
              </p>
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-xs text-rose-800 mb-6">
                Cần tư vấn gấp? Vui lòng gọi trực tiếp hotline: <strong className="font-bold">{BRAND_INFO.hotlineFormatted}</strong>
              </div>
              <button
                onClick={handleReset}
                className="bg-rose-700 hover:bg-rose-800 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors cursor-pointer"
              >
                Đóng Cửa Sổ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Họ và tên của bạn:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Thị Mai"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Số điện thoại / Zalo: <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0931 xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Ngày tổ chức dự kiến:
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Dịch vụ quan tâm:
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-hidden bg-white"
                  >
                    <option value="Gói Gia Tiên Tiết Kiệm (3.999k)">Gói Gia Tiên Tiết Kiệm (3.999k)</option>
                    <option value="Gói Gia Tiên Vách Cơ Bản (4.999k)">Gói Gia Tiên Vách Cơ Bản (4.999k)</option>
                    <option value="Gói Gia Tiên Nâng Cao (6.499k)">Gói Gia Tiên Nâng Cao (6.499k)</option>
                    <option value="Gói Gia Tiên Thiết Kế VIP (8.999k)">Gói Gia Tiên Thiết Kế VIP (8.999k)</option>
                    <option value="Trang Trí Cổng Hoa Cưới">Trang Trí Cổng Hoa Cưới</option>
                    <option value="Backdrop Chụp Hình & Bàn Gallery">Backdrop Chụp Hình &amp; Gallery</option>
                    <option value="Rạp Cưới & Bàn Ghế Tiệc">Rạp Cưới &amp; Bàn Ghế Tiệc</option>
                    <option value="Mâm Quả Cưới - Rồng Phụng">Mâm Quả Cưới - Rồng Phụng</option>
                    <option value="Trọn Gói Cưới Hỏi Tất Cả">Trọn Gói Cưới Hỏi Tất Cả</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Khu vực tại TP.HCM:
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-hidden bg-white"
                  >
                    <option value="Quận 12">Quận 12</option>
                    <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                    <option value="Quận Tân Bình">Quận Tân Bình</option>
                    <option value="Quận Tân Phú">Quận Tân Phú</option>
                    <option value="Quận Bình Tân">Quận Bình Tân</option>
                    <option value="Huyện Hóc Môn">Huyện Hóc Môn</option>
                    <option value="TP. Thủ Đức">TP. Thủ Đức</option>
                    <option value="Quận 1 / 3 / 5 / 10">Quận 1 / 3 / 5 / 10</option>
                    <option value="Quận Bình Thạnh / Phú Nhuận">Quận Bình Thạnh / Phú Nhuận</option>
                    <option value="Quận 7 / 8 / Nhà Bè">Quận 7 / 8 / Nhà Bè</option>
                    <option value="Khu vực lân cận (Bình Dương, Long An...)">Khu vực lân cận</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Yêu cầu đặc biệt hoặc kích thước phòng khách:
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Tone màu đỏ sen, nhà chung cư, muốn khảo sát vào cuối tuần..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-800 hover:to-rose-900 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Nhận Báo Giá Ngay</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center">
                Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi không spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
