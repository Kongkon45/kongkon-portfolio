"use client";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Globe,
  ShieldCheck,
  Layers,
  Cpu,
  TestTube2,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type Skill = {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ElementType;
  accent: "orange" | "purple";
};

const skills: Skill[] = [
  {
    title: "Frontend Development",
    desc: "Building responsive, high-performance UIs with React.js and Next.js. Proficient in state management (Redux Toolkit, Context API), component libraries, and crafting pixel-perfect interfaces from design files.",
    tags: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
    icon: Code2,
    accent: "orange",
  },
  {
    title: "Backend Development",
    desc: "Designing and developing scalable RESTful APIs and server-side applications with Node.js and Express.js. Experienced in middleware, authentication flows, error handling, and production-grade architecture.",
    tags: ["Node.js", "Express.js", "REST API", "JWT"],
    icon: Server,
    accent: "purple",
  },
  {
    title: "Database Design",
    desc: "Modeling and managing data with MongoDB and Mongoose. Skilled in schema design, indexing, aggregation pipelines, and integrating relational databases like PostgreSQL when the project demands it.",
    tags: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
    icon: Database,
    accent: "orange",
  },
  {
    title: "Full Stack Architecture",
    desc: "Architecting end-to-end MERN applications from scratch — covering project structure, API integration, deployment strategy, and performance optimization across the entire stack.",
    tags: ["MERN Stack", "MVC Pattern", "API Design", "Docker"],
    icon: Layers,
    accent: "purple",
  },
  {
    title: "Authentication & Security",
    desc: "Implementing secure authentication systems including JWT, OAuth 2.0, and session-based auth. Knowledgeable in CORS, rate limiting, input sanitization, and protecting APIs against common vulnerabilities.",
    tags: ["JWT", "OAuth 2.0", "bcrypt", "Helmet.js"],
    icon: ShieldCheck,
    accent: "orange",
  },
  {
    title: "API Integration",
    desc: "Integrating third-party services and APIs including payment gateways (Stripe), cloud storage (AWS S3, Cloudinary), email services, and real-time communication via WebSockets and Socket.io.",
    tags: ["Stripe", "Socket.io", "AWS S3", "Cloudinary"],
    icon: Globe,
    accent: "purple",
  },
  {
    title: "Version Control & CI/CD",
    desc: "Managing codebases with Git and GitHub, following branching strategies like Git Flow. Experienced setting up CI/CD pipelines, automating deployments, and collaborating in agile team environments.",
    tags: ["Git", "GitHub Actions", "Vercel", "Railway"],
    icon: GitBranch,
    accent: "orange",
  },
  {
    title: "Performance Optimization",
    desc: "Improving app performance through code splitting, lazy loading, caching strategies, database query optimization, and server-side rendering with Next.js to achieve fast load times and great Core Web Vitals.",
    tags: ["SSR / SSG", "Caching", "Lazy Loading", "Web Vitals"],
    icon: Cpu,
    accent: "purple",
  },
  {
    title: "Testing & Debugging",
    desc: "Writing reliable unit and integration tests with Jest and React Testing Library. Proficient in debugging complex full-stack issues, using tools like Postman for API testing and Chrome DevTools for frontend diagnostics.",
    tags: ["Jest", "React Testing Library", "Postman", "DevTools"],
    icon: TestTube2,
    accent: "orange",
  },
];

const accentConfig = {
  orange: {
    iconBg: "bg-gradient-to-br from-orange-400 to-orange-600",
    border: "border-b-orange-500",
    glow: "group-hover:shadow-orange-100",
    ring: "ring-orange-100",
    tagBg: "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
  },
  purple: {
    iconBg: "bg-gradient-to-br from-violet-400 to-violet-600",
    border: "border-b-violet-500",
    glow: "group-hover:shadow-violet-100",
    ring: "ring-violet-100",
    tagBg: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
  },
};

const MySkillsSection = () => {
  return (
    <section
      id="my-skills"
      className="site-section relative w-full bg-white dark:bg-slate-950 px-6 overflow-hidden"
    >
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

      <div className="mx-auto max-w-6xl relative z-10">

        {/* Heading */}
        <motion.div
          className="mb-10 flex flex-col items-center gap-3 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-orange-500 mb-1">
            3 Plus Years of Professional Experience
          </p>
          <h2 className="site-heading">
            My <span className="text-orange-500 italic">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-violet-500" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const config = accentConfig[skill.accent];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className={`
                    relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900
                    border border-slate-100 dark:border-slate-700 border-b-4 ${config.border}
                    shadow-md hover:shadow-xl ${config.glow}
                    transition-shadow duration-300 p-5 md:p-6
                    overflow-hidden
                  `}
                >
                  {/* Subtle bg decor */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 ${config.iconBg}`} />

                  {/* Icon */}
                  <div
                    className={`
                      inline-flex items-center justify-center
                      w-14 h-14 rounded-2xl mb-5
                      ${config.iconBg}
                      ring-4 ${config.ring}
                      shadow-lg
                    `}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-3">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed flex-1 mb-4">
                    {skill.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${config.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MySkillsSection;






// "use client";
// import { motion, Variants } from "framer-motion";
// import {
//   Lightbulb,
//   PenTool,
//   Layers,
//   Brain,
//   Network,
//   FlaskConical,
// } from "lucide-react";

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const headingVariants: Variants = {
//   hidden: { opacity: 0, y: -20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// type Skill = {
//   title: string;
//   desc: string;
//   icon: React.ElementType;
//   accent: "orange" | "purple";
// };

// const skills: Skill[] = [
//   {
//     title: "Ui / Ux Research",
//     desc: "We test your product with real users to identify pain points. This feedback helps us optimize designs for better user experience.",
//     icon: Lightbulb,
//     accent: "orange",
//   },
//   {
//     title: "MVP Ui Design",
//     desc: "We design functional MVPs focused on core features. We ensure quick validation of your idea with minimal investment.",
//     icon: PenTool,
//     accent: "purple",
//   },
//   {
//     title: "Wireframing & Prototyping",
//     desc: "We create low-fidelity wireframes and high-fidelity prototypes to visualize your ideas and helps refine user interactions and layouts early on.",
//     icon: Layers,
//     accent: "orange",
//   },
//   {
//     title: "Problem Solving",
//     desc: "I identify real user challenges and turn them into practical, user friendly digital solutions through research, strategy, and thoughtful design decisions.",
//     icon: Brain,
//     accent: "purple",
//   },
//   {
//     title: "Information Architecture",
//     desc: "I organize content and structure information in a clear and logical way so users can navigate products easily and find what they need without confusion.",
//     icon: Network,
//     accent: "orange",
//   },
//   {
//     title: "Usability Testing",
//     desc: "I test designs with real users to identify pain points, improve functionality, and ensure the final product delivers a smooth and effective experience.",
//     icon: FlaskConical,
//     accent: "purple",
//   },
// ];

// const accentConfig = {
//   orange: {
//     iconBg: "bg-gradient-to-br from-orange-400 to-orange-600",
//     border: "border-b-orange-500",
//     glow: "group-hover:shadow-orange-100",
//     ring: "ring-orange-100",
//   },
//   purple: {
//     iconBg: "bg-gradient-to-br from-violet-400 to-violet-600",
//     border: "border-b-violet-500",
//     glow: "group-hover:shadow-violet-100",
//     ring: "ring-violet-100",
//   },
// };

// const MySkillsSection = () => {
//   return (
//     <section
//       id="my-skills"
//       className="site-section relative w-full bg-white dark:bg-slate-950 px-6 overflow-hidden"
//     >
//       {/* Dot-grid pattern */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-40
//           bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px]
//           dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]"
//       />

//       {/* Ambient glow blob */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//           w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px]
//           rounded-full blur-3xl
//           bg-gradient-to-tr from-orange-500/10 to-violet-500/10
//           dark:from-orange-500/15 dark:to-violet-500/15"
//       />

//       <div className="mx-auto max-w-6xl relative z-10">

//         {/* Heading */}
//         <motion.div
//           className="mb-10 flex flex-col items-center gap-3 text-center"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={headingVariants}
//         >
//           <h2 className="site-heading">
//             My <span className="text-orange-500 italic">Skills</span>
//           </h2>
//           <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-violet-500" />
//         </motion.div>

//         {/* Cards Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           variants={containerVariants}
//         >
//           {skills.map((skill, i) => {
//             const Icon = skill.icon;
//             const config = accentConfig[skill.accent];
//             return (
//               <motion.div
//                 key={i}
//                 variants={cardVariants}
//                 whileHover={{ y: -6, transition: { duration: 0.3 } }}
//                 className="group"
//               >
//                 <div
//                   className={`
//                     relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900
//                     border border-slate-100 dark:border-slate-700 border-b-4 ${config.border}
//                     shadow-md hover:shadow-xl ${config.glow}
//                     transition-shadow duration-300 p-5 md:p-6 lg:p-7
//                     overflow-hidden
//                   `}
//                 >
//                   {/* Subtle bg decor */}
//                   <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 ${config.iconBg}`} />

//                   {/* Icon */}
//                   <div
//                     className={`
//                       inline-flex items-center justify-center
//                       w-14 h-14 rounded-2xl mb-6
//                       ${config.iconBg}
//                       ring-4 ${config.ring}
//                       shadow-lg
//                     `}
//                   >
//                     <Icon className="w-6 h-6 text-white" strokeWidth={2} />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3">
//                     {skill.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed flex-1">
//                     {skill.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MySkillsSection;