"use client";

import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Project type definition
interface ProjectImage {
  url: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image: ProjectImage[];
  githubLink: string;
  liveLink: string;
}

interface ProjectsResponse {
  data: Project[];
}

interface ProjectsHookReturn {
  data: ProjectsResponse | null;
  isLoading: boolean;
  isError: boolean;
}

// Fallback projects data (used if no hook is available)
const projectsFallback: Project[] = [
  {
    _id: "1",
    title: "Analytic Soccer",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    githubLink: "https://github.com/Kongkon-79/claude-website.git",
    liveLink: "https://analyticsoccer.com",
  },
   {
    _id: "2",
    title: "Vehicle Rental",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    githubLink: "https://github.com/Kongkon-79/kashhussain-website.git",
    liveLink: "https://kashhussain-website.vercel.app",
  },
   {
    _id: "3",
    title: "Yolo Heat",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    githubLink: "https://github.com/Kongkon-79/arronwh-website.git",
    liveLink: "https://arronwh-website.vercel.app",
  },
   {
    _id: "4",
    title: "Perrys Town Orthodontics",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    githubLink: "https://github.com/Kongkon-79/dr_jameshman_frontend.git",
    liveLink: "https://perrystownorthodontics.com",
  },
   {
    _id: "5",
    title: "Mireyags Website",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    githubLink: "https://github.com/Kongkon-79/mireyags-website.git",
    liveLink: "https://mireyags-website.vercel.app",
  },
];

// Simple fallback hook if your real hook isn't present in the workspace.
function useProjectFallback(): ProjectsHookReturn {
  return { data: { data: projectsFallback }, isLoading: false, isError: false };
}

const ProjectCard = ({ project, index, progress, totalProjects }: { project: Project; index: number; progress: MotionValue<number>; totalProjects: number }): JSX.Element => {

  const start = index * (1 / totalProjects);
  const targetScale = 1 - (totalProjects - index) * 0.04;
  
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div id="project" className="h-[92vh]  w-full flex items-center  justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${index *20}px)`,
        }}
        className="relative w-full container origin-top px-4"
      >
        <Card className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-fit md:h-[340px] px-6 shadow-lg dark:shadow-2xl ">
          {/* Image */}
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-[1.3rem] h-[150px] md:min-h-[300px] bg-slate-50 dark:bg-slate-800">
            <Link href={`/project/${project._id}`}>
              <Image
                src={project.image?.[0]?.url || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-1 md:p-6 lg:p-8 xl:p-10 text-slate-900 dark:text-slate-100 ">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300 line-clamp-2 md:line-clamp-4 text-sm md:text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies?.slice(0, 4).map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 border border-slate-300 dark:border-white/10 rounded-lg">
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-1 md:pt-4">
                <Button asChild variant="outline" className="flex-1 bg-transparent border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl h-10 md:h-12">
                  <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 border-none rounded-xl h-10 md:h-12 shadow-lg shadow-blue-500/10">
                  <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default function ProjectsSection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError }: ProjectsHookReturn = useProjectFallback();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const projects: Project[] = data?.data || [];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="site-section relative bg-white dark:bg-slate-950 w-full"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dot-grid pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40
            bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px]
            dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]"
        />

        {/* Ambient glow blob */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px]
            rounded-full blur-3xl
            bg-gradient-to-tr from-orange-500/10 to-violet-500/10
            dark:from-orange-500/15 dark:to-violet-500/15"
        />
      </div>
        {/* Header */}
        <div className="text-center pt-2">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="site-heading text-slate-950 dark:text-white"
          >
            Featured <span className="text-[#FF7639]">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#8A63E5]/30 mx-auto mt-4 rounded-full relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[#8A63E5] w-1/2" />
          </motion.div>
        </div>

      <div className="relative w-full ">
        {isLoading ? (
          <div className="h-screen flex items-center justify-center px-8">
            <div className="h-[480px] w-full max-w-5xl bg-white/5 rounded-[2.5rem] animate-pulse" />
          </div>
        ) : isError ? (
          <div className="h-screen flex items-center justify-center text-red-400">
            Unable to load projects.
          </div>
        ) : (
          <div className="flex flex-col items-center ">
            {projects?.map((project: Project, index: number) => (
              <ProjectCard
                key={project._id || index}
                index={index}
                project={project}
                progress={scrollYProgress}
                totalProjects={projects.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
