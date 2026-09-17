import React from 'react';

interface AerisLogoProps {
  size?: number | string;
  className?: string;
  showHalo?: boolean;
}

export const AerisLogo: React.FC<AerisLogoProps> = ({
  size = 120,
  className = '',
  showHalo = true,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: dimension, height: dimension }}
      id="aeris-logo-badge"
    >
      {/* Outer Contrast Halo & Protective Glow */}
      {showHalo && (
        <>
          {/* Subtle emergency dual-colored aura to prevent camouflage against dark or light backgrounds */}
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-red-500/35 blur-md opacity-85 transition-opacity duration-300 pointer-events-none" />
          
          {/* High-contrast metallic outer ring */}
          <div className="absolute -inset-1 rounded-full border border-white/25 bg-gradient-to-b from-white/15 to-transparent backdrop-blur-sm pointer-events-none" />
          
          {/* Precision tactical radar tick rings */}
          <div className="absolute -inset-2 rounded-full border border-dashed border-cyan-400/30 pointer-events-none animate-[spin_60s_linear_infinite]" />
        </>
      )}

      {/* Main Circular Badge */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-full shadow-2xl relative z-10 overflow-hidden"
        style={{
          boxShadow: '0 0 35px rgba(6, 182, 212, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.08)',
        }}
      >
        <defs>
          {/* Deep Navy/Black Background with subtle gradient */}
          <radialGradient id="aerisBadgeBg" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#121829" />
            <stop offset="70%" stopColor="#090d18" />
            <stop offset="100%" stopColor="#04060c" />
          </radialGradient>

          {/* Rescue Plus Gradient */}
          <linearGradient id="rescueCrossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4D36" />
            <stop offset="100%" stopColor="#E62E1B" />
          </linearGradient>

          {/* White 'A' subtle specular shine */}
          <linearGradient id="whiteLetterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          {/* Perimeter Ring */}
          <linearGradient id="rimBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Circular Base */}
        <circle cx="200" cy="200" r="196" fill="url(#aerisBadgeBg)" stroke="url(#rimBorder)" strokeWidth="4" />

        {/* Tactical subtle inner grid rings */}
        <circle cx="200" cy="200" r="182" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="160" stroke="rgba(56,189,248,0.08)" strokeWidth="1" />

        {/* AERIS Emblem - Stylized Central 'A' */}
        <g id="aeris-symbol">
          {/* Left leg of A */}
          <polygon
            points="200,82 108,225 152,225 200,146 220,182 165,182 178,162 232,162 250,192 200,82"
            fill="none"
          />

          {/* Main Solid Stylized A with horizontal aerodynamic piercing blade */}
          {/* Outer Triangle A */}
          <path
            d="M 200 84 
               L 110 226 
               L 155 226 
               L 178 188 
               L 132 188 
               L 200 84 Z"
            fill="url(#whiteLetterGrad)"
          />
          
          {/* Right leg of A */}
          <path
            d="M 200 84
               L 288 226 
               L 242 226 
               L 218 188 
               L 200 84 Z"
            fill="url(#whiteLetterGrad)"
          />

          {/* Horizontal Supersonic Wing/Blade slicing across the A */}
          <path
            d="M 132 186
               C 185 174, 230 162, 280 142
               C 255 156, 215 170, 168 186 Z"
            fill="#FFFFFF"
          />
          <polygon
            points="145,188 280,142 225,188"
            fill="#FFFFFF"
          />

          {/* Rescue Orange-Red Emergency Medical Cross (+) at top right of the A */}
          <g id="aeris-rescue-cross" filter="drop-shadow(0 0 6px rgba(255, 77, 54, 0.6))">
            {/* Horizontal bar */}
            <rect x="286" y="129" width="34" height="12" rx="2.5" fill="url(#rescueCrossGrad)" />
            {/* Vertical bar */}
            <rect x="297" y="118" width="12" height="34" rx="2.5" fill="url(#rescueCrossGrad)" />
          </g>
        </g>

        {/* AERIS Sleek Futuristic Wordmark */}
        <g id="aeris-text">
          <text
            x="200"
            y="288"
            textAnchor="middle"
            fontFamily="'Chakra Petch', 'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="48"
            letterSpacing="14"
            fill="#FFFFFF"
            style={{ textTransform: 'uppercase' }}
          >
            ΛERIS
          </text>
        </g>

        {/* Tiny rescue telemetry accent */}
        <circle cx="200" cy="328" r="3" fill="#06B6D4" />
        <line x1="160" y1="328" x2="190" y2="328" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="210" y1="328" x2="240" y2="328" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
