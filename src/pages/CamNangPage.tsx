import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';

export const CamNangPage: React.FC = () => {
  return (
    <div className="w-full bg-[#f8f9fa] pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 text-white py-12 border-b border-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            CHIA SẺ KINH NGHIỆM
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Cẩm Nang Cưới Hỏi 2026
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Tổng hợp kinh nghiệm chọn mẫu gia tiên, lễ nghi truyền thống, phong tục cưới và cách tối ưu chi phí cho các cặp đôi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="aspect-16/9 overflow-hidden bg-gray-100 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-rose-700 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-base text-gray-900 group-hover:text-rose-700 transition-colors mb-2 line-clamp-2 leading-snug">
                    <Link to={`/cam-nang-cuoi/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <Link
                    to={`/cam-nang-cuoi/${post.slug}`}
                    className="text-xs font-bold text-rose-700 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Xem toàn bộ bài viết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
