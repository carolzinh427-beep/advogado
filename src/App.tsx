import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Differentiators } from './components/Differentiators';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D3748] flex flex-col font-sans selection:bg-[#203A60] selection:text-white">
      {/* 1. Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. O Escritório Section */}
        <About />

        {/* 4. Áreas de Atuação Section */}
        <PracticeAreas />

        {/* 5. Diferenciais Section */}
        <Differentiators />

        {/* 6. Como Funciona Section */}
        <HowItWorks />

        {/* 7. FAQ Accordion Section */}
        <FAQ />

        {/* 8. Contato & Location Section */}
        <Contact />
      </main>

      {/* 9. Footer & Institutional Disclaimer */}
      <Footer />

      {/* Discrete Non-invasive Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/5511919580341"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com Lucas Manoel Alves Garcia"
        className="fixed bottom-6 right-6 z-40 p-4 bg-slate-700 text-white border border-slate-500 shadow-xl hover:bg-slate-800 transition-all rounded-full flex items-center gap-2.5 group"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-5 h-5 text-slate-200 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider pr-1">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;

