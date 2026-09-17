import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Clock, 
  RadioTower, 
  EyeOff, 
  UsersRound, 
  TrendingDown, 
  CheckCircle2, 
  XCircle,
  ZapOff,
  Flame,
  Activity
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pain_points' | 'comparison'>('pain_points');

  const painPoints = [
    {
      icon: Clock,
      title: 'La "Hora de Oro" se pierde en el caos',
      stat: '72 Horas',
      statLabel: 'Límite crítico de supervivencia',
      desc: 'En terremotos de gran magnitud, más del 80% de los rescates con éxito ocurren en las primeras 24-48 horas. La falta de información inmediata sobre dónde buscar convierte cada minuto perdido en vidas irrecuperables.',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/5',
    },
    {
      icon: RadioTower,
      title: 'Colapso total de comunicaciones',
      stat: '94%',
      statLabel: 'Caída de redes celulares locales',
      desc: 'Las antenas de telefonía e internet sufren daños estructurales o saturación extrema. Los sobrevivientes quedan incomunicados sin posibilidad de enviar su geolocalización a los cuerpos de auxilio.',
      color: 'text-rose-400',
      border: 'border-rose-500/30',
      bg: 'bg-rose-500/5',
    },
    {
      icon: EyeOff,
      title: 'Búsqueda a ciegas entre escombros',
      stat: '0m Visibilidad',
      statLabel: 'Bajo losas colapsadas',
      desc: 'Los rescatistas arriesgan sus vidas ingresando a grietas inestables sin saber la profundidad exacta, si la persona está consciente o si la losa superior está a punto de un derrumbe secundario.',
      color: 'text-orange-400',
      border: 'border-orange-500/30',
      bg: 'bg-orange-500/5',
    },
    {
      icon: UsersRound,
      title: 'Esfuerzos heroicos pero desarticulados',
      stat: 'Silos Aislados',
      statLabel: 'Drones, perros y brigadas sin sincronía',
      desc: 'Equipos civiles, militares, pilotos de drones y rescatistas con sensores térmicos operan sin un mapa táctico unificado en tiempo real, duplicando esfuerzos o dejando sectores enteros sin rastrear.',
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/5',
    },
  ];

  return (
    <section id="problematica" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-slate-800">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-widest mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Problemática Crítica</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Chakra_Petch',sans-serif] tracking-tight mb-6">
            Cuando la tierra se quiebra, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
              el tiempo y el caos cuestan vidas
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Durante un terremoto de gran escala, no es la falta de valentía lo que frena el rescate: es la ceguera operativa provocada por la fragmentación de la información en medio de la catástrofe.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl mt-8">
            <button
              onClick={() => setActiveTab('pain_points')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${
                activeTab === 'pain_points'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Vulnerabilidades Críticas
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${
                activeTab === 'comparison'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tradicional vs. AERIS
            </button>
          </div>
        </div>

        {/* Tab 1: Critical Pain Points */}
        {activeTab === 'pain_points' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {painPoints.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  id={`pain-point-card-${idx}`}
                  className={`p-7 rounded-2xl bg-slate-900/80 border ${item.border} backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-black/50`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} border ${item.border}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl sm:text-3xl font-extrabold font-mono ${item.color}`}>
                        {item.stat}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-['Chakra_Petch',sans-serif]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Direct Comparative Matrix */}
        {activeTab === 'comparison' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Traditional Rescue (Fragmented) */}
              <div className="p-8 bg-rose-950/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-rose-300 font-['Chakra_Petch',sans-serif]">
                      Rescate Convencional Fragmentado
                    </h4>
                    <span className="text-xs text-slate-400">Modelo reactivo y desarticulado</span>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span>Detección manual mediante golpes y perros de rescate en zonas aleatorias sin priorización por densidad térmica.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span>Teléfonos de víctimas agotan su batería intentando conectarse a torres destruidas en bucles infinitos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span>Drones operan como islas; sus videos no alimentan un modelo 3D unificado para los rescatistas de tierra.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span>Toma de decisiones centralizada lenta basada en llamadas de radio confusas e incompletas.</span>
                  </li>
                </ul>
              </div>

              {/* Aeris Solution */}
              <div className="p-8 bg-cyan-950/15">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cyan-300 font-['Chakra_Petch',sans-serif]">
                      Orquestación Singular AERIS
                    </h4>
                    <span className="text-xs text-slate-400">Inteligencia Artificial Aumentada + Hardware</span>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>Mapeo Térmico y Acústico 3D</strong> que calcula probabilidad de vida, profundidad exacta (m) y micro-pulso.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>Modo Rescate SOS Pasivo:</strong> el celular apaga procesos de alto consumo y emite balizas periódicas de rescate directo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>Enjambre Sincronizado:</strong> Drones + Robots de grieta + Rescatistas humanos conectados a la misma imagen táctica.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>IA Priorizadora en Tiempo Real:</strong> Asigna cuadrillas a edificios con mayor probabilidad de supervivencia confirmada.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* Urgency Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-rose-950/30 to-slate-900 border border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-xl bg-rose-500/20 text-rose-400">
              <Flame className="w-6 h-6" />
            </span>
            <div>
              <h4 className="text-base font-bold text-white">
                Cada segundo sin coordinación es una oportunidad perdida
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Aeris fue concebido para que ningún sobreviviente quede en el olvido bajo el concreto.
              </p>
            </div>
          </div>
          <a
            href="#solucion-vr"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg shadow-cyan-500/20"
          >
            Descubrir la Solución
          </a>
        </div>

      </div>
    </section>
  );
};
