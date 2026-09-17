import React, { useState } from 'react';
import { 
  Instagram, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { AerisLogo } from './AerisLogo';

export const JoinMovementSection: React.FC = () => {
  const [profileType, setProfileType] = useState<'inversionista' | 'colaborador' | 'rescatista' | 'investigador'>('inversionista');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    organizacion: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="movimiento" className="py-24 bg-[#060a12] relative overflow-hidden border-t border-slate-800">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-rose-600/10 to-sky-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-rose-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Convocatoria Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white font-['Chakra_Petch',sans-serif] tracking-tight mb-6">
            Sé parte del movimiento AERIS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-rose-400">
              Juntos salvaremos una vida más
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Buscamos <strong className="text-white">inversionistas visionarios</strong>, <strong className="text-white">cuerpos de rescate</strong>, <strong className="text-white">científicos</strong> y <strong className="text-white">desarrolladores comprometidos</strong> para llevar Aeris de la concepción al despliegue operativo masivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Instagram Spotlight & Investor Pitch Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* INSTAGRAM HERO CARD (Required by user) */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#120a1c] via-[#1a0f28] to-[#0d0914] border-2 border-pink-500/40 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400 text-white shadow-lg shadow-pink-500/30">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold block">
                    Comunidad Oficial
                  </span>
                  <h3 className="text-xl font-bold text-white font-['Chakra_Petch',sans-serif]">
                    Instagram @proyect.aeris
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Sigue de cerca cada avance del desarrollo, demostraciones de campo, pruebas con drones y sensores, y las reflexiones de nuestros precursores en nuestra cuenta oficial de Instagram.
              </p>

              <a
                href="https://www.instagram.com/proyect.aeris?stkn=MXh0OWxqdzZzOTNtbQ=="
                target="_blank"
                rel="noopener noreferrer"
                id="instagram-card-cta-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 hover:from-pink-400 hover:to-orange-400 shadow-xl shadow-pink-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Conectar en Instagram @proyect.aeris</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono text-slate-400">
                  Link verificado • Comunidad en crecimiento
                </span>
              </div>
            </div>

            {/* Investor & Technical Material Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <h4 className="text-base font-bold text-white font-['Chakra_Petch',sans-serif] mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Documentación para Inversionistas & Partners</span>
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Accede a los documentos ejecutivos, estructura de costos del MVP y el borrador de fundamentación científica:
              </p>

              <div className="space-y-2">
                <a
                  href="#movimiento"
                  onClick={() => {
                    setProfileType('inversionista');
                    setFormData(prev => ({ ...prev, mensaje: 'Solicito el One-Pager de Inversión y proyecciones de financiamiento.' }));
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-200 transition-all hover:bg-slate-900"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    One-Pager & Dossier Ejecutivo para Inversionistas
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="#movimiento"
                  onClick={() => {
                    setProfileType('investigador');
                    setFormData(prev => ({ ...prev, mensaje: 'Solicito el Draft del Artículo Científico y marco ISO 42001.' }));
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-200 transition-all hover:bg-slate-900"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Download className="w-3.5 h-3.5 text-sky-400" />
                    Borrador de Artículo Científico & Protocolo ISO 42001
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Registration & Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/95 border-2 border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Form Header */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-1">
                  Registro de Interés
                </span>
                <h3 className="text-2xl font-bold text-white font-['Chakra_Petch',sans-serif]">
                  Únete como Inversionista o Colaborador
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Déjanos tus datos para coordinar una reunión privada con el equipo precursor.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Chakra_Petch',sans-serif]">
                    ¡Bienvenido al Movimiento AERIS, {formData.nombre}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Hemos recibido tu mensaje como <strong>{profileType.toUpperCase()}</strong>. Nuestro equipo de desarrollo y liderazgo de negocio se pondrá en contacto contigo a la brevedad.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ nombre: '', email: '', organizacion: '', mensaje: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:text-white"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Profile Type Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                      ¿Cuál es tu perfil de participación?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'inversionista', label: 'Inversionista' },
                        { id: 'colaborador', label: 'Desarrollador' },
                        { id: 'rescatista', label: 'Rescatista / Brigada' },
                        { id: 'investigador', label: 'Investigador / STEM' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setProfileType(type.id as any)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                            profileType === type.id
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                              : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Dra. Carmen Méndez"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu.correo@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Organization / Fund */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Organización, Fondo, Institución o Brigada (Opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.organizacion}
                      onChange={(e) => setFormData({ ...formData, organizacion: e.target.value })}
                      placeholder="Ej. Fondo de Inversión / Universidad / Cuerpo de Bomberos"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Message / Proposal */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      ¿Cómo te gustaría colaborar o apoyar la visión de Aeris?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Cuéntanos tu interés en inversión, colaboración tecnológica, validación en brigada o investigación..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-movement-btn"
                    className="w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-slate-950 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Postularme / Conectar con los Precursores</span>
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] text-slate-500 font-mono">
                      Compromiso de privacidad Aeris: Tus datos no serán compartidos ni comercializados.
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
