import React from 'react';
import { 
  Users, 
  BrainCircuit, 
  Code2, 
  Briefcase, 
  Cpu, 
  Microscope, 
  ShieldCheck, 
  Award, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const TeamSection: React.FC = () => {
  const precursores = [
    {
      name: 'Emilio C.',
      role: 'AI Transform Leader y precursor del movimiento Open Science aplicado',
      category: 'Liderazgo de IA & Open Science',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      avatarGlow: 'from-cyan-500 to-blue-600',
      icon: BrainCircuit,
      bio: 'Visionario detrás de la arquitectura de Inteligencia Artificial Aumentada Singular de Aeris. Impulsor incansable del movimiento de Ciencia Abierta aplicada a situaciones de catástrofe humana, liderando la articulación con estándares internacionales y el marco Open Science de la NASA.',
      pillars: ['IA Aumentada Singular', 'NASA Open Science', 'Ecosistemas de Misión Crítica'],
    },
    {
      name: 'Gustavo A.',
      role: 'Programador y jefe del equipo de desarrollo',
      category: 'Ingeniería de Software & Arquitectura',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      avatarGlow: 'from-sky-500 to-indigo-600',
      icon: Code2,
      bio: 'Líder técnico a cargo del motor de cómputo, algoritmos de fusión sensorial en tiempo real y la infraestructura de sincronización de baja latencia entre drones, terminales tácticos y dispositivos de ciudadanos.',
      pillars: ['Motor Algorítmico', 'Fusión de Sensores', 'Optimización de Cómputo'],
    },
    {
      name: 'Enmanuel D.',
      role: 'Líder emprendedor y encargado del modelo de negocio',
      category: 'Estrategia, Inversión & Alianzas',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      avatarGlow: 'from-amber-500 to-orange-600',
      icon: Briefcase,
      bio: 'Estratega emprendedor enfocado en la viabilidad económica, financiamiento de capital semilla, rondas con inversores ángel y alianzas de impacto global para que Aeris sea una solución sostenible y desplegable a escala masiva.',
      pillars: ['Modelo de Negocio', 'Relación con Inversionistas', 'Escalabilidad Global'],
    },
    {
      name: 'Ian M.',
      role: 'Referente Nacional en tecnología STEM y encargado del área tecnológica',
      category: 'Hardware STEM & Robótica',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      avatarGlow: 'from-rose-500 to-pink-600',
      icon: Cpu,
      bio: 'Reconocido referente a nivel nacional en innovación STEM. Dirige la integración de hardware de vanguardia: robótica autónoma para grietas, telemetría de drones, balizas de radiofrecuencia mesh y sensores térmicos de grado militar.',
      pillars: ['Robótica de Rescate', 'Redes Mesh Descentralizadas', 'Innovación STEM Nacional'],
    },
    {
      name: 'Mstro. Luis',
      role: 'Investigador referente y encargado de la fundamentación científica',
      category: 'Rigor Científico & Gobernanza ISO',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      avatarGlow: 'from-purple-500 to-violet-600',
      icon: Microscope,
      bio: 'Pilar académico del proyecto. Responsable de la fundamentación empírica, el marco teórico basado en la sismología y el diseño de protocolos de gobernanza, auditoría y cumplimiento normativo ISO 42001 para modelos de IA de misión crítica.',
      pillars: ['Fundamentación Científica', 'Gobernanza ISO 42001', 'Validación Empírica'],
    },
  ];

  return (
    <section id="precursores" className="py-24 bg-[#070b14] relative overflow-hidden border-t border-slate-800">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Equipo Fundador</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Chakra_Petch',sans-serif] tracking-tight mb-6">
            Conoce a los precursores de Aeris <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-rose-400">
              Mentes unidas por una sola misión de vida
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Un equipo multidisciplinario que combina liderazgo en IA, ciencia abierta aplicada, desarrollo de software crítico, visión de negocio, hardware STEM de alto nivel y rigurosidad científica.
          </p>
        </div>

        {/* Precursores Grid (5 Members, 3 on top row, 2 centered on second row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {precursores.map((person, idx) => {
            const IconComp = person.icon;
            return (
              <div
                key={idx}
                id={`precursor-card-${idx}`}
                className={`p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-cyan-950/30 relative overflow-hidden ${
                  idx === 3 ? 'lg:col-start-1 lg:translate-x-1/2' : idx === 4 ? 'lg:col-start-2 lg:translate-x-1/2' : ''
                }`}
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Avatar Badge with Monogram & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${person.avatarGlow} p-0.5 shadow-lg shadow-black/60`}>
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-white font-extrabold font-['Chakra_Petch',sans-serif] text-xl tracking-wider">
                          {person.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white shadow">
                        <IconComp className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${person.badgeColor} uppercase tracking-wider`}>
                      {person.category}
                    </span>
                  </div>

                  {/* Name & Exact Title */}
                  <h3 className="text-xl font-bold text-white font-['Chakra_Petch',sans-serif] group-hover:text-cyan-300 transition-colors">
                    {person.name}
                  </h3>

                  <h4 className="text-xs font-semibold text-cyan-400 mt-1 mb-3 font-mono leading-snug">
                    {person.role}
                  </h4>

                  {/* Biography */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {person.bio}
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {person.pillars.map((pillar, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement */}
        <div className="text-center mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            «La combinación de ciencia rigurosa, tecnología de vanguardia y corazón humano es lo que hace posible transformar el caos en esperanza.»
          </p>
          <span className="text-xs font-bold text-cyan-400 mt-2 block font-['Chakra_Petch',sans-serif]">
            — Equipo Precursor de Aeris
          </span>
        </div>

      </div>
    </section>
  );
};
