"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-section relative w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
      <div className="site-container container mx-auto px-4 max-w-3xl text-center text-slate-900 dark:text-slate-100 relative z-10">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="site-heading tracking-tight">
            Let&apos;s Create Something
          </h2>
          <h3 className="site-heading text-[#FF7639] mt-3">
            Extraordinary
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Have a project in mind? Let&apos;s discuss how thoughtful design can transform
          your vision into a product users love.
        </motion.p>

        {/* Connect With Me */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <h4 className="text-lg font-bold text-slate-950 dark:text-slate-100">
            Connect With <span className="text-[#FF7639]">Me</span>
          </h4>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            {[
              { icon: <FaFacebookF />, color: "bg-[#1877F2]", shadow: "shadow-blue-100", url: "https://www.facebook.com/kongkon.jowarder/", label: "Facebook" },
              { icon: <IoLogoWhatsapp />, color: "bg-[#25D366]", shadow: "shadow-green-100", url: "#", label: "WhatsApp" },
              { icon: <FaLinkedinIn />, color: "bg-[#0A66C2]", shadow: "shadow-blue-100", url: "www.linkedin.com/in/kongkon-jowarder-50a12725b", label: "LinkedIn" },
              { icon: <FaGithub />, color: "bg-[#181717]", shadow: "shadow-slate-300", url: "https://github.com/Kongkon-79", label: "Github" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg ${item.shadow} border-2 border-white transition-all`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="#contact">
            <Button className="bg-[#FF7639] hover:bg-[#E6652D] text-white font-bold text-base md:text-lg px-12 py-5 md:py-6 rounded-xl shadow-lg shadow-orange-100 w-[260px]">
              Hire Me
            </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="border-[#D4C4FF] text-[#8A63E5] hover:bg-[#F5F2FF] dark:border-slate-700 dark:text-slate-100 dark:hover:bg-white/10 font-bold text-base md:text-lg px-10 py-5 md:py-6 rounded-xl border-2 w-[260px] flex items-center justify-center gap-2"
            >
              Download Resume <LuDownload className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;