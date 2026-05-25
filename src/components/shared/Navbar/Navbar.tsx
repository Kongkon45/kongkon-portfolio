"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedThemeToggler from "@/components/ui/animated-theme-toggler";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "#about" },
  { name: "My Skills", href: "#my-skills" },
  { name: "Case Study's", href: "#case-study" },
  { name: "Live Project", href: "#project" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? (storedTheme as "light" | "dark")
        : prefersDark
          ? "dark"
          : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;

    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      setActiveHref(hash || "/");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      let currentSection = "/";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.2) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveHref(currentSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
  };

  const smoothScroll = useCallback((href: string) => {
    if (typeof window === "undefined") return;

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
      return;
    }

    window.location.href = href;
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="sticky top-0 z-50 w-full"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="w-full bg-white/95 dark:bg-slate-950/95 relative backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-950 dark:text-slate-100 shadow-sm">
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
              w-[200px] h-[200px] md:w-[600px] md:h-[100px]
              rounded-full blur-2xl
              bg-gradient-to-tr from-orange-500/10 to-violet-500/10
              dark:from-orange-500/15 dark:to-violet-500/15"
          />
        </div>
        
        {/* Content container */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between relative z-10">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="pl-1"
        >
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="hero image"
              width={100}
              height={100}
              className="w-[70px] h-11 md:h-16 object-contain relative z-10"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center gap-8 text-slate-950 dark:text-white font-medium relative z-10"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  smoothScroll(item.href);
                  setActiveHref(item.href);
                }}
                className={`relative group text-sm font-semibold transition-colors duration-300 ${
                  activeHref === item.href
                    ? "text-primary"
                    : "text-slate-950 dark:text-white hover:text-primary"
                }`}
              >
                {item.name}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    activeHref === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  whileHover={{ width: activeHref === item.href ? "100%" : "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex items-center gap-4 relative z-10"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
            <Link href="#contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="h-10 hidden md:block bg-purple-500 hover:bg-purple-600 text-white rounded-full px-7 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Hire Me
              </Button>
            </motion.div>
          </Link>
          {mounted && <AnimatedThemeToggler theme={theme} onToggle={toggleTheme} />}

        

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900 dark:text-slate-100 bg-white/10 dark:bg-slate-800/80 p-2 rounded-full hover:bg-white/20 dark:hover:bg-slate-700/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            className="absolute top-[70px] left-3 right-3 bg-white/95 dark:bg-slate-900/95 rounded-2xl p-4 flex flex-col gap-4 text-slate-900 dark:text-slate-100 md:hidden shadow-lg backdrop-blur-sm border border-slate-200/70 dark:border-slate-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    smoothScroll(item.href);
                    setActiveHref(item.href);
                    setOpen(false);
                  }}
                  className={`text-sm font-semibold pb-3 border-b ${
                    activeHref === item.href
                      ? "border-purple-500 text-purple-700 dark:text-purple-300"
                      : "border-slate-200/70 dark:border-slate-700 text-slate-950 dark:text-slate-100 hover:text-purple-700 dark:hover:text-purple-200"
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="#contact">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full mt-2 font-semibold shadow-lg">
                  Hire Me
                </Button>
              </Link>
            </motion.div>

          </motion.div>
        )}
        </div>
      </div>
    </motion.div>
  );
}
