import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import DonationSection from './components/DonationSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ProjectDetails from './components/ProjectDetails';
import TestimonialsSection from './components/TestimonialsSection';
import DonatePage from './components/DonatePage';
import ZakatCalculatorPage from './components/pages/ZakatCalculatorPage';
import UrgentNeedsPage from './components/pages/UrgentNeedsPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import BranchesPage from './components/pages/BranchesPage';
import BloodBankPage from './components/pages/BloodBankPage';
import MedicalComplexPage from './components/pages/MedicalComplexPage';
import ContactPage from './components/pages/ContactPage';
import QuranCompetitionPage from './components/pages/QuranCompetitionPage';
import CompetitionResultsPage from './components/pages/CompetitionResultsPage';
import ScrollToTop from './components/ScrollToTop';

import { Heart, Phone } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Urgent Ticker - Minimalist Design */}
        <div className="bg-gradient-to-r from-brand-red to-amber-600 text-white py-3 overflow-hidden relative">
          <div className="container-custom flex items-center gap-3">
            <span className="bg-white text-brand-red px-4 py-1.5 rounded-full text-sm font-bold shrink-0 shadow-md">
              عاجل
            </span>
            <div className="whitespace-nowrap animate-marquee flex gap-12 text-sm md:text-base font-medium">
              <span>مطلوب 50 كيس دم فصيلة O+ لمجمع الإصلاح الطبي.</span>
              <span>حملة إطعام قرية كاملة يوم الجمعة القادم - شارك معنا.</span>
              <span>بدء استقبال طلبات الأطراف الصناعية لشهر الحالي.</span>
            </div>
          </div>
        </div>

        <ImpactSection />
        <DonationSection />
        <AboutSection />
        <ProjectsSection />

        <TestimonialsSection />
        <ContactSection />

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <DonatePage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/zakat-calculator" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <ZakatCalculatorPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/urgent-needs" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <UrgentNeedsPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/about" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <AboutPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/services" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <ServicesPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/resources" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <ResourcesPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/branches" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <BranchesPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/blood-bank" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <BloodBankPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/medical-complex" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <MedicalComplexPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/contact" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <ContactPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/quran-competition" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <QuranCompetitionPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/competition-results" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <CompetitionResultsPage />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
        <Route path="/project/:id" element={
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <ProjectDetails />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;