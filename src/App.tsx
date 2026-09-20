import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { QuoteModal } from './components/QuoteModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { GiaTienPage } from './pages/GiaTienPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { DichVuCuoiPage } from './pages/DichVuCuoiPage';
import { BangGiaPage } from './pages/BangGiaPage';
import { GioiThieuPage } from './pages/GioiThieuPage';
import { CamNangPage } from './pages/CamNangPage';
import { CamNangDetailPage } from './pages/CamNangDetailPage';
import { FeedbackPage } from './pages/FeedbackPage';
import { LienHePage } from './pages/LienHePage';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState('');

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuoteDefaultService(serviceName || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteDefaultService('');
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans selection:bg-rose-700 selection:text-white">
        {/* Header */}
        <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Main Content View */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/trang-tri-gia-tien" element={<GiaTienPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/san-pham/:id" element={<ProductDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/dich-vu-cuoi" element={<DichVuCuoiPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/bang-gia" element={<BangGiaPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/gioi-thieu" element={<GioiThieuPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/cam-nang-cuoi" element={<CamNangPage />} />
            <Route path="/cam-nang-cuoi/:slug" element={<CamNangDetailPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/lien-he" element={<LienHePage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Contact & Call-to-action Widgets */}
        <FloatingWidgets onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Quick Consultation Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuoteModal}
          defaultService={quoteDefaultService}
        />
      </div>
    </BrowserRouter>
  );
}
