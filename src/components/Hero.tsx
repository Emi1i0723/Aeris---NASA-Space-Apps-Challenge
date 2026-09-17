import React, { useState } from 'react';
import { AerisLogo } from './AerisLogo';
import { 
  Radio, 
  Eye, 
  Smartphone, 
  Navigation, 
  Activity, 
  Flame, 
  Cpu, 
  Users, 
  ShieldAlert, 
  Play, 
  FileText, 
  ChevronRight, 
  Sparkles,
  ExternalLink,
  Radar,
  HeartPulse
} from 'lucide-react';

interface HeroProps {
  onOpenVRModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVRModal }) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'directive'>('vision');

  const tacticalCapabilities = [
    {
      icon: Smartphone,
      title: 'Dispositivos de Ciudadanos',
      desc: 'Baliza SOS pasiva y optimización extrema de batería',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/30',
    },
    {
      icon: Navigation,
      title: 'Drones de Reconocimiento',
      desc: 'Enjambre aéreo con cámaras multiespectrales y fotogrametría',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/30',
    },
    {
      icon: Cpu,
      title: 'Robots de Exploración',
      desc: 'Acceso autónomo a grietas y escombros colapsados',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30',
    },
    {
      icon: Activity,
      title: 'Sensores Térmicos & Acústicos',
      desc: 'Detección micro-vibratoria de pulso y respiración bajo losa',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/30',
    },
    {
      icon: Radar,
      title: 'Mapeo en Tiempo Real',
      desc: 'Fusión georreferenciada 3D de zonas de alto riesgo',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30',
    },
    {
      icon: Users,
      title: 'Rescatistas Coordinados por IA',
      desc: 'Asignación dinámica de cuadrillas con menor exposición a peligro',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30',
    },
  ];

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-center items-center bg-[#070a12]"
    >
      {/* Dynamic Background Elements: Grid, Tactical Coordinates & Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle coordinate matrix grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px),
                              linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-sky-500/10 to-rose-600/10 rounded-full blur-[140px] -z-10" />
        <div className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] -z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Operational Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs text-slate-300 shadow-lg shadow-cyan-950/40 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Proyecto Oficial Aeris
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 hidden sm:inline">
              Antes Proyecto Sentinel • IA Aumentada Singular de Rescate
            </span>
            <span className="text-slate-300 sm:hidden">
              Rescate Crítico 4.0
            </span>
          </div>
        </div>

        {/* Main Branding Header: Big Aeris Name + Distinct Non-Camouflaged Circular Logo */}
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Showcase with Anti-Camouflage High-Contrast Halo Framing */}
          <div className="relative mb-8 group">
            {/* Visual Contrast Pedestal (prevents dark logo circle from merging with dark background) */}
            <div className="p-3.5 sm:p-4 rounded-full bg-gradient-to-b from-slate-800/80 via-slate-900/95 to-[#05070d] border border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.35)] backdrop-blur-xl transition-transform duration-500 hover:scale-105">
              <div className="p-2 rounded-full border border-white/20 bg-slate-950/90">
                <AerisLogo size={140} showHalo={true} />
              </div>
            </div>

            {/* Tactical Compass / Coordinate marks around logo */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest text-cyan-400/70 bg-[#070a12] px-2 py-0.5 rounded border border-cyan-500/30">
              SYS::AERIS-CORE
            </div>
          </div>

          {/* Monumental Name Header */}
          <h1 
            id="aeris-hero-title"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight font-['Chakra_Petch',sans-serif] uppercase text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_4px_24px_rgba(255,255,255,0.2)]">
              AERIS
            </span>
          </h1>

          {/* User's Exact Phrase (Mandatory in Header) */}
          <div className="max-w-4xl mx-auto mb-8 px-4">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-rose-300 leading-snug italic font-['Plus_Jakarta_Sans',sans-serif]">
              “transforma el poder de la colaboración en la garantía de salvar una vida más”
            </blockquote>
          </div>

          {/* Core Platform Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
            Una plataforma de inteligencia y coordinación que conecta tecnologías de{' '}
            <strong className="text-white font-semibold">detección, comunicación, localización, mapas, sensores, drones, robots y equipos humanos</strong>{' '}
            durante una emergencia; terremotos y desastres naturales.
          </p>

          {/* Action Buttons for Investors and Collaborators */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#solucion-vr"
              id="hero-explore-vr-btn"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>Ver Solución & Experiencia VR</span>
            </a>

            <a
              href="#movimiento"
              id="hero-investors-btn"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400/50 shadow-lg shadow-black/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Inversionistas & Colaboradores</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://www.instagram.com/proyect.aeris?stkn=MXh0OWxqdzZzOTNtbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Instagram Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* High-Impact Tactical Quote Box from Presentation Slides */}
          <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-slate-900/90 via-[#0a1122]/90 to-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden mb-16 text-left">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                    Directiva Operativa Singular
                  </span>
                  <span className="text-sm font-bold text-white">
                    AERIS | IA + DISPOSITIVOS + PERSONAS = MÁS VIDAS SALVADAS
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Del aviso al rescate inmediato
              </span>
            </div>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed italic">
              «Crear un modelo de <span className="text-white font-semibold">Inteligencia Artificial Aumentada Singular</span>, que se focalice en disponer todos los recursos y medios disponibles para agilizar el proceso de rescate y maximizar el número de vidas salvadas cuando la catástrofe ya la tienes encima.»
            </p>

            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                “La tecnología no reemplaza a los héroes. Los hace más fuertes.”
              </span>
              <span className="font-mono text-slate-500 text-[11px] mt-1 sm:mt-0">
                Open Science NASA Framework • ISO 42001
              </span>
            </div>
          </div>
        </div>

        {/* Tactical Capabilities Bar (Inspired by Slide 1) */}
        <div className="mt-2">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full">
              Ecosistema Tecnológico Sincronizado
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tacticalCapabilities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  id={`capability-card-${index}`}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/30 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg border ${item.bg} ${item.color} shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
