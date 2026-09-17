import React from 'react';
import { 
  History, 
  MapPin, 
  Heart, 
  Compass, 
  Lightbulb, 
  Sparkles, 
  FileCheck2, 
  Quote, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { AerisLogo } from './AerisLogo';

export const OriginSection: React.FC = () => {
  return (
    <section id="origen" className="py-24 bg-[#080e1c] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-widest mb-4">
            <History className="w-3.5 h-3.5" />
            <span>Nuestra Historia & Fundamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Chakra_Petch',sans-serif] tracking-tight mb-6">
            Por qué surgió Aeris: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-rose-400">
              Del dolor de la catástrofe a la acción científica
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Aeris no nació en una oficina fría; nació en las calles agrietadas, tras vivir de primera mano el estremecimiento de la tierra y la impotencia de ver la búsqueda desesperada de sobrevivientes a ciegas.
          </p>
        </div>

        {/* The Genesis Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white font-['Chakra_Petch',sans-serif]">
                    El punto de inflexión en nuestra localidad
                  </h3>
                  <span className="text-xs text-slate-400">La realidad tangible tras el sismo</span>
                </div>
              </div>
              <p>
                Tras experimentar el impacto devastador de un temblor en nuestra propia región y documentar las evidencias y testimonios de quienes perdieron a sus seres queridos, una pregunta golpeó profundamente a nuestro equipo: 
              </p>
              <blockquote className="my-4 pl-4 border-l-2 border-cyan-400 text-white font-medium italic">
                «¿Por qué en la era de la inteligencia artificial, satélites de órbita baja y robótica avanzada, los cuerpos de auxilio siguen obligados a buscar vidas golpeando cascajo y gritando al vacío?»
              </blockquote>
              <p>
                Los rescatistas son verdaderos héroes, pero sus manos no tienen visión térmica a través de 3 metros de hormigón armado, ni sus radios pueden atravesar zonas de sombra electromagnética. Vimos cómo el aislamiento costaba vidas que eran plenamente salvables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Lightbulb className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white font-['Chakra_Petch',sans-serif]">
                    La evolución de "Sentinel" hacia "Aeris"
                  </h3>
                  <span className="text-xs text-slate-400">De la simple vigilancia a la orquestación vital</span>
                </div>
              </div>
              <p>
                El proyecto comenzó bajo el nombre provisional de <strong>Proyecto Sentinel</strong>, enfocado inicialmente en alertas y monitoreo pasivo. Sin embargo, en intensas sesiones de lluvia de ideas y análisis de campo, entendimos que vigilar no era suficiente: se requería una atmósfera completa que envolviera la emergencia con inteligencia, conectando aire, tierra y datos.
              </p>
              <p className="mt-3">
                Así nació <strong>AERIS</strong>: un tributo al aire como vehículo de las ondas de rescate, la señal de auxilio y el aliento vital que se recupera cuando una mano amiga encuentra a otra bajo los escombros.
              </p>
            </div>

          </div>

          {/* Right Visual Brand & Statement Box */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0a1324] to-slate-950 border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden text-center">
              
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-slate-950 border border-cyan-400/40 shadow-xl">
                  <AerisLogo size={110} showHalo={true} />
                </div>
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
                Manifiesto de Precursores
              </span>

              <h4 className="text-xl font-bold text-white font-['Chakra_Petch',sans-serif] mb-4">
                Ciencia Abierta aplicada para salvar vidas
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                “No creamos tecnología para exhibiciones de salón; diseñamos algoritmos y hardware de campo para el momento más aterrador en la vida de un ser humano. Ese es nuestro pacto con la ciencia y la sociedad.”
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-left">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fundamentación científica y marco teórico local riguroso</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Modelo de IA con gobernanza ética y certificación ISO 42001</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Postulación oficial al NASA Open Science Program</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
