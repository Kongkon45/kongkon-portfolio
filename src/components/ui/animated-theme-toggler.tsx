"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type AnimatedThemeTogglerProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export default function AnimatedThemeToggler({
  theme,
  onToggle,
}: AnimatedThemeTogglerProps) {
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full border-2 border-primary transition-colors duration-300 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
        isDark
          ? "bg-slate-800 text-amber-400 hover:bg-slate-700"
          : "bg-white text-slate-700 hover:bg-orange-50"
      }`}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
