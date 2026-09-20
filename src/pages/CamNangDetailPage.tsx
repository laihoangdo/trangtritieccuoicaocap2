import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ChevronRight, Share2 } from 'lucide-react';
import { BLOG_POSTS, BRAND_INFO } from '../data/mockData';

export const CamNangDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-xs text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-rose-700">Trang chủ</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/cam-nang-cuoi" className="hover:text-rose-700">Cẩm nang cưới</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-800 font-semibold truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <article className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-xs">
          <span className="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
            {post.category}
          </span>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-gray-400 pb-6 mb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-rose-600" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-rose-600" />
              {post.author}
            </span>
          </div>

          <div className="aspect-16/9 rounded-xl overflow-hidden mb-8 bg-gray-100">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-base max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
            <p className="font-semibold text-gray-800 leading-relaxed">
              {post.excerpt}
            </p>
            <p>
              Tổ chức lễ gia tiên cưới hỏi là nghi thức thiêng liêng nhất trong ngày trọng đại của đôi lứa. Đây không chỉ là dịp con cháu bày tỏ lòng hiếu kính đối với tổ tiên ông bà, mà còn là lời thưa chuyện chính thức của hai họ trước sự chứng giám của các đấng sinh thành.
            </p>
            <h3 className="font-serif font-bold text-xl text-gray-900 mt-6">
              1. Lưu ý quan trọng khi chọn tone màu bàn thờ gia tiên
            </h3>
            <p>
              Màu sắc gia tiên nên hòa hợp với không gian phòng khách của gia đình. Với những ngôi nhà có diện tích nhỏ hoặc ánh sáng vừa phải, các tông màu như Đỏ Sen, Đỏ Trắng hoặc Hồng Pastel sẽ giúp căn phòng trông thoáng đãng, ấm áp mà không bị ngột ngạt.
            </p>
            <h3 className="font-serif font-bold text-xl text-gray-900 mt-6">
              2. Các hạng mục bắt buộc phải có trên bàn thờ gia tiên
            </h3>
            <p>
              Bao gồm: Lư đồng, đôi chân nến, bát nhang, bình hoa tươi hai bên, đĩa trái cây ngũ quả và đôi đèn cầy rồng phụng (hoặc nến song hỷ). Các vật dụng phải được đặt trang nghiêm, ngay ngắn và cân đối.
            </p>
            <h3 className="font-serif font-bold text-xl text-gray-900 mt-6">
              3. Đặt dịch vụ trang trí trước bao lâu?
            </h3>
            <p>
              Cô dâu chú rể nên chốt mẫu trang trí trước từ 1 đến 2 tháng để giữ được ngày đẹp và các mẫu thiết kế ưng ý nhất, đặc biệt vào cao điểm mùa cưới cuối năm.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link
              to="/cam-nang-cuoi"
              className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại cẩm nang</span>
            </Link>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600"
            >
              <Share2 className="w-4 h-4" />
              <span>Chia sẻ bài viết</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
