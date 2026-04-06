'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50 relative">
          <div className="bg-sky-rescue p-2 rounded-lg text-white">
            <Truck size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-espresso-pro leading-none tracking-tight uppercase">Harris</span>
            <span className="text-base font-bold text-sky-rescue leading-none tracking-widest uppercase">Towing & Recovery</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-base font-bold text-espresso-pro hover:text-sky-rescue transition-colors">Services</a>
          <a href="#reviews" className="text-base font-bold text-espresso-pro hover:text-sky-rescue transition-colors">Reviews</a>
          <a href="#contact" className="text-base font-bold text-espresso-pro hover:text-sky-rescue transition-colors">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="tel:9542496753" 
            className="flex items-center gap-2 bg-sky-rescue hover:bg-sky-rescue/90 text-white px-6 py-3 rounded-full text-base font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <Phone size={18} className="animate-pulse" />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 relative p-2 rounded-md text-espresso-pro"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 h-screen bg-white/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center gap-8 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-espresso-pro hover:text-sky-rescue">Services</a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-espresso-pro hover:text-sky-rescue">Reviews</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-espresso-pro hover:text-sky-rescue">Contact</a>
        </nav>
        
        <a 
          href="tel:9542496753" 
          className="flex items-center gap-2 bg-sky-rescue text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
        >
          <Phone size={20} />
          954-249-6753
        </a>
      </div>
    </header>
  );
}
