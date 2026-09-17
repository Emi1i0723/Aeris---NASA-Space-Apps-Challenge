import React, { useState, useEffect } from 'react';
import { AerisLogo } from './AerisLogo';
import { 
  Menu, 
  X, 
  Instagram, 
  Radio, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problemática', href: '#problematica' },
    { label: 'Solución VR', href: '#solucion-vr' },
    { label: 'Origen', href: '#origen' },
    { label: 'Próximamente', href: '#proximamente' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Precursores', href: '#precursores' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-xl shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#070b14]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Logo */}
          <a
            href="#"
            id="nav-brand-link"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Aeris Inicio"
          >
            <AerisLogo size={42} showHalo={true} />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-white font-['Chakra_Petch',sans-serif] flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors">
                AERIS
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] tracking-wider uppercase text-cyan-300/80 font-mono">
                Rescue AI Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Instagram + Movement CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/proyect.aeris?stkn=MXh0OWxqdzZzOTNtbQ=="
              target="_blank"
              rel="noopener noreferrer"
              id="nav-instagram-btn"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 hover:from-pink-500/30 hover:to-orange-500/30 text-white border border-pink-500/30 transition-all hover:scale-105 active:scale-95"
              title="Síguenos en Instagram @proyect.aeris"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@proyect.aeris</span>
            </a>

            <a
              href="#movimiento"
              id="nav-join-btn"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-105 active:scale-95"
            >
              <span>Sé parte de Aeris</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://www.instagram.com/proyect.aeris?stkn=MXh0OWxqdzZzOTNtbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/20 bg-[#070b14]/98 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="https://www.instagram.com/proyect.aeris?stkn=MXh0OWxqdzZzOTNtbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 text-white text-sm font-semibold"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Seguir en Instagram @proyect.aeris</span>
            </a>

            <a
              href="#movimiento"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg"
            >
              <span>Sé parte del Movimiento AERIS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
