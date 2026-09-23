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

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  role?: string;
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
      "A football analytics platform featuring dynamic player profiles, performance statistics, subscription payments, and a role-protected admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "NextAuth"],
    role: "Frontend Developer",
    image: "/assets/images/projects/analytic_soccer.jpeg",
    githubLink: "https://github.com/Kongkon-79/claude-website.git",
    liveLink: "https://analyticsoccer.com",
  },
   {
    _id: "2",
    title: "SideQuote — Local Service Marketplace",
    description:
      "A multi-role local services marketplace that helps customers discover trusted professionals, request quotes, and communicate directly. Includes dedicated business and admin dashboards for service management, moderation, and analytics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "NextAuth"],
    role: "Frontend Developer",
    image: "/assets/images/projects/side_quote.jpeg",
    githubLink: "https://github.com/Kongkon-79/jolynn_frontend.git",
    liveLink: "https://sidequote.cloud",
  },
   {
    _id: "3",
    title: "GolfKO — Golf Tournament Platform",
    description:
      "A multi-role golf tournament platform for creating paid events, managing participants, generating draws, scheduling rounds, and tracking results through player, organizer, and admin dashboards.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "NextAuth"],
    role: "Frontend Developer",
    image: "/assets/images/projects/golfko.jpeg",
    githubLink: "https://github.com/Kongkon-79/matchplaygolf_frontend.git",
    liveLink: "https://golfko.co.uk",
  },

  // {
  //   _id: "4",
  //   title: "Humidor411",
  //   description:
  //     "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  //   image: "/assets/images/Humidor411.jpg",
  //   githubLink: "https://github.com/Kongkon-79/beloose-website.git",
  //   liveLink: "https://humidor411.com",
  // }, 
   {
    _id: "4",
    title: "AI Car Check — UK Vehicle History Platform",
    description:
      "A UK vehicle-history platform providing MOT, tax, mileage, safety, and ownership insights, with premium reports, Stripe payments, AI assistance, and a complete admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "NextAuth"],
    role: "Frontend Developer",
    image: "/assets/images/projects/ai_car_check.jpeg",
    githubLink: "https://github.com/Kongkon-79/kashhussain-website.git",
    liveLink: "https://carcheckai.co.uk",
  },
   {
    _id: "5",
    title: "Perrystown Orthodontics — Healthcare Booking Platform",
    description:
      "A responsive orthodontic care platform featuring consultation booking, dentist referrals, dynamic treatment content, and a comprehensive CMS-style admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "NextAuth"],
    role: "Frontend Developer",
    image: "/assets/images/projects/Perrys.jpeg",
    githubLink: "https://github.com/Kongkon-79/dr_jameshman_frontend.git",
    liveLink: "https://perrystownorthodontics.com",
  },
   {
    _id: "6",
    title: "Axiom Wellness",
    description:
      "A responsive research-products e-commerce platform featuring advanced product discovery, persistent cart management, Stripe and Cash on Delivery checkout, customer order tracking, and a data-driven admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "NextAuth"],
    role: "Frontend Developer",
    image: "/assets/images/projects/axiom-wellness.png",
    githubLink: "https://github.com/Kongkon-79/mireyags-website.git",
    liveLink: "https://axiomwellness.shop",
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
    <div className="w-full flex items-center justify-center py-2 md:py-3 last:pb-10 md:last:pb-14 sticky top-16 md:top-20">
      <motion.div
        style={{
          scale,
          top: `calc(4vh + ${index * 14}px)`,
        }}
        className="site-container relative origin-top"
      >
        <Card className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-fit px-4 md:px-6 shadow-md dark:shadow-md">
          {/* Image */}
          <div className="relative w-full md:w-2/5 aspect-video shrink-0 self-start overflow-hidden rounded-[1.3rem] bg-slate-50 dark:bg-slate-800">
            <Link target="_blank" href={project?.liveLink} aria-label={`Open ${project.title} details`}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="flex w-full flex-col md:h-full md:w-3/5 md:justify-center p-2 md:px-6 md:py-4 md:pl-2 lg:px-8 lg:py-5 lg:pl-3 xl:px-10 xl:py-6 xl:pl-4 text-slate-900 dark:text-slate-100">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold mb-4  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300 line-clamp-3 text-sm md:text-base leading-relaxed">
                {project.description}
              </CardDescription>
              {/* <p className="pb-2"><strong className="">Role : </strong>{project?.role}</p> */}
            </CardHeader>

            <CardContent className="p-0 mt-6 md:mt-0 space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.technologies?.slice(0, 6).map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 border border-slate-300 dark:border-white/10 rounded-lg">
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-1 md:pt-4">
                <Button asChild variant="outline" className="flex-1 bg-transparent border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl h-10 md:h-12">
                  <a
                    href={project.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub className="mr-2 h-4 w-4" /> Source Code
                  </a>
                </Button>
                <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 border-none rounded-xl h-10 md:h-12 shadow-sm shadow-blue-500/10">
                  <a
                    href={project.liveLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
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
      <div className="site-container relative z-10">
        {/* Header */}
        <div className="text-center pt-2 pb-3 md:pb-4">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="site-heading text-slate-950 dark:text-white"
          >
            Featured <span className="text-[#FF7639]">Projects</span>
          </motion.h2>
          <div className="site-heading-divider mx-auto" />
        </div>

      </div>

      <div className="relative w-full">
        {isLoading ? (
          <div className="h-screen flex items-center justify-center px-8">
            <div className="h-[480px] w-full max-w-5xl bg-white/5 rounded-[2.5rem] animate-pulse" />
          </div>
        ) : isError ? (
          <div className="h-screen flex items-center justify-center text-red-400">
            Unable to load projects.
          </div>
        ) : (
          <div id="project" className="flex flex-col items-center -mt-2 md:-mt-4 pb-3 md:pb-4">
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
