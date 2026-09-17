import React, { useState } from 'react';
import { 
  Eye, 
  Glasses, 
  Smartphone, 
  Radio, 
  ShieldCheck, 
  Activity, 
  Radar, 
  Layers, 
  Flame, 
  Sparkles, 
  Cpu, 
  Compass, 
  Maximize2, 
  Volume2, 
  Battery, 
  Wifi, 
  ChevronRight,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const SolutionVRSection: React.FC = () => {
  // 6 Lifecycle steps
  const [activeStep, setActiveStep] = useState<number>(0);
  
  // Interactive VR Simulation POV mode
  const [vrMode, setVrMode] = useState<'rescuer' | 'survivor' | 'command'>('rescuer');
  const [thermalFilter, setThermalFilter] = useState<boolean>(true);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [sosStatus, setSosStatus] = useState<'need_help' | 'safe'>('need_help');
  const [scanProgress, setScanProgress] = useState<number>(92);

  const steps = [
    {
      num: '01',
      title: 'Prevención - Alerta Temprana',
      short: 'Alerta Sísmica',
      desc: 'El sistema detecta las ondas P del sismo con sensores de alta precisión y envía una alerta ultrarrápida a todos los dispositivos en la zona antes del impacto destructivo.',
      highlight: 'Notificación prioritaria de emergencia',
      icon: Radio,
    },
    {
      num: '02',
      title: 'Tu teléfono te guía',
      short: 'Ruta Segura',
      desc: 'La IA analiza en segundos tu ubicación interna y el mapa estructural del inmueble para indicarte la mejor ruta de evacuación o hacia una cápsula de supervivencia.',
      highlight: 'Rutas dinámicas libres de obstáculos',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Durante el sismo',
      short: 'Protección Activa',
      desc: 'Si el edificio presenta fallas estructurales críticas, la IA instruye al usuario a resguardarse en puntos con mayor rigidez o cápsulas de supervivencia calculadas.',
      highlight: 'Instrucciones claras por voz y vibración',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Si el edificio colapsa',
      short: 'Modo Rescate SOS',
      desc: 'El smartphone activa de inmediato el modo rescate de ultra-bajo consumo, optimiza la batería al 300% y emite señales BLE/Wi-Fi Mesh directas para ser localizado sin internet.',
      highlight: 'Baliza continua de emergencia',
      icon: Smartphone,
    },
    {
      num: '05',
      title: 'Equipos de rescate coordinados',
      short: 'Centro de Mando IA',
      desc: 'La central de IA procesa millones de datos, fusionando telemetría de drones, robots de grieta y sensores para priorizar sectores con mayor probabilidad de vida.',
      highlight: 'Asignación táctica de recursos',
      icon: Cpu,
    },
    {
      num: '06',
      title: 'Te encuentran con precisión',
      short: 'Extracción Guiada',
      desc: 'Con sensores térmicos portátiles y cámaras multiespectrales, los rescatistas ven a través de los escombros: profundidad exacta, ritmo cardíaco y número de personas.',
      highlight: 'Rescate milimétrico y seguro',
      icon: Activity,
    },
  ];

  const handleTriggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanProgress(Math.floor(Math.random() * 8) + 91);
    }, 1200);
  };

  return (
    <section id="solucion-vr" className="py-24 bg-[#070b15] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Glasses className="w-3.5 h-3.5" />
            <span>Solución de Nueva Generación & Experiencia VR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Chakra_Petch',sans-serif] tracking-tight mb-6">
            Inteligencia Artificial Aumentada Singular <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-rose-400">
              del aviso al rescate en 6 fases
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Aeris unifica el ecosistema completo: dispositivos móviles ciudadanos, enjambres de drones de reconocimiento, robots de exploración, sensores térmicos y rescatistas coordinados por una sola directiva.
          </p>
        </div>

        {/* 6-Step Interactive Lifecycle Tabs (Inspired by Slide 2) */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                    isSelected
                      ? 'bg-cyan-950/70 border-cyan-400 shadow-lg shadow-cyan-950/50 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="font-mono text-xs font-bold text-cyan-400">{step.num}</span>
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  </div>
                  <span className="text-xs font-bold font-['Chakra_Petch',sans-serif] line-clamp-1">
                    {step.short}
                  </span>
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0a1324]/90 to-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Fase {steps[activeStep].num} de 06
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Protocolo Activo
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Chakra_Petch',sans-serif]">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 shrink-0 w-full md:w-auto">
                <div className="text-xs font-mono text-slate-400 mb-1">Impacto de la fase:</div>
                <div className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{steps[activeStep].highlight}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE VR EXPERIENCE SIMULATOR */}
        <div className="mt-20 pt-10 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2">
                <Glasses className="w-4 h-4" />
                <span>Simulador de Interfaz Inmersiva VR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Chakra_Petch',sans-serif]">
                Experimenta los 3 Puntos de Vista de Aeris
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-xl">
                Prueba en tiempo real cómo los rescatistas, supervivientes y directores de misión ven el entorno a través de la tecnología Aeris.
              </p>
            </div>

            {/* POV Selector Controls */}
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 self-stretch sm:self-auto">
              <button
                onClick={() => setVrMode('rescuer')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  vrMode === 'rescuer'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>POV Rescatista (Térmico)</span>
              </button>
              
              <button
                onClick={() => setVrMode('survivor')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  vrMode === 'survivor'
                    ? 'bg-rose-500 text-white shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>POV Teléfono SOS</span>
              </button>

              <button
                onClick={() => setVrMode('command')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  vrMode === 'command'
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Radar className="w-3.5 h-3.5" />
                <span>POV Centro de Mando</span>
              </button>
            </div>
          </div>

          {/* SIMULATOR SCREEN CONTAINER */}
          <div className="relative rounded-2xl bg-slate-950 border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden min-h-[480px]">
            
            {/* Top Tactical HUD Frame */}
            <div className="flex items-center justify-between px-6 py-3 bg-slate-900/90 border-b border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-400 font-bold tracking-wider">
                  VR-SIM::{vrMode.toUpperCase()}
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300 hidden sm:inline">
                  LAT 19.4326° N, LON 99.1332° W • ZONA DE DESASTRE
                </span>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Wifi className="w-3.5 h-3.5" /> MESH ONLINE
                </span>
                <span className="flex items-center gap-1.5">
                  <Battery className="w-3.5 h-3.5 text-cyan-400" /> 87%
                </span>
              </div>
            </div>

            {/* SCREEN CONTENT BY POV */}
            
            {/* 1. POV RESCATISTA (TERMIC HUD) */}
            {vrMode === 'rescuer' && (
              <div className="p-6 sm:p-8 relative min-h-[420px] flex flex-col justify-between bg-gradient-to-b from-slate-950 via-[#0b1220] to-slate-950">
                
                {/* HUD Overlay Crosshairs */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-500/40 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-cyan-400/25 rounded-full animate-[spin_40s_linear_infinite]" />
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-500/20" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyan-500/20" />
                </div>

                {/* Top Telemetry Data */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
                  <div className="bg-slate-900/90 border border-cyan-500/30 px-4 py-2 rounded-xl backdrop-blur-md">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Modo de Visor</span>
                    <span className="text-sm font-bold text-cyan-300 font-mono flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      ESCANEO TÉRMICO + LIDAR 3D
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setThermalFilter(!thermalFilter)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                        thermalFilter
                          ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      {thermalFilter ? 'FILTRO TÉRMICO ACTIVO' : 'VISIÓN NATURAL'}
                    </button>
                    <button
                      onClick={handleTriggerScan}
                      disabled={isScanning}
                      className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all flex items-center gap-1.5"
                    >
                      <RotateCcw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                      {isScanning ? 'ESCANEA...' : 'RE-ESCANEAR'}
                    </button>
                  </div>
                </div>

                {/* Central Target Lock on Survivor (Inspired by Slide 1 & 2) */}
                <div className="relative z-10 my-8 flex items-center justify-center">
                  <div className={`relative p-6 rounded-2xl border-2 transition-all duration-500 max-w-md w-full ${
                    thermalFilter 
                      ? 'bg-gradient-to-tr from-amber-500/20 via-rose-600/30 to-purple-900/40 border-rose-400 shadow-[0_0_40px_rgba(244,63,94,0.35)]' 
                      : 'bg-slate-900/80 border-cyan-400/50'
                  }`}>
                    {/* Corner Reticles */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-rose-400" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-rose-400" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-rose-400" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-rose-400" />

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-500/30 text-rose-200 text-[11px] font-mono font-bold mb-2">
                          <Flame className="w-3.5 h-3.5 text-rose-400" />
                          OBJETIVO DETECTADO (FIRMA TÉRMICA)
                        </div>
                        <h4 className="text-lg font-extrabold text-white font-['Chakra_Petch',sans-serif]">
                          Superviviente Adulto • Sector 3B
                        </h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-mono font-extrabold text-rose-400">
                          {scanProgress}%
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">PROBABILIDAD</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 font-mono text-xs">
                      <div className="bg-black/40 p-2 rounded-lg text-center">
                        <span className="text-slate-400 text-[10px] block">PROFUNDIDAD</span>
                        <span className="text-white font-bold text-sm">2.4 m</span>
                      </div>
                      <div className="bg-black/40 p-2 rounded-lg text-center">
                        <span className="text-slate-400 text-[10px] block">PULSO CARD.</span>
                        <span className="text-emerald-400 font-bold text-sm">74 BPM</span>
                      </div>
                      <div className="bg-black/40 p-2 rounded-lg text-center">
                        <span className="text-slate-400 text-[10px] block">ESTABILIDAD</span>
                        <span className="text-cyan-400 font-bold text-sm">ESTABLE</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <span>Ruta de remoción sugerida: <strong>Flanco Norte 45°</strong></span>
                      <span className="text-cyan-400">Sin gases tóxicos</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Rescue Unit Stats */}
                <div className="relative z-10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                  <span>DISPOSITIVO PORTÁTIL AERIS-CAM v0.5</span>
                  <span>ENLACE CON DRONE ALPHA-1: SEÑAL 100%</span>
                  <span>ROBOT EXPLORADOR: EN APROXIMACIÓN (18m)</span>
                </div>
              </div>
            )}

            {/* 2. POV TELÉFONO DE SUPERVIVIENTE EN COLAPSO */}
            {vrMode === 'survivor' && (
              <div className="p-6 sm:p-8 relative min-h-[420px] flex items-center justify-center bg-gradient-to-b from-[#06080e] via-[#090e1a] to-[#06080e]">
                
                {/* Simulated Smartphone Screen */}
                <div className="max-w-sm w-full bg-slate-950 rounded-3xl border-4 border-slate-700 p-5 shadow-2xl relative overflow-hidden">
                  
                  {/* Glowing SOS Emergency Alert Bar */}
                  <div className="text-center py-2 px-3 rounded-xl bg-rose-600/30 border border-rose-500/50 mb-4 animate-pulse">
                    <span className="text-xs font-mono font-bold tracking-widest text-rose-300 uppercase block">
                      AERIS • MODO RESCATE ACTIVO
                    </span>
                    <span className="text-[11px] text-white">
                      Tu señal y ubicación están siendo transmitidas a los rescatistas
                    </span>
                  </div>

                  {/* Pulsing Beacon Signal */}
                  <div className="relative my-6 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center animate-ping absolute" />
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-xl shadow-rose-600/40 relative z-10">
                      <Radio className="w-8 h-8 animate-bounce" />
                    </div>
                    <span className="text-xs font-mono text-cyan-300 mt-4">
                      Baliza Mesh Acústica & RF Emitiendo
                    </span>
                  </div>

                  {/* Quick Status Buttons */}
                  <div className="space-y-2 mt-4">
                    <button
                      onClick={() => setSosStatus('safe')}
                      className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        sosStatus === 'safe'
                          ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Estoy a salvo / No herido</span>
                    </button>

                    <button
                      onClick={() => setSosStatus('need_help')}
                      className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        sosStatus === 'need_help'
                          ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>Necesito Ayuda Urgente (Atrapado)</span>
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between">
                    <span>Batería: 87% (48h restantes en bajo consumo)</span>
                    <span>Modo Mesh: Sin Internet</span>
                  </div>
                </div>

              </div>
            )}

            {/* 3. POV CENTRO DE MANDO Y ENJAMBRE DE DRONES */}
            {vrMode === 'command' && (
              <div className="p-6 sm:p-8 relative min-h-[420px] flex flex-col justify-between bg-gradient-to-b from-slate-950 via-[#071322] to-slate-950">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-sky-400">CENTRO DE OPERACIONES TÁCTICAS</span>
                    <h4 className="text-base font-bold text-white font-['Chakra_Petch',sans-serif]">
                      Priorización de Rescate Asignada por IA
                    </h4>
                  </div>
                  <div className="flex gap-4 font-mono text-xs">
                    <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-cyan-300">
                      Drones: <strong>6 Activos</strong>
                    </div>
                    <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-amber-300">
                      Robots: <strong>4 en Grieta</strong>
                    </div>
                    <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-emerald-300">
                      Rescatistas: <strong>12 Cuadrillas</strong>
                    </div>
                  </div>
                </div>

                {/* Priority Table / Map Simulation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-red-400">PRIORIDAD MÁXIMA</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-red-500 text-slate-950 font-bold">P1</span>
                    </div>
                    <h5 className="font-bold text-white text-sm">Edificio 17 - Sector 3B</h5>
                    <p className="text-xs text-slate-300 mt-1">23 personas detectadas con pulso estable bajo losa 2.</p>
                    <div className="mt-3 text-[11px] font-mono text-cyan-300">
                      Despachados: 2 Drones • 1 Robot • 2 Cuadrillas
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-amber-400">PRIORIDAD MEDIA</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold">P2</span>
                    </div>
                    <h5 className="font-bold text-white text-sm">Zona A - Complejo Escolar</h5>
                    <p className="text-xs text-slate-300 mt-1">11 personas en zona de evacuación protegida.</p>
                    <div className="mt-3 text-[11px] font-mono text-cyan-300">
                      Despachados: 1 Drone de monitoreo
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">SECTOR ASEGURADO</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">P3</span>
                    </div>
                    <h5 className="font-bold text-white text-sm">Zona 31 - Sector Comercial</h5>
                    <p className="text-xs text-slate-300 mt-1">6 personas evacuadas con éxito sin atrapamiento.</p>
                    <div className="mt-3 text-[11px] font-mono text-cyan-300">
                      Cuadrillas reasignadas a Edificio 17
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>OPTIMIZACIÓN DE TIEMPO DE RESPUESTA: +340% EFECTIVIDAD</span>
                  <span className="text-emerald-400">CERO DUPLICACIÓN DE ESFUERZOS</span>
                </div>
              </div>
            )}

          </div>

          {/* NASA Open Science & VR Collaboration Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-mono font-bold border border-sky-500/30">
                  NASA Open Science Program
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ISO 42001 AI Governance Compliant
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white font-['Chakra_Petch',sans-serif]">
                Ciencia Abierta, Gobernanza Ética e Inmersión VR
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                La experiencia VR de Aeris forma parte de nuestra postulación y marco metodológico Open Science, permitiendo que equipos de todo el mundo simulen y perfeccionen protocolos de rescate sin barreras propietarias.
              </p>
            </div>

            <a
              href="#movimiento"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 shadow-lg shadow-cyan-500/25 transition-all"
            >
              Solicitar Acceso al Sandbox VR
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
