import { ProductItem, ServiceCategory, PackageTier, Testimonial, BlogPost } from '../types';
import { deepResolveImageUrls } from '../utils/image';

const RAW_BRAND_INFO = {
  name: 'Dã Quỳ Decor & Event',
  shortName: 'Dã Quỳ Decor',
  slogan: 'Dịch vụ trang trí gia tiên, tiệc cưới trọn gói cao cấp & tiết kiệm',
  hotline: '0931883547',
  hotlineFormatted: '0931.883.547',
  hotline2: '0931883547',
  hotline2Formatted: '0931.883.547',
  zalo: '0931883547',
  zaloUrl: 'https://zalo.me/0931883547',
  email: 'daquydecor79@gmail.com',
  address: '33/6 Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, TP.HCM',
  facebook: 'https://www.facebook.com/DaQuyWeddingDecor',
  facebookText: 'Dã Quỳ Decor & Event',
  tiktok: 'https://www.tiktok.com/@daquydecor',
  tiktokText: '@daquydecor',
  openingHours: '07:30 - 22:00 (Tất cả các ngày trong tuần)',
  experienceYears: '10+',
  completedEvents: '5.000+',
  satisfactionRate: '100%',
  warrantyCommitment: 'Cam kết giống mẫu 100% - Không phát sinh chi phí',
  logo: '/images/logo-da-quy.png',
  logo300: '/images/logo-da-quy-300x216.png',
  logo510: '/images/logo-da-quy-510x368.png'
};

const RAW_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'gia-tien-cong-hoa',
    name: 'TRANG TRÍ GIA TIÊN – CỔNG HOA',
    slug: 'trang-tri-gia-tien',
    image: '/images/cuoi4.jpg',
    description: 'Trang trí bàn thờ gia tiên trang nghiêm, tinh tế theo phong cách truyền thống đến hiện đại.',
    itemCount: 48
  },
  {
    id: 'san-khau-loi-di',
    name: 'TRANG TRÍ SÂN KHẤU – LỐI ĐI SÂN KHẤU',
    slug: 'dich-vu-cuoi#san-khau',
    image: '/images/trang-tri-tiec-cuoi-kalina-438-300x200.jpg',
    description: 'Thiết kế sân khấu hoành tráng, bục lối đi rải cánh hoa, đèn led lung linh.',
    itemCount: 26
  },
  {
    id: 'backdrop-gallery',
    name: 'BACKDROP CHỤP HÌNH – BÀN GALLERY',
    slug: 'dich-vu-cuoi#backdrop',
    image: '/images/cuoi2.jpg',
    description: 'Backdrop hoa lụa cao cấp kết hợp hoa tươi lưu giữ khoảnh khắc ngọt ngào.',
    itemCount: 35
  },
  {
    id: 'rap-cuoi-ban-ghe',
    name: 'RẠP CƯỚI – BÀN GHẾ TIỆC',
    slug: 'dich-vu-cuoi#rap-cuoi',
    image: '/images/Wedding-planner-Nha-Trang-038-300x225.jpg',
    description: 'Khung rạp đám cưới kiên cố, sang trọng kèm bàn ghế Tiffany và phụ kiện bàn tiệc.',
    itemCount: 19
  },
  {
    id: 'xe-hoa-ruoc-dau',
    name: 'XE HOA – TRANG TRÍ XE HOA',
    slug: 'dich-vu-cuoi#xe-hoa',
    image: '/images/trang-tri-xe-cuoi-dep-bang-hoa-gia-2-300x300.jpg',
    description: 'Dịch vụ cho thuê xe hoa cao cấp (Mercedes, Camry, Mazda...) kèm hoa trang trí tinh xảo.',
    itemCount: 15
  },
  {
    id: 'ao-dai-nhan-su',
    name: 'ÁO DÀI – NHÂN SỰ BƯNG QUẢ – ĐẠI DIỆN',
    slug: 'dich-vu-cuoi#ao-dai',
    image: '/images/ao-dai-bung-qua-7.jpg',
    description: 'Đội hình bưng quả đồng đều, duyên dáng và người đại diện họ hàng ăn nói lưu loát.',
    itemCount: 22
  },
  {
    id: 'mam-qua-rong-phung',
    name: 'MÂM QUẢ – RỒNG PHỤNG TRUYỀN THỐNG',
    slug: 'dich-vu-cuoi#mam-qua',
    image: '/images/z4152590052114_fc3606c404dbf5d2b7d69b59aef93422_0628-1536x1024.jpg',
    description: 'Cặp Rồng Phụng kết trái cây thủ công tinh xảo, trọn bộ 6 mâm - 8 mâm quả cao cấp.',
    itemCount: 18
  },
  {
    id: 'le-vat-dam-ngo',
    name: 'LỄ VẬT DẠM NGÕ & HOA CẦM TAY',
    slug: 'dich-vu-cuoi#dam-ngo',
    image: '/images/pfarRyK1mQ_Dam-ngo-4-300x300.jpg',
    description: 'Lễ dạm ngõ chu đáo, hoa cưới cầm tay cô dâu thiết kế theo tone màu chủ đạo.',
    itemCount: 24
  }
];

const RAW_PRODUCTS: ProductItem[] = [
  {
    id: 'gia-tien-tong-do-q11',
    name: 'Trang Trí Gia Tiên Tông Đỏ Truyền Thống Tại Quận 11',
    category: 'gia-tien',
    categoryName: 'Gói Gia Tiên Nâng Cao',
    tone: 'Tông Đỏ',
    price: 3999000,
    originalPrice: 4800000,
    isHot: true,
    isNew: false,
    image: '/images/cuoi4.jpg',
    gallery: [
      '/images/cuoi4.jpg',
      '/images/gia-tien-tong-do.jpg',
      '/images/cuoi2.jpg',
      '/images/44-1-1200x800-2-300x200.jpg'
    ],
    district: 'Quận 11',
    shortDesc: 'Gia tiên tông đỏ truyền thống kết hợp chữ hỷ mạ vàng sang trọng và hoa lụa cao cấp.',
    description: 'Mẫu trang trí gia tiên tông đỏ ruby nổi bật là lựa chọn số 1 của các cặp đôi tại TP.HCM. Màu đỏ biểu trưng cho may mắn, thịnh vượng và hạnh phúc viên mãn. Toàn bộ hoa được cắm từ hoa lụa nhập khẩu chuẩn 99% hoa tươi cùng bộ lư đồng sáng bóng trang nghiêm.',
    inclusions: [
      'Bàn thờ gia tiên trang nghiêm phủ khăn nhung cao cấp',
      'Bộ lư đồng, chân đèn truyền thống sáng bóng',
      'Phông nền gia tiên màu đỏ ruby kết hoa lụa cao cấp',
      'Chữ Hỷ mạ vàng nổi bật & bảng tên CD - CR thiết kế riêng',
      'Bàn để mâm quả (chuẩn 6 - 8 quả) phủ khăn gấm',
      'Bàn họ dài 12 người ngồi kèm 12 ghế Tiffany thắt nơ',
      '2 bộ ấm chén sứ cao cấp + 12 tách trà',
      '2 bình hoa lụa để bàn họ ton-sur-ton',
      'Tặng 12 chai nước suối in tem nhãn tên Cô Dâu - Chú Rể',
      'Tặng giá để ảnh cưới kỷ niệm'
    ]
  },
  {
    id: 'gia-tien-tong-sen-q12',
    name: 'Trang Trí Gia Tiên Tông Sen Thanh Lịch Tại Quận 12',
    category: 'gia-tien',
    categoryName: 'Gói Gia Tiên Thiết Kế',
    tone: 'Tông Sen',
    price: 4500000,
    originalPrice: 5500000,
    isHot: true,
    isNew: true,
    image: '/images/da62ec7f-43c9-40b6-ac39-db737af136ca-1713019562549519416970-1536x1023.webp',
    gallery: [
      '/images/da62ec7f-43c9-40b6-ac39-db737af136ca-1713019562549519416970-1536x1023.webp',
      '/images/cuoi2.jpg',
      '/images/gia-tien-tong-sen.jpg',
      '/images/pfarRyK1mQ_Dam-ngo-4-300x300.jpg'
    ],
    district: 'Quận 12',
    shortDesc: 'Ý tưởng đóa sen hồng thuần khiết, phối cùng tre mộc và hoa lụa thanh tao.',
    description: 'Lấy cảm hứng từ nét đẹp thuần phong mỹ tục Việt Nam, mẫu gia tiên tone Hoa Sen mang lại cảm giác bình yên, tao nhã nhưng vô cùng quý phái. Đội ngũ Dã Quỳ Decor chăm chút từng búp sen, nẹp tre thủ công kết hợp ánh sáng dịu êm.',
    inclusions: [
      'Vách hoa sen thiết kế 3D nổi bật và trang nghiêm',
      'Bàn thờ gia tiên phong cách mộc trang trọng',
      'Bộ lư đồng đúc cổ điển',
      'Bàn họ chuẩn 12 khách kèm ghế Tiffany màu bạc/vàng gold',
      'Trang trí hoa sen và hoa mẫu đơn để bàn',
      'Bộ ấm trà gốm sứ Bát Tràng cao cấp',
      'Cổng hoa sen đồng bộ trước cửa nhà',
      'Bảng Welcome và tên CD-CR hoa sen thư pháp',
      'Tặng nước suối in tem nhãn thiết kế riêng'
    ]
  },
  {
    id: 'gia-tien-tong-do-trang-govap',
    name: 'Trang Trí Gia Tiên Tông Đỏ Trắng Hiện Đại Tại Quận Gò Vấp',
    category: 'gia-tien',
    categoryName: 'Gói Gia Tiên Nâng Cao',
    tone: 'Tông Đỏ Trắng',
    price: 4200000,
    originalPrice: 5000000,
    isHot: false,
    isNew: true,
    image: '/images/cuoi1.jpg',
    gallery: [
      '/images/cuoi1.jpg',
      '/images/cuoi4.jpg',
      '/images/gia-tien-tong-do.jpg',
      '/images/44-1-1200x800-2-300x200.jpg'
    ],
    district: 'Quận Gò Vấp',
    shortDesc: 'Sự kết hợp giữa sắc đỏ kiêu sa và sắc trắng tinh khôi hiện đại.',
    description: 'Sự kết hợp hài hòa giữa màu trắng tinh khôi và đỏ tươi rực rỡ tạo nên một không gian lễ cưới vừa ấm áp truyền thống vừa thanh thoát, hiện đại. Thích hợp cho các ngôi nhà phố có diện tích vừa và nhỏ.',
    inclusions: [
      'Backdrop gia tiên viền led hiện đại phối hoa đỏ trắng',
      'Bàn gia tiên đầy đủ bát nhang, lư đồng và chân nến',
      'Bàn họ 12 ghế Tiffany trắng thắt ruy băng đỏ',
      'Bộ ấm chén pha lê và hoa cắm bàn cao cấp',
      'Bảng tên thiết kế hiện đại viền gương',
      'Cổng hoa vòm chữ nhật phối tone đỏ trắng',
      '12 chai nước suối in thông tin cặp đôi'
    ]
  },
  {
    id: 'gia-tien-tong-nau-tanbinh',
    name: 'Trang Trí Gia Tiên Tông Nâu Vintage Tại Quận Tân Bình',
    category: 'gia-tien',
    categoryName: 'Gói Gia Tiên Vintage & Retro',
    tone: 'Tông Nâu Vintage',
    price: 4900000,
    originalPrice: 5800000,
    isHot: true,
    isNew: false,
    image: '/images/cuoi3.jpg',
    gallery: [
      '/images/cuoi3.jpg',
      '/images/cuoi1.jpg',
      '/images/da62ec7f-43c9-40b6-ac39-db737af136ca-1713019562549519416970-1536x1023.webp',
      '/images/pfarRyK1mQ_Dam-ngo-4-300x300.jpg'
    ],
    district: 'Quận Tân Bình',
    shortDesc: 'Phong cách hoài niệm cổ điển Vintage với tone gỗ nâu trầm và hoa đồng nội.',
    description: 'Phong cách Vintage hoài cổ luôn có sức hút đặc biệt. Tông nâu gỗ ấm cúng kết hợp cùng hoa hồng kem pastel, lụa voan mềm mại và đèn nến mang lại không gian ấm cúng, đậm chất điện ảnh cho ngày trọng đại.',
    inclusions: [
      'Phông nền gỗ tự nhiên phối chi tiết mành tre vintage',
      'Bàn thờ gia tiên gỗ cao cấp với phụ kiện đồng đúc',
      'Bàn họ gỗ dài 12 người kèm ghế uốn vintage',
      'Bộ ấm trà men cổ truyền thống',
      'Cổng hoa vòm gỗ mộc kết hoa cỏ đồng nội',
      'Kệ ảnh và bảng tên gỗ khắc laser tinh xảo',
      'Nước suối chai thủy tinh hoặc in tem hoài niệm'
    ]
  },
  {
    id: 'gia-tien-tong-vang-binhtan',
    name: 'Trang Trí Gia Tiên Tông Vàng Hoàng Gia Tại Quận Bình Tân',
    category: 'gia-tien',
    categoryName: 'Gói Gia Tiên VIP',
    tone: 'Tông Vàng Hoàng Gia',
    price: 4800000,
    originalPrice: 6000000,
    isHot: false,
    isNew: false,
    image: '/images/cuoi1.jpg',
    gallery: [
      '/images/cuoi3.jpg',
      '/images/cuoi3.jpg',
      '/images/slide-1.jpg',
      '/images/cuoi1.jpg'
    ],
    district: 'Quận Bình Tân',
    shortDesc: 'Tone vàng đồng hoàng gia quý phái tượng trưng cho phú quý, tài lộc.',
    description: 'Mẫu gia tiên tone Vàng Gold mang phong thái quý tộc, trang nhã. Sử dụng chất liệu vải gấm ánh kim cao cấp kết hợp hoa lan hồ điệp vàng và hoa hồng vàng tạo nên sự lộng lẫy hiếm có.',
    inclusions: [
      'Phông nền vải kim tuyến gold phối hoa lan hoàng gia',
      'Bàn gia tiên dát chi tiết ánh vàng lộng lẫy',
      'Bàn họ 12 ghế Tiffany vàng gold bóng',
      'Bộ lư đồng đúc đại phong thủy tốt lành',
      'Cổng hoa cưới hoàng gia đồ sộ ấn tượng',
      'Bảng tên chữ nổi viền đèn led phát sáng',
      'Bộ ấm chén mạ viền vàng cao cấp'
    ]
  },
  {
    id: 'gia-tien-tong-hong-pastel-q10',
    name: 'Trang Trí Gia Tiên Tông Hồng Pastel Tại Quận 10',
    category: 'gia-tien',
    categoryName: 'Gói Gia Tiên Nâng Cao',
    tone: 'Tông Hồng Pastel',
    price: 4100000,
    originalPrice: 4900000,
    isHot: true,
    isNew: false,
    image: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-1.jpg',
      '/images/pfarRyK1mQ_Dam-ngo-4-300x300.jpg',
      '/images/cuoi1.jpg'
    ],
    district: 'Quận 10',
    shortDesc: 'Tone hồng pastel ngọt ngào, lãng mạn dành cho nàng dâu yêu thích sự nhẹ nhàng.',
    description: 'Hồng pastel nhẹ nhàng là lựa chọn ngọt ngào cho các nàng dâu trẻ. Không gian lễ gia tiên bừng sáng với những cánh hoa hồng, cẩm tú cầu và cát tường kết hợp dải voan bồng bềnh như truyện cổ tích.',
    inclusions: [
      'Phông nền voan lụa hồng pastel xếp ly tỉ mỉ',
      'Bàn thờ gia tiên bài trí trang nghiêm, gọn gàng',
      'Bàn họ 12 ghế Tiffany phủ nơ hồng baby',
      'Cổng hoa cưới trái tim hoặc vòm tròn phong cách Hàn Quốc',
      '2 bình hoa hồng pastel để bàn họ',
      'Bộ tách trà sứ trắng viền hoa',
      'Tặng 12 chai nước suối in tem nhãn cute'
    ]
  },
  {
    id: 'san-khau-dam-cuoi-luxury',
    name: 'Trang Trí Sân Khấu Tiệc Cưới Luxury Kalina',
    category: 'san-khau',
    categoryName: 'Trang Trí Sân Khấu',
    price: 6500000,
    originalPrice: 8000000,
    isHot: true,
    isNew: true,
    image: '/images/trang-tri-tiec-cuoi-kalina-438-300x200.jpg',
    gallery: [
      '/images/trang-tri-tiec-cuoi-kalina-438-300x200.jpg',
      '/images/cuoi3.jpg',
      '/images/cuoi2.jpg',
      '/images/san-khau-loi-di.jpg'
    ],
    district: 'Toàn TP.HCM',
    shortDesc: 'Sân khấu cưới cao cấp với hiệu ứng đèn led, màn sao và hoa lụa nhập khẩu.',
    description: 'Thiết kế sân khấu hoành tráng theo diện tích sảnh tiệc hoặc tại nhà riêng. Kết cấu kiên cố, hoa phủ dày tạo điểm nhấn lộng lẫy cho giây phút cô dâu chú rể trao nhẫn cưới.',
    inclusions: [
      'Khung bục sân khấu chắc chắn lót thảm mới 100%',
      'Backdrop sân khấu 3 lớp hoa phối chữ tên CD-CR phát sáng',
      'Lối đi lên sân khấu gắn trụ hoa và đèn led vàng ấm',
      'Hệ thống pháo điện và máy tạo khói hiệu ứng mở màn'
    ]
  },
  {
    id: 'backdrop-chup-hinh-vip',
    name: 'Backdrop Chụp Hình Cưới Hoa Lụa Cao Cấp',
    category: 'backdrop',
    categoryName: 'Backdrop Chụp Hình',
    price: 5200000,
    originalPrice: 6500000,
    isHot: true,
    isNew: false,
    image: '/images/cuoi2.jpg',
    gallery: [
      '/images/cuoi2.jpg',
      '/images/backdrop-gallery.jpg',
      '/images/z4196727541039_727a78b1c6d2980d769727d7071b7d5f-247x296.jpg',
      '/images/Backdrop-trang-tri-khai-truong-kem-line-bong-JP-Fashion-partydesign.vn_-100x100.jpg'
    ],
    district: 'Toàn TP.HCM',
    shortDesc: 'Backdrop kích thước chuẩn 3m x 4m, điểm check-in ấn tượng cho quan khách.',
    description: 'Backdrop chụp ảnh cưới là nơi lưu lại hàng trăm bức ảnh kỷ niệm cùng người thân và bạn bè. Dã Quỳ Decor cam kết tạo hình bắt mắt, ánh sáng tôn da người chụp.',
    inclusions: [
      'Khung backdrop sắt hộp kiên cố an toàn kích thước lớn',
      'Bắn bạt hiflex hoặc ốp vách formex cắt CNC sắc nét',
      'Cắm hoa lụa cao cấp phối hoa lá tươi xanh tự nhiên',
      'Bảng tên 3D mica gương vàng sang trọng',
      'Đèn rọi Spotlight chuyên dụng chụp ảnh đẹp lung linh'
    ]
  },
  {
    id: 'rap-cuoi-ban-ghe-tiffany',
    name: 'Trọn Gói Rạp Cưới Hiện Đại & Bàn Ghế Tiffany',
    category: 'rap-cuoi',
    categoryName: 'Rạp Cưới Bàn Ghế',
    price: 6800000,
    originalPrice: 8500000,
    isHot: false,
    isNew: true,
    image: '/images/Wedding-planner-Nha-Trang-038-300x225.jpg',
    gallery: [
      '/images/Wedding-planner-Nha-Trang-038-300x225.jpg',
      '/images/rap-cuoi-ban-ghe.jpg',
      '/images/cuoi4.jpg',
      '/images/cuoi1.jpg'
    ],
    district: 'Toàn TP.HCM',
    shortDesc: 'Rạp cưới che nắng mưa kiên cố, trang trí trần lụa buông rủ và đèn chùm lãng mạn.',
    description: 'Rạp cưới khung giàn không gian che chắn thời tiết tuyệt đối, trang trí trần lụa xếp nếp cao cấp phối đèn chùm pha lê mang lại cảm giác sang trọng như trong nhà hàng 5 sao.',
    inclusions: [
      'Nhà bạt khung không gian kiên cố (tùy chỉnh theo mặt bằng thực tế)',
      'Trần phủ lụa 2 màu thả võng mềm mại + đèn lồng/đèn chùm',
      'Bàn tiệc tròn/dài phủ khăn 2 lớp sạch sẽ thơm tho',
      'Ghế Tiffany cao cấp kèm nệm ngồi êm ái thắt nơ',
      'Quạt làm mát công suất lớn đảm bảo thoáng đãng'
    ]
  },
  {
    id: 'mam-qua-rong-phung-tphcm',
    name: 'Cặp Mâm Quả Rồng Phụng Trái Cây Thủ Công',
    category: 'mam-qua',
    categoryName: 'Mâm Quả Cưới',
    price: 3200000,
    originalPrice: 3800000,
    isHot: true,
    isNew: false,
    image: '/images/z4152590052114_fc3606c404dbf5d2b7d69b59aef93422_0628-1536x1024.jpg',
    gallery: [
      '/images/z4152590052114_fc3606c404dbf5d2b7d69b59aef93422_0628-1536x1024.jpg',
      '/images/mam-qua.jpg',
      '/images/Dich-vu-cuoi-hoi-banner.webp',
      '/images/pfarRyK1mQ_Dam-ngo-4-300x300.jpg'
    ],
    district: 'Toàn TP.HCM',
    shortDesc: 'Cặp Rồng Phụng kết từ trái cây tươi loại 1, tạo hình uyển chuyển biểu tượng sum vầy.',
    description: 'Nghệ nhân tay nghề cao khéo léo kết trái cây tươi và ớt đỏ thành hình tượng Rồng bay Phượng múa sống động. Điểm nhấn không thể thiếu trong lễ ăn hỏi trang trọng của người Việt.',
    inclusions: [
      '1 Rồng kết trái cây tươi cao 1m - 1.2m',
      '1 Phụng kết trái cây phối cau trầu tươi đẹp',
      'Mâm tráp sơn mài đỏ truyền thống có nắp đậy',
      'Khăn phủ mâm quả thêu rồng phụng kim tuyến'
    ]
  },
  {
    id: 'xe-hoa-mercedes-trang-tri',
    name: 'Cho Thuê Xe Hoa BMW & Mercedes Kèm Hoa Trang Trí',
    category: 'xe-hoa',
    categoryName: 'Xe Hoa Rước Dâu',
    price: 2500000,
    originalPrice: 3000000,
    isHot: false,
    isNew: true,
    image: '/images/trang-tri-xe-cuoi-dep-bang-hoa-gia-2-300x300.jpg',
    gallery: [
      '/images/trang-tri-xe-cuoi-dep-bang-hoa-gia-2-300x300.jpg',
      '/images/xe-hoa.jpg',
      '/images/slide-1.jpg'
    ],
    district: 'Nội thành TP.HCM',
    shortDesc: 'Xe hoa BMW & Mercedes đời mới, tài xế lịch sự, hoa kết mui xe tinh xảo.',
    description: 'Dịch vụ rước dâu an toàn, sang trọng với dàn xe đời mới được bảo dưỡng sạch sẽ. Tài xế trang phục lịch thiệp, đúng giờ, am hiểu đường sá TP.HCM.',
    inclusions: [
      'Xe BMW/Mercedes sedan trắng/đen đời mới bóng loáng',
      'Trang trí cụm hoa mui xe, hoa 4 tay nắm cửa, hoa đuôi xe',
      'Biển số in chữ Song Hỷ hoặc tên CD-CR',
      'Tài xế chuyên nghiệp phục vụ lộ trình rước dâu 4 giờ'
    ]
  },
  {
    id: 'ao-dai-bung-qua-doi-hinh',
    name: 'Cho Thuê Áo Dài & Đội Hình Bưng Quả Duyên Dáng',
    category: 'ao-dai',
    categoryName: 'Áo Dài Bưng Quả',
    price: 1800000,
    originalPrice: 2200000,
    isHot: false,
    isNew: false,
    image: '/images/ao-dai-bung-qua-7.jpg',
    gallery: [
      '/images/ao-dai-bung-qua-7.jpg',
      '/images/cuoi4.jpg',
      '/images/pfarRyK1mQ_Dam-ngo-4-300x300.jpg'
    ],
    district: 'Toàn TP.HCM',
    shortDesc: 'Trọn gói trang phục áo dài cách tân cao cấp và đội nam thanh nữ tú bưng quả.',
    description: 'Đội ngũ bưng quả trẻ trung, chiều cao đồng đều từ 1m60 (nữ) và 1m72 (nam), nụ cười tươi tắn, tác phong nhanh nhẹn và lễ phép hỗ trợ gia đình xuyên suốt buổi lễ.',
    inclusions: [
      '6 - 8 bạn nam bưng mâm quả hoặc 6 - 8 bạn nữ',
      'Áo dài lụa cách tân/truyền thống giặt ủi thơm tho',
      'Giày búp bê hoặc hài đồng bộ',
      'Có mặt trước giờ lễ 45 phút để chuẩn bị trang phục'
    ]
  }
];

const RAW_PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'goi-tiet-kiem',
    name: 'GÓI GIA TIÊN TIẾT KIỆM',
    tagline: 'Phù hợp nhà có diện tích nhỏ hoặc kinh phí tối ưu',
    price: 3999000,
    priceFormatted: '3.999.000 ₫',
    badge: 'GIÁ TỐT NHẤT',
    isPopular: false,
    items: [
      'Bàn thờ gia tiên phủ khăn nhung + vách voan lụa nhẹ nhàng',
      'Bộ lư đồng đúc + 2 chân đèn truyền thống',
      'Chữ Hỷ vàng nổi bật hoặc bảng tên CD-CR cơ bản',
      'Bàn để mâm quả (chuẩn 6 quả)',
      'Bàn họ dài 12 người ngồi',
      '12 ghế nệm bọc vải hoặc ghế Tiffany kèm nơ lụa',
      '2 bộ ấm tách trà sứ cao cấp (12 tách trà)',
      '2 bình hoa lụa để bàn họ ton-sur-ton',
      'Tặng 12 chai nước suối in tem tên CD-CR'
    ],
    note: 'Miễn phí vận chuyển & lắp đặt trong bán kính 10km quanh Quận 12'
  },
  {
    id: 'goi-co-ban',
    name: 'GÓI GIA TIÊN VÁCH CƠ BẢN',
    tagline: 'Gói bán chạy nhất, đầy đủ chi tiết gia tiên & cổng hoa xinh xắn',
    price: 4999000,
    priceFormatted: '4.999.000 ₫',
    badge: 'ĐƯỢC CHỌN NHIỀU NHẤT',
    isPopular: true,
    items: [
      'Backdrop gia tiên ốp vách cứng formex phối màu theo yêu cầu',
      'Bàn thờ gia tiên trang nghiêm phủ khăn gấm cao cấp',
      'Bộ lư đồng cổ điển sáng bóng + đôi chân đèn phong thủy',
      'Cổng hoa cưới cao cấp đồng bộ tone màu gia tiên',
      'Bảng Welcome thiết kế riêng kèm giá để ảnh kỷ niệm',
      'Bàn mâm quả phủ khăn gấm (để vừa 6 - 8 quả)',
      'Bàn họ 12 người kèm 12 ghế Tiffany thắt nơ lụa mềm',
      '2 bộ ấm chén Minh Long cao cấp + khay đựng trà',
      '2 cụm hoa lụa nhập khẩu dáng dài cắm bàn họ',
      'Tặng 12 chai nước suối in tem nhãn thiết kế riêng'
    ],
    note: 'Khảo sát và tư vấn trực tiếp tại nhà cô dâu chú rể hoàn toàn miễn phí'
  },
  {
    id: 'goi-nang-cao',
    name: 'GÓI GIA TIÊN NÂNG CAO',
    tagline: 'Thiết kế hoa lụa phủ dày, cổng hoa vòm đồ sộ, ánh sáng lung linh',
    price: 6499000,
    priceFormatted: '6.499.000 ₫',
    badge: 'CAO CẤP',
    isPopular: false,
    items: [
      'Backdrop gia tiên 3D giật cấp phối đèn led neon chữ Hỷ phát sáng',
      'Hoa lụa nhập khẩu cao cấp cắm dày 99% tựa hoa tươi',
      'Cổng hoa vòm tròn hoặc vuông size lớn trang trí hoa 3 mặt',
      'Bàn thờ gia tiên gỗ cao cấp + bộ lư đồng ngũ sự sáng rực',
      'Bàn họ 12 ghế Tiffany dát vàng / bạc thắt nơ voan bồng bềnh',
      'Bàn để mâm quả riêng biệt phủ lụa cao cấp',
      '2 bình hoa cắm bàn họ hoa mẫu đơn, hoa hồng ngoại',
      'Bảng tên CD-CR mica gương vàng cắt CNC sắc nét',
      'Khay bánh kẹo pha lê cao cấp để bàn tiếp khách',
      'Tặng 12 chai nước suối + pháo kim tuyến mừng ngày cưới'
    ],
    note: 'Cam kết thi công chuẩn mẫu thiết kế 100%, có nhân viên hỗ trợ giám sát'
  },
  {
    id: 'goi-thiet-ke-vip',
    name: 'GÓI THIẾT KẾ VIP THEO YÊU CẦU',
    tagline: 'Tùy biến phong cách riêng: Tone Sen, Vintage, Rustic hoặc Hoa Tươi',
    price: 8999000,
    priceFormatted: '8.999.000 ₫',
    badge: 'THIẾT KẾ ĐỘC BẢN',
    isPopular: false,
    items: [
      'Thiết kế bản vẽ 3D riêng biệt theo kích thước chuẩn của ngôi nhà',
      'Phối hợp hoa tươi cao cấp hoặc hoa lụa cao cấp tiêu chuẩn triển lãm',
      'Cổng hoa cưới thiết kế độc bản không đụng hàng',
      'Bàn thờ gia tiên gỗ hương / gõ đỏ trang nghiêm tối đa',
      'Toàn bộ ghế Tiffany hoặc ghế Louis hoàng gia cao cấp',
      'Bàn Gallery đón khách decor đồng điệu màu sắc',
      'Hệ thống chiếu sáng thông minh tạo hiệu ứng ảnh chụp hoàn hảo',
      'Bảng tên cô dâu chú rể thiết kế nghệ thuật cao cấp',
      'Đội ngũ kỹ thuật trực hỗ trợ xuyên suốt quá trình làm lễ'
    ],
    note: 'Dành riêng cho những cặp đôi mong muốn một ngày cưới mang dấu ấn riêng biệt'
  }
];

const RAW_TESTIMONIALS: Testimonial[] = [
  {
    id: 'fb-1',
    coupleName: 'Minh Hoàng & Thu Trang',
    location: 'Quận 12, TP.HCM',
    weddingDate: '15/01/2026',
    rating: 5,
    avatar: '/images/345847105_752995676469853_8877783620486598714_n-150x150.jpg',
    image: '/images/44-1-1200x800-2-300x200.jpg',
    comment: 'Cảm ơn cả team Dã Quỳ Decor rất nhiều! Lúc đầu gia đình mình hơi lo vì phòng khách hơi nhỏ, nhưng các bạn khảo sát rất nhiệt tình và bố trí vách gia tiên tông đỏ rất vừa vặn, sang trọng. Khách đến ai cũng khen bàn thờ gia tiên trang nghiêm và cổng hoa rất đẹp.',
    service: 'Gói Gia Tiên Nâng Cao'
  },
  {
    id: 'fb-2',
    coupleName: 'Tuấn Anh & Mai Phương',
    location: 'Gò Vấp, TP.HCM',
    weddingDate: '08/02/2026',
    rating: 5,
    avatar: '/images/cuoi3.jpg',
    image: '/images/da62ec7f-43c9-40b6-ac39-db737af136ca-1713019562549519416970-1536x1023.webp',
    comment: 'Gói gia tiên tone Sen của Dã Quỳ Decor thực sự xuất sắc! Hoa sen và tre trúc cắm rất nghệ thuật, màu sắc nhã nhặn đúng như ý mình thích. Đội thi công đến rất đúng giờ, làm việc cẩn thận từ tối hôm trước để sáng làm lễ gia đình không bị cập rập.',
    service: 'Gói Gia Tiên Tông Sen'
  },
  {
    id: 'fb-3',
    coupleName: 'Văn Đức & Ngọc Hân',
    location: 'Tân Bình, TP.HCM',
    weddingDate: '26/02/2026',
    rating: 5,
    avatar: '/images/cuoi4.jpg',
    image: '/images/vintage-style-1320x943-1.jpg',
    comment: 'Giá cả ở đây rất hợp lý mà chất lượng hoa lụa lại đẹp ngoài mong đợi, chụp hình lên màu sáng và tự nhiên y như hoa tươi. Nhân viên tư vấn rất dễ thương, không chèo kéo gói đắt tiền mà tư vấn đúng nhu cầu thực tế của nhà mình.',
    service: 'Gói Gia Tiên Cơ Bản & Cổng Hoa'
  },
  {
    id: 'fb-4',
    coupleName: 'Quốc Bảo & Thanh Thảo',
    location: 'Bình Tân, TP.HCM',
    weddingDate: '12/03/2026',
    rating: 5,
    avatar: '/images/cuoi2.jpg',
    image: '/images/z4152590052114_fc3606c404dbf5d2b7d69b59aef93422_0628-1536x1024.jpg',
    comment: 'Trọn gói từ gia tiên, mâm quả đến rạp cưới đều giao cho Dã Quỳ Decor làm hết. Mình rất an tâm vì các bạn chuyên nghiệp, làm xong dọn dẹp sạch sẽ. Chúc Dã Quỳ Decor ngày càng phát triển và được nhiều cô dâu chú rể tin chọn!',
    service: 'Trọn Gói Cưới Hỏi Gia Tiên & Rạp'
  }
];

const RAW_BLOG_POSTS: BlogPost[] = [
  {
    id: 'kinh-nghiem-chon-mau-gia-tien',
    slug: 'kinh-nghiem-chon-mau-gia-tien-phu-hop-khong-gian-nha',
    title: 'Kinh Nghiệm Chọn Mẫu Trang Trí Gia Tiên Phù Hợp Cho Nhà Phố & Chung Cư',
    excerpt: 'Làm thế nào để chọn được tone màu gia tiên vừa hợp phong thủy vừa tôn vinh không gian nhà nhỏ hẹp? Cùng Dã Quỳ Decor tìm hiểu chi tiết.',
    date: '10/03/2026',
    author: 'Dã Quỳ Decor',
    image: '/images/cuoi2.jpg',
    category: 'Cẩm Nang Cưới',
    content: [
      'Lễ gia tiên là nghi thức thiêng liêng nhất trong ngày cưới của người Việt. Đây là dịp để con cháu báo cáo với tổ tiên về sự kiện trọng đại của cuộc đời và nhận lời chúc phúc từ gia đình hai bên.',
      'Đối với những ngôi nhà phố có diện tích phòng khách từ 15m² - 25m², nên ưu tiên các mẫu gia tiên có vách phẳng, hoa cắm gọn gàng kết hợp tone màu sáng như đỏ trắng, hồng pastel hoặc xanh ngọc để tạo cảm giác thoáng đãng.',
      'Đối với căn hộ chung cư, các gia đình nên chú ý kích thước thang máy khi vận chuyển khung vách, cũng như tuân thủ quy định phòng cháy chữa cháy khi thắp nhang đèn trên bàn thờ tổ tiên.',
      'Dã Quỳ Decor luôn cung cấp dịch vụ khảo sát thực tế tận nhà miễn phí để đo đạc và tư vấn mẫu gia tiên vừa vặn nhất cho không gian gia đình bạn.'
    ]
  },
  {
    id: 'y-nghia-cac-tong-mau-gia-tien',
    slug: 'y-nghia-cac-tong-mau-trang-tri-gia-tien-ngay-cuoi',
    title: 'Ý Nghĩa Phong Thủy Các Tông Màu Trang Trí Gia Tiên Được Ưa Chuộng Nhất',
    excerpt: 'Mỗi tone màu gia tiên mang một thông điệp ý nghĩa riêng: Màu đỏ tượng trưng cho hỷ sự may mắn, màu sen thanh tịnh, màu vàng hoàng gia phú quý.',
    date: '02/03/2026',
    author: 'Dã Quỳ Decor',
    image: '/images/da62ec7f-43c9-40b6-ac39-db737af136ca-1713019562549519416970-1536x1023.webp',
    category: 'Phong Tục Cưới',
    content: [
      'Màu đỏ truyền thống: Là màu sắc kinh điển trong đám cưới Á Đông, tượng trưng cho tình yêu nồng cháy, may mắn, hạnh phúc viên mãn và xua đuổi điều không may.',
      'Tông màu Hoa Sen: Tượng trưng cho vẻ đẹp thanh tao, thuần khiết và lòng hiếu thảo. Hoa sen trong lễ cưới thể hiện sự gắn kết bình dị nhưng son sắt bền chặt.',
      'Tông Vàng Gold: Thể hiện sự sung túc, ấm no, thịnh vượng và quý phái của gia đình.',
      'Tông Hồng Pastel: Mang lại hơi thở hiện đại, lãng mạn, trẻ trung và ngọt ngào cho các bạn trẻ thích phong cách tối giản Hàn Quốc.'
    ]
  },
  {
    id: 'thu-tuc-le-dam-ngo-chuan-viet-nam',
    slug: 'thu-tuc-va-le-vat-dam-ngo-chuan-phong-tuc-viet-nam',
    title: 'Thủ Tục & Lễ Vật Dạm Ngõ Chuẩn Nhất Dành Cho Gia Đình Nhà Trai',
    excerpt: 'Lễ dạm ngõ cần chuẩn bị những gì? Tráp dạm ngõ gồm bao nhiêu món và trình tự buổi gặp gỡ đầu tiên diễn ra như thế nào?',
    date: '18/02/2026',
    author: 'Dã Quỳ Decor',
    image: '/images/pfarRyK1mQ_Dam-ngo-4-300x300.jpg',
    category: 'Nghi Thức Cưới',
    content: [
      'Lễ dạm ngõ là bước khởi đầu chính thức trong các nghi lễ cưới truyền thống. Nhà trai sẽ sang thăm nhà gái để đặt vấn đề cho hai con chính thức qua lại và bàn tính chuyện trăm năm.',
      'Lễ vật dạm ngõ truyền thống bao gồm: Trầu cau tươi, chè (trà) ngon, rượu ngoại hoặc rượu truyền thống, và giỏ trái cây tươi kết nơ trang trọng.',
      'Dã Quỳ Decor cung cấp trọn gói các set lễ vật dạm ngõ thiết kế tinh tế, sang trọng, thể hiện sự thành kính và chu đáo tuyệt đối của nhà trai.'
    ]
  }
];

export const BRAND_INFO = deepResolveImageUrls(RAW_BRAND_INFO);
export const SERVICE_CATEGORIES: ServiceCategory[] = deepResolveImageUrls(RAW_SERVICE_CATEGORIES);
export const PRODUCTS: ProductItem[] = deepResolveImageUrls(RAW_PRODUCTS);
export const PACKAGE_TIERS: PackageTier[] = deepResolveImageUrls(RAW_PACKAGE_TIERS);
export const TESTIMONIALS: Testimonial[] = deepResolveImageUrls(RAW_TESTIMONIALS);
export const BLOG_POSTS: BlogPost[] = deepResolveImageUrls(RAW_BLOG_POSTS);


export const WORK_PROCESS = [
  {
    step: 1,
    title: 'Tiếp Nhận & Lắng Nghe',
    desc: 'Lắng nghe mong muốn, sở thích về tone màu, phong cách và ngân sách dự kiến của cô dâu chú rể.'
  },
  {
    step: 2,
    title: 'Khảo Sát & Lên Phương Án',
    desc: 'Đội ngũ Dã Quỳ Decor trực tiếp đến nhà khảo sát mặt bằng, đo đạc kích thước và tư vấn phương án tối ưu nhất.'
  },
  {
    step: 3,
    title: 'Chốt Mẫu & Ký Hợp Đồng',
    desc: 'Thống nhất chi tiết từng hạng mục, ký hợp đồng rõ ràng, cam kết đúng mẫu 100% không phát sinh chi phí.'
  },
  {
    step: 4,
    title: 'Thi Công & Hoàn Thiện',
    desc: 'Đội ngũ thợ tay nghề cao vận chuyển và thi công tỉ mỉ trước ngày lễ 1 ngày, đảm bảo hoàn hảo từng chi tiết.'
  },
  {
    step: 5,
    title: 'Bàn Giao & Đồng Hành',
    desc: 'Nghiệm thu cùng gia đình, hỗ trợ chỉnh chu trang phục, thắp nến bàn thờ và sẵn sàng hỗ trợ trong suốt buổi lễ.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Giá Cả Hợp Lý',
    desc: 'Gói trọn gói tiết kiệm chỉ từ 3.999.000đ, giá niêm yết minh bạch, cam kết không phát sinh bất kỳ phụ phí nào.',
    icon: 'BadgeDollarSign'
  },
  {
    title: 'Mẫu Mã Đẹp & Đa Dạng',
    desc: 'Hơn 500+ mẫu gia tiên được cập nhật liên tục theo xu hướng mới nhất từ truyền thống, Vintage đến hiện đại.',
    icon: 'Palette'
  },
  {
    title: 'Dịch Vụ Chuyên Nghiệp',
    desc: 'Hơn 10 năm kinh nghiệm trong ngành cưới hỏi, đội ngũ thi công lành nghề, tỉ mỉ và tận tâm từng cánh hoa.',
    icon: 'Award'
  },
  {
    title: 'Tư Vấn & Khảo Sát Tận Tình',
    desc: 'Khảo sát đo đạc tại nhà miễn phí trên toàn bộ 24 quận huyện TP.HCM và các khu vực lân cận.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Hoa Lụa Cao Cấp Như Thật',
    desc: 'Sử dụng hoa lụa nhập khẩu cao cấp chuẩn 99% hoa tươi hoặc 100% hoa tươi loại 1 theo yêu cầu.',
    icon: 'Sparkles'
  },
  {
    title: 'Hỗ Trợ Nhanh Chóng 24/7',
    desc: 'Thi công hoàn thiện đúng hạn trước ngày lễ, luôn có nhân viên hỗ trợ gia đình trong suốt buổi tiệc.',
    icon: 'Clock'
  }
];
