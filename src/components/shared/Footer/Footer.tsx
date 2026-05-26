"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuDownload, LuFileCode2, LuMail, LuMapPin } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "kongkon4545@gmail.com";
  const whatsappNumber = "8801778934545";

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#my-skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <FaFacebookF />,
      color: "bg-[#1877F2]",
      shadow: "shadow-blue-100",
      url: "https://www.facebook.com/kongkon.jowarder/",
      label: "Facebook",
    },
    {
      icon: <IoLogoWhatsapp />,
      color: "bg-[#25D366]",
      shadow: "shadow-green-100",
      url: `https://wa.me/${whatsappNumber}`,
      label: "WhatsApp",
    },
    {
      icon: <FaLinkedinIn />,
      color: "bg-[#0A66C2]",
      shadow: "shadow-blue-100",
      url: "https://www.linkedin.com/in/kongkon-jowarder-50a12725b",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      color: "bg-[#181717]",
      shadow: "shadow-slate-300",
      url: "https://github.com/Kongkon-79",
      label: "Github",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40
            bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px]
            dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px]
            rounded-full blur-3xl
            bg-gradient-to-tr from-orange-500/10 to-violet-500/10
            dark:from-orange-500/15 dark:to-violet-500/15"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-500 mb-4">
              Available for Freelance &amp; Full-Time
            </span>

            <h2 className="site-heading tracking-tight text-slate-900 dark:text-white">
              Let&apos;s Build Something
            </h2>
            <h3 className="site-heading text-orange-500 mt-2">Extraordinary</h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-slate-500 dark:text-slate-400 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Have a project in mind? Let&apos;s talk about how a solid full-stack solution
            can bring your idea to life from API design to pixel-perfect UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="#contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-12 py-5 md:py-6 rounded-xl shadow-lg shadow-orange-100 w-[240px]">
                  Hire Me
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a href={`mailto:${email}?subject=CV%20Request`} aria-label="Request CV by email">
                <Button
                  variant="outline"
                  className="border-violet-200 text-violet-600 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-white/10 font-bold text-base md:text-lg px-10 py-5 md:py-6 rounded-xl border-2 w-[240px] flex items-center justify-center gap-2"
                >
                  Get My CV <LuDownload className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-violet-500 flex items-center justify-center">
                <LuFileCode2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                Kongkon<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Full Stack Developer specialising in the MERN stack. Turning ideas into
              fast, scalable web apps.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
              Quick Links
            </h5>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
              Contact
            </h5>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <LuMail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <LuMapPin className="w-4 h-4 text-violet-500 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            <div className="flex justify-center md:justify-start gap-3 pt-1">
              {socials.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className={`w-9 h-9 rounded-full ${item.color} text-white flex items-center justify-center shadow-md ${item.shadow} border-2 border-white dark:border-slate-800 transition-all text-sm`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-500">
          <span>© {currentYear} Kongkon Jowarder. All rights reserved.</span>
          <span>
            Built with <span className="text-orange-500 font-semibold">Next.js</span> &amp;{" "}
            <span className="text-violet-500 font-semibold">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
