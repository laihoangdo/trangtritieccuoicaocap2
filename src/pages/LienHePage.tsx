import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const LienHePage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Quận 12');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 text-white py-12 border-b border-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            HỖ TRỢ TƯ VẤN 24/7
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Liên Hệ Dã Quỳ Decor &amp; Event
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe, khảo sát tận nơi và hỗ trợ cô dâu chú rể chuẩn bị ngày cưới trọn vẹn nhất.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
            <h2 className="font-serif text-xl sm:text-2xl font-black text-gray-900 mb-6 pb-3 border-b border-gray-100">
              Thông Tin Showroom &amp; Xưởng Sản Xuất
            </h2>

            <div className="space-y-6 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">Địa chỉ Showroom:</span>
                  <p className="text-gray-600 mt-0.5">{BRAND_INFO.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(BRAND_INFO.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-rose-700 hover:underline font-bold text-xs mt-1.5"
                  >
                    <span>Xem bản đồ đường đi</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">Hotline tư vấn &amp; Báo giá:</span>
                  <a href={`tel:${BRAND_INFO.hotline}`} className="text-rose-700 font-black text-base hover:underline block mt-0.5">
                    {BRAND_INFO.hotlineFormatted}
                  </a>
                  <span className="text-xs text-gray-400">Phục vụ 24/7 tất cả các ngày trong tuần</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">Hòm thư điện tử:</span>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-gray-600 hover:text-rose-700 block mt-0.5">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">Giờ mở cửa đón khách:</span>
                  <p className="text-gray-600 mt-0.5">{BRAND_INFO.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Quick Chat Channels */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <a
                href={BRAND_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-colors shadow-sm"
              >
                Chat Qua Zalo
              </a>
              <a
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#1877f2] hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-colors shadow-sm"
              >
                Fanpage Facebook
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
            <h2 className="font-serif text-xl sm:text-2xl font-black text-gray-900 mb-2">
              Đăng Ký Khảo Sát &amp; Báo Giá Miễn Phí
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Vui lòng để lại thông tin, Dã Quỳ Decor sẽ chủ động liên hệ gửi bảng mẫu và khảo sát đo đạc tận nhà bạn.
            </p>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">
                  Đã Gửi Thành Công!
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  Cảm ơn bạn. Chúng tôi sẽ phản hồi trong vòng 10 phút.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-rose-700 text-white font-bold text-xs py-2 px-4 rounded-lg"
                >
                  Gửi thêm yêu cầu
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
                    placeholder="Nguyễn Văn A"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs outline-hidden focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs outline-hidden focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Khu vực tại TP.HCM:
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs outline-hidden bg-white"
                    >
                      <option value="Quận 12">Quận 12</option>
                      <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                      <option value="Huyện Hóc Môn">Huyện Hóc Môn</option>
                      <option value="Quận Tân Bình">Quận Tân Bình</option>
                      <option value="Quận Tân Phú">Quận Tân Phú</option>
                      <option value="Quận Bình Tân">Quận Bình Tân</option>
                      <option value="TP. Thủ Đức">TP. Thủ Đức</option>
                      <option value="Quận khác">Quận khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Nội dung yêu cầu hoặc ngày cưới:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mẫu gia tiên bạn thích, diện tích nhà, thời gian tổ chức..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs outline-hidden focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Tư Vấn</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
