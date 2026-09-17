/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionVRSection } from './components/SolutionVRSection';
import { OriginSection } from './components/OriginSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CoursesSection } from './components/CoursesSection';
import { TeamSection } from './components/TeamSection';
import { JoinMovementSection } from './components/JoinMovementSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Encabezado con Nombre Aeris, Logo Circular y Frase */}
        <Hero />

        {/* 1. Problemática */}
        <ProblemSection />

        {/* 2. Solución (Experiencia VR y 6 Fases) */}
        <SolutionVRSection />

        {/* 3. Origen (Porqué surgió el proyecto) */}
        <OriginSection />

        {/* 4. Próximamente (Desarrollo de Tres Pilares) */}
        <RoadmapSection />

        {/* 5. Cursos y Formación Aeris */}
        <CoursesSection />

        {/* 6. Conoce a los Precursores */}
        <TeamSection />

        {/* 7. Sé parte del Movimiento AERIS & Instagram */}
        <JoinMovementSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
