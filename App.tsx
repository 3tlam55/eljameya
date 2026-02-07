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
import { Heart, Phone } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Urgent Ticker */}
        <div className="bg-brand-gold text-gray-900 py-2 overflow-hidden relative font-bold">
          <div className="container mx-auto px-4 flex items-center">
            <span className="bg-brand-red text-white px-3 py-1 rounded text-sm ml-4 shadow-sm z-10 shrink-0">
              عاجل
            </span>
            <div className="whitespace-nowrap animate-marquee flex gap-16 text-sm">
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