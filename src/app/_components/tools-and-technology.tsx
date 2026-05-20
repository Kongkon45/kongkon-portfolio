"use client";

import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaDocker 
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
  SiRedux
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const innerRing: TechItem[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
];

const middleRing: TechItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const outerRing: TechItem[] = [
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "OpenAI", icon: SiOpenai, color: "#412991" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
];

const TechIcon = ({ item }: { item: TechItem }) => {
  const Icon = item.icon;
  
  // Custom dark mode coloring logic for monochrome brand logos
  const isMonochrome = item.name === "Next.js" || item.name === "GitHub" || item.name === "Notion";
  
  return (
    <div 
      className="group relative flex items-center justify-center p-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-white/90 dark:bg-slate-900/90 shadow-md transition-all duration-300 hover:scale-125 cursor-pointer"
      style={{ 
        borderColor: `${item.color}25`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 20px -4px ${item.color}40, 0 6px 10px -4px ${item.color}30, inset 0 0 10px ${item.color}15`;
        e.currentTarget.style.borderColor = `${item.color}60`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`;
        e.currentTarget.style.borderColor = `${item.color}25`;
      }}
    >
      <Icon 
        className={`w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12 ${
          isMonochrome ? "text-slate-900 dark:text-white" : ""
        }`} 
        style={isMonochrome ? undefined : { color: item.color }} 
      />
      {/* Tooltip */}
      <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none">
        {item.name}
      </span>
    </div>
  );
};

export function ToolsAndTechnology() {
  return (
    <section className="py-10 md:py-16 relative w-full overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100/80 dark:border-slate-900/50">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-50 pointer-events-none" />
      
      {/* Decorative gradient glowing spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-[#FF7639]/10 to-[#8A63E5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex h-[520px] w-full flex-col items-center justify-center overflow-hidden z-10">
        {/* Central Core */}
        <div className="absolute z-20 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7639] to-[#8A63E5] shadow-[0_0_30px_rgba(255,118,57,0.35)] dark:shadow-[0_0_40px_rgba(138,99,229,0.45)] border border-white/20 dark:border-slate-800/30 cursor-pointer hover:scale-110 transition-all duration-300 group">
          <FaReact className="w-8 h-8 md:w-10 md:h-10 text-white animate-[spin_15s_linear_infinite]" />
        </div>

        {/* Inner Circle (radius: 85, speed: 1.2, reverse) */}
        <OrbitingCircles iconSize={40} radius={85} speed={1.2} reverse>
          {innerRing.map((item) => (
            <TechIcon key={item.name} item={item} />
          ))}
        </OrbitingCircles>

        {/* Middle Circle (radius: 155, speed: 0.8) */}
        <OrbitingCircles iconSize={40} radius={155} speed={0.8}>
          {middleRing.map((item) => (
            <TechIcon key={item.name} item={item} />
          ))}
        </OrbitingCircles>

        {/* Outer Circle (radius: 225, speed: 0.5, reverse) */}
        <OrbitingCircles iconSize={40} radius={225} speed={0.5} reverse>
          {outerRing.map((item) => (
            <TechIcon key={item.name} item={item} />
          ))}
        </OrbitingCircles>
      </div>
    </section>
  );
}
