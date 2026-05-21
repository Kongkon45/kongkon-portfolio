"use client";

import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiNotion,
  SiPrisma,
  SiRedux,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface RingConfig {
  items: TechItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const innerRing: TechItem[] = [
  { name: "TypeScript",   icon: SiTypescript,  color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux",        icon: SiRedux,       color: "#764ABC" },
  { name: "JavaScript",  icon: SiJavascript,  color: "#F7DF1E" },
];

const middleRing: TechItem[] = [
  { name: "React",   icon: FaReact,     color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: FaNodeJs,    color: "#339933" },
  { name: "Git",     icon: FaGitAlt,    color: "#F05032" },
  { name: "Prisma",  icon: SiPrisma,    color: "#2D3748" },
  { name: "MongoDB", icon: SiMongodb,   color: "#47A248" },
];

const outerRing: TechItem[] = [
  { name: "GitHub",     icon: FaGithub,      color: "#181717" },
  { name: "VS Code",    icon: TbBrandVscode, color: "#007ACC" },
  { name: "Postman",    icon: SiPostman,     color: "#FF6C37" },
  { name: "PostgreSQL", icon: SiPostgresql,  color: "#4169E1" },
  { name: "Docker",     icon: FaDocker,      color: "#2496ED" },
  { name: "OpenAI",     icon: SiOpenai,      color: "#412991" },
  { name: "Notion",     icon: SiNotion,      color: "#000000" },
];

const rings: RingConfig[] = [
  { items: innerRing,  radius: 80,  duration: 14, reverse: true  },
  { items: middleRing, radius: 145, duration: 22, reverse: false },
  { items: outerRing,  radius: 215, duration: 35, reverse: true  },
];

// ─── Mobile ring config (smaller radii) ────────────────────────────────────────

const ringsMobile: RingConfig[] = [
  { items: innerRing,  radius: 55,  duration: 14, reverse: true  },
  { items: middleRing, radius: 105, duration: 22, reverse: false },
  { items: outerRing,  radius: 155, duration: 35, reverse: true  },
];

// ─── TechIcon ──────────────────────────────────────────────────────────────────

const ICON_SIZE = 38;
const MOBILE_ICON_SIZE = 28;

function TechIcon({ item, size = ICON_SIZE }: { item: TechItem; size?: number }) {
  const Icon = item.icon;
  const [hovered, setHovered] = useState(false);

  // Logos that are dark/black — need contrast-safe colours per mode
  const isDarkLogo = ["Next.js", "GitHub", "Notion"].includes(item.name);
  // Logos that are dark/purple — need to be lightened in dark mode
  const isDarkPurple = ["Prisma", "OpenAI"].includes(item.name);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: size,
        height: size,
        marginTop: -(size / 2),
        marginLeft: -(size / 2),
        borderRadius: "50%",
        border: `1px solid ${hovered ? item.color + "90" : item.color + "30"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        transform: hovered ? "scale(1.32)" : "scale(1)",
        boxShadow: hovered
          ? `0 0 18px ${item.color}55, 0 4px 12px ${item.color}30`
          : "0 2px 6px rgba(0,0,0,0.12)",
        zIndex: hovered ? 50 : 1,
      }}
      className="bg-white dark:bg-slate-900"
    >
      <Icon
        className={`
          ${isDarkLogo    ? "text-slate-900 dark:text-white"      : ""}
          ${isDarkPurple  ? "text-slate-700 dark:text-slate-300"  : ""}
        `}
        style={{
          width: size * 0.5,
          height: size * 0.5,
          color: isDarkLogo || isDarkPurple ? undefined : item.color,
          flexShrink: 0,
          display: "block",
        }}
      />

      {/* Tooltip */}
      {hovered && (
        <span className="absolute pointer-events-none whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-semibold shadow-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900"
          style={{
            bottom: size + 6,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 200,
          }}
        >
          {item.name}
        </span>
      )}
    </div>
  );
}

// ─── OrbitingRing ──────────────────────────────────────────────────────────────

interface OrbitingRingProps {
  items: TechItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
  iconSize?: number;
}

function OrbitingRing({ items, radius, duration, reverse = false, iconSize = ICON_SIZE }: OrbitingRingProps) {
  const count = items.length;
  const cwAnim  = `orbit-cw  ${duration}s linear infinite`;
  const ccwAnim = `orbit-ccw ${duration}s linear infinite`;

  return (
    <>
      {items.map((item, i) => {
        const delay = `-${(duration / count) * i}s`;
        return (
          <div
            key={item.name}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 0,
              height: 0,
              animation: reverse ? ccwAnim : cwAnim,
              animationDelay: delay,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: radius,
                animation: reverse ? cwAnim : ccwAnim,
                animationDelay: delay,
              }}
            >
              <TechIcon item={item} size={iconSize} />
            </div>
          </div>
        );
      })}
    </>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function ToolsAndTechnology({ imageSrc }: { imageSrc?: string }) {
  return (
    <section className="site-section relative w-full overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/50">
      {/* CSS keyframes */}
      <style>{`
        @keyframes orbit-cw  { from { transform: rotate(0deg); }   to { transform: rotate(360deg);  } }
        @keyframes orbit-ccw { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
        @keyframes spin-slow { from { transform: rotate(0deg); }   to { transform: rotate(360deg);  } }
      `}</style>

      {/* Dot-grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40
          bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px]
          dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]"
      />

      {/* Ambient glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px]
          rounded-full blur-3xl
          bg-gradient-to-tr from-orange-500/10 to-violet-500/10
          dark:from-orange-500/15 dark:to-violet-500/15"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-6 md:mb-10 text-center">
          <h2 className="site-heading">
            Tools & <span className="text-orange-500">Technology</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A visual overview of the technologies and tools I work with daily.
          </p>
        </div>

        {/* ── Orbit scene ────────────────────────────────────────────────────── */}

        {/* MOBILE: smaller radii */}
        <div className="relative flex sm:hidden items-center justify-center"
          style={{ height: 370 }}>

          {/* Orbit track rings */}
          {ringsMobile.map((ring, i) => (
            <div
              key={i}
              aria-hidden
              className="absolute rounded-full border border-slate-200 dark:border-slate-700/50 pointer-events-none"
              style={{
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width:  ring.radius * 2,
                height: ring.radius * 2,
              }}
            />
          ))}

          {/* Center core */}
          <div
            className="absolute z-20 flex items-center justify-center rounded-full
              bg-gradient-to-br from-orange-500 to-violet-600
              border border-white/20 dark:border-slate-700/40
              shadow-[0_0_30px_rgba(255,118,57,0.3),0_0_60px_rgba(138,99,229,0.25)]
              cursor-pointer transition-transform duration-300 hover:scale-110"
            style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:58, height:58 }}
          >
            {imageSrc ? (
              <img src={imageSrc} alt="Core" className="w-11 h-11 rounded-full object-cover" />
            ) : (
              <FaReact style={{ width: 30, height: 30, color: "#61DAFB", animation: "spin-slow 12s linear infinite" }} />
            )}
          </div>

          {/* Orbit pivot */}
          <div className="absolute" style={{ top:"50%", left:"50%", width:0, height:0 }}>
            {ringsMobile.map((ring, ri) => (
              <OrbitingRing key={ri} {...ring} iconSize={MOBILE_ICON_SIZE} />
            ))}
          </div>
        </div>

        {/* TABLET + DESKTOP: larger radii */}
        <div className="relative hidden sm:flex items-center justify-center"
          style={{ height: 520 }}>

          {/* Orbit track rings */}
          {rings.map((ring, i) => (
            <div
              key={i}
              aria-hidden
              className="absolute rounded-full border border-slate-200 dark:border-slate-700/50 pointer-events-none"
              style={{
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width:  ring.radius * 2,
                height: ring.radius * 2,
              }}
            />
          ))}

          {/* Center core */}
          <div
            className="absolute z-20 flex items-center justify-center rounded-full
              bg-gradient-to-br from-orange-500 to-violet-600
              border border-white/20 dark:border-slate-700/40
              shadow-[0_0_30px_rgba(255,118,57,0.3),0_0_60px_rgba(138,99,229,0.25)]
              cursor-pointer transition-transform duration-300 hover:scale-110"
            style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:76, height:76 }}
          >
            {imageSrc ? (
              <img src={imageSrc} alt="Core" className="w-14 h-14 rounded-full object-cover" />
            ) : (
              <FaReact style={{ width: 40, height: 40, color: "#61DAFB", animation: "spin-slow 12s linear infinite" }} />
            )}
          </div>

          {/* Orbit pivot */}
          <div className="absolute" style={{ top:"50%", left:"50%", width:0, height:0 }}>
            {rings.map((ring, ri) => (
              <OrbitingRing key={ri} {...ring} iconSize={ICON_SIZE} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsAndTechnology;