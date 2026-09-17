import React, { useState } from 'react';
import { 
  Milestone, 
  Globe2, 
  FileSpreadsheet, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Pilar 1: Landing & Convocatoria Global',
      subtitle: 'Carta de presentación, VR y tracción mundial',
      badge: 'Fase Activa',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: Globe2,
      points: [
        'Carta de presentación oficial para enamorar a inversionistas ángel, fondos y aliados institucionales.',
        '3 Experiencias Inmersivas VR completas (POV Rescatista táctico, POV Usuario en colapso y POV Centro de Mando).',
        '1 Simulador interactivo en tiempo real para validación técnica.',
        'Integración con la iniciativa Open Science de la NASA para máxima transparencia y datos abiertos.',
        'Canal activo de feedback y registro de colaboradores oficiales en brigadas y academias de rescate.',
        'Rutas de videos introductorios y banco documental de libre acceso.',
      ],
    },
    {
      title: 'Pilar 2: Artículo Científico & Certificación',
      subtitle: 'Fundamentación empírica, ISO 42001 y ética',
      badge: 'En Redacción',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      icon: FileSpreadsheet,
      points: [
        'Marco teórico y fundamentación científica basada en registros sísmicos y realidades de nuestra localidad.',
        'Maquetación algorítmica del funcionamiento interno de la IA Aumentada Singular Aeris.',
        'Protocolos de seguimiento, transparencia y gobernanza bajo el estándar internacional ISO 42001.',
        'Compilación de evidencias testimoniales e imágenes visuales de las secuelas de sismos recientes.',
        'Publicación en repositorios Open Access y presentación ante comités de Protección Civil.',
      ],
    },
    {
      title: 'Pilar 3: Tecnología, Hackathon & MVP Operativo',
      subtitle: 'De la prueba de concepto 0.5 al despliegue real',
      badge: 'En Desarrollo',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: Cpu,
      points: [
        'Demostración funcional de la propuesta aplicada a micro-escala como Fase 0.5 durante el Hackathon.',
        'Arquitectura de red mesh descentralizada independiente de antenas comerciales de telefonía.',
        'Integración con sensores térmicos portátiles, micrófonos de suelo y robótica de exploración.',
        'Proyección y cálculo financiero aproximado de la ronda de inversión requerida para el MVP de campo.',
        'Simulacro de extracción coordinada en escenario controlado con brigadistas certificados.',
      ],
    },
  ];

  return (
    <section id="proximamente" className="py-24 bg-[#070b16] relative overflow-hidden border-t border-slate-800">
      {/* Glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>Próximamente • Roadmap Estratégico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Chakra_Petch',sans-serif] tracking-tight mb-6">
            Desarrollo de los Tres Pilares <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              Estructura sólida de validación e impacto
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Nuestro plan maestro se divide en tres ejes complementarios diseñados para garantizar rigor científico, viabilidad tecnológica y respaldo de la comunidad internacional.
          </p>
        </div>

        {/* Pillar Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedPillar(idx)}
                className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-2xl shadow-cyan-950/60 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Chakra_Petch',sans-serif] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-cyan-400' : 'text-slate-400'}>
                    {isSelected ? 'Explorando detalles' : 'Ver entregables'}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : 'text-slate-500'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Deep Dive Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border-2 border-cyan-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-['Chakra_Petch',sans-serif]">
                Entregables y Metas: {pillars[selectedPillar].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Puntos de control planificados y respaldados por el equipo precursor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars[selectedPillar].points.map((point, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Special Investor Callout on Pillar 3 */}
          {selectedPillar === 2 && (
            <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-white">
                    Estimación Presupuestaria para el MVP Operativo de Campo
                  </h5>
                  <p className="text-xs text-slate-300">
                    Estamos preparando el modelo financiero detallado con costos de sensores, robótica de grieta y pruebas de estrés en campo para presentar a inversionistas.
                  </p>
                </div>
              </div>
              <a
                href="#movimiento"
                className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider whitespace-nowrap"
              >
                Solicitar Pitch Financiero
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
