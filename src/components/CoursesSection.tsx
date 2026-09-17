import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Radio, 
  Cpu, 
  ShieldAlert, 
  Award, 
  Clock, 
  CheckCircle, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      tag: 'Nivel Operativo & Táctico',
      tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      title: 'Operaciones de Rescate Asistidas por IA y Visión Térmica',
      target: 'Cuerpos de bomberos, brigadas USAR, paramédicos y protección civil.',
      duration: '40 Horas • Prácticas de campo + Simulación VR',
      summary: 'Capacitación inmersiva en la interpretación de señales térmicas, micro-vibraciones acústicas y despliegue del radar Aeris a través de escombros de concreto.',
      syllabus: [
        'Principios de termografía y acústica de alta sensibilidad en derrumbes',
        'Operación de la consola táctica y lectura del índice de probabilidad de vida',
        'Coordinación de cuadrillas con robots de grieta y enjambres aéreos',
        'Protocolos de extracción segura guiados por telemetría milimétrica',
      ],
      icon: ShieldAlert,
    },
    {
      id: 2,
      tag: 'Desarrollo & Hardware STEM',
      tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      title: 'Ingeniería STEM en Crisis: Redes Mesh y Robótica Autónoma',
      target: 'Ingenieros de software, desarrolladores de hardware, técnicos y estudiantes STEM.',
      duration: '32 Horas • Modalidad Híbrida',
      summary: 'Aprende a construir y desplegar redes de comunicación descentralizadas que operan cuando la infraestructura eléctrica y las torres celulares colapsan.',
      syllabus: [
        'Arquitectura de radiofrecuencia de largo alcance y redes mesh de emergencia',
        'Optimización de firmware de ultra-bajo consumo para balizas SOS',
        'Integración de telemetría de drones comerciales en mapas georreferenciados',
        'Algoritmos de visión computacional y filtrado de falsos positivos en desastres',
      ],
      icon: Cpu,
    },
    {
      id: 3,
      tag: 'Ciudadanía & Resiliencia Comunitaria',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      title: 'Cultura Sísmica Inteligente y Protocolos de Auto-Rescate',
      target: 'Familias, brigadas vecinales, instituciones educativas y centros de trabajo.',
      duration: '16 Horas • Talleres Prácticos y Digitales',
      summary: 'Entrenamiento esencial para saber cómo actuar antes, durante y después del sismo, utilizando el teléfono inteligente como salvavidas personal.',
      syllabus: [
        'Configuración y verificación del Modo Rescate SOS pasivo en el smartphone',
        'Reconocimiento de puntos estructurales rígidos y cápsulas de resguardo',
        'Señales acústicas y pautas para prolongar la supervivencia bajo atrapamiento',
        'Prevención de desinformación y canales oficiales de auxilio vecinal',
      ],
      icon: Users,
    },
    {
      id: 4,
      tag: 'Ciencia Abierta & Gobernanza',
      tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      title: 'Open Science y Gobernanza Ética en IA de Emergencias (ISO 42001)',
      target: 'Investigadores, directores de innovación pública, comités de bioética y académicos.',
      duration: '24 Horas • Seminario Magistral con Certificado',
      summary: 'Fundamentos de gobernanza algorítmica, transparencia de datos, estándares internacionales de misión crítica y postulación al programa Open Science de la NASA.',
      syllabus: [
        'Marco normativo ISO 42001 aplicado a modelos de Inteligencia Artificial Singular',
        'Privacidad y resguardo ético de la información biométrica de las víctimas',
        'Interoperabilidad con repositorios abiertos de agencias aeroespaciales y de auxilio',
        'Validación científica de modelos predictivos y mitigación de sesgos en rescates',
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="cursos" className="py-24 bg-[#080d19] relative overflow-hidden border-t border-slate-800">
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academia Aeris • Formación Especializada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Chakra_Petch',sans-serif] tracking-tight mb-6">
            Capacitación y Formación Aeris: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400">
              Preparar a la sociedad y a los héroes del futuro
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            La mejor tecnología requiere mentes preparadas. Nuestros cursos transfieren conocimiento de vanguardia a rescatistas, ingenieros y ciudadanos para que la tecnología salve vidas de manera efectiva en el terreno.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {courses.map((course, idx) => {
            const IconComponent = course.icon;
            const isSelected = selectedCourse === course.id;
            return (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${course.tagColor}`}>
                      {course.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Chakra_Petch',sans-serif] mb-2 group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-4 flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {course.duration}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {course.summary}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs mb-4">
                    <strong className="text-white block mb-1">Público Objetivo:</strong>
                    <span className="text-slate-400">{course.target}</span>
                  </div>

                  {/* Syllabus Points */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <span className="text-xs font-semibold text-slate-400 block font-mono">
                      Módulos Destacados:
                    </span>
                    {course.syllabus.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    Certificación Oficial Aeris
                  </span>
                  <a
                    href="#movimiento"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>Inscribirse / Consultar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Partnership Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <h4 className="text-lg font-bold text-white font-['Chakra_Petch',sans-serif]">
              ¿Perteneces a una institución de auxilio, universidad o gobierno?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Ofrecemos programas de entrenamiento a medida, talleres de simulación inmersiva VR y acreditación de brigadas comunitarias sin costo para organismos de rescate sin fines de lucro.
            </p>
          </div>

          <a
            href="#movimiento"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-lg shadow-emerald-500/25"
          >
            Solicitar Alianza Académica
          </a>
        </div>

      </div>
    </section>
  );
};
