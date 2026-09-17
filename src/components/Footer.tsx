import React from 'react';
import { AerisLogo } from './AerisLogo';
import { Instagram, Heart, ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04070e] text-slate-400 py-16 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <AerisLogo size={44} showHalo={true} />
              <div>
                <span className="text-2xl font-extrabold text-white tracking-widest font-['Chakra_Petch',sans-serif] block">
                  AERIS
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                  Rescue Intelligence Platform
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 italic font-medium leading-relaxed">
              “transforma el poder de la colaboración en la garantía de salvar una vida más”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma de inteligencia y coordinación que conecta tecnologías de detección, comunicación, localización, mapas, sensores, drones, robots y equipos humanos durante terremotos y emergencias.
            </p>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/proyect.aeris?stkn=MXh0OWxqdzZzOTNtbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 text-white text-xs font-semibold hover:from-pink-500/30 hover:to-orange-500/30 transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram Oficial: @proyect.aeris</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Apartados
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#problematica" className="hover:text-cyan-400 transition-colors">
                  Problemática Crítica
                </a>
              </li>
              <li>
                <a href="#solucion-vr" className="hover:text-cyan-400 transition-colors">
                  Solución & Experiencia VR
                </a>
              </li>
              <li>
                <a href="#origen" className="hover:text-cyan-400 transition-colors">
                  Origen del Proyecto
                </a>
              </li>
              <li>
                <a href="#proximamente" className="hover:text-cyan-400 transition-colors">
                  Próximamente (Tres Pilares)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-cyan-400 transition-colors">
                  Cursos y Capacitación
                </a>
              </li>
              <li>
                <a href="#precursores" className="hover:text-cyan-400 transition-colors">
                  Conoce a los Precursores
                </a>
              </li>
            </ul>
          </div>

          {/* Technology & Standards */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Estándares & Alianzas
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>NASA Open Science Program</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Gobernanza ISO 42001</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Arquitectura Mesh Descentralizada</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Protección Civil & USAR</span>
              </li>
            </ul>
          </div>

          {/* Quote & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
                Lema de Misión
              </h4>
              <p className="text-xs text-slate-300 italic border-l-2 border-cyan-400 pl-3 leading-relaxed">
                “La tecnología no reemplaza a los héroes. Los hace más fuertes.”
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Proyecto AERIS (Antes Sentinel). Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Iniciativa impulsada por el equipo precursor</span>
            <span className="text-rose-500">♥</span>
            <span>para salvar vidas.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
