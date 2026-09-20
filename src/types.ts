export interface ProductItem {
  id: string;
  name: string;
  category: 'gia-tien' | 'cong-hoa' | 'san-khau' | 'backdrop' | 'rap-cuoi' | 'mam-qua' | 'xe-hoa' | 'ao-dai' | 'thiet-bi';
  categoryName: string;
  tone?: string;
  price: number;
  originalPrice?: number;
  priceText?: string;
  isHot?: boolean;
  isNew?: boolean;
  image: string;
  gallery?: string[];
  district?: string;
  shortDesc: string;
  description: string;
  inclusions: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  image: string;
  description: string;
  itemCount: number;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  badge?: string;
  isPopular?: boolean;
  items: string[];
  note: string;
}

export interface Testimonial {
  id: string;
  coupleName: string;
  location: string;
  weddingDate: string;
  rating: number;
  avatar: string;
  image?: string;
  comment: string;
  service: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content: string[];
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  service: string;
  district: string;
  eventDate: string;
  note: string;
}
