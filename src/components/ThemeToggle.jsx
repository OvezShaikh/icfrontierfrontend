import { PiSunDuotone, PiMoonDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative w-14 h-7 rounded-full transition-all duration-300
        ${isDark ? "bg-slate-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" : "bg-gray-200 shadow-inner"}
      `}
    >
      {/* Glow effect */}
      <span
        className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300
          ${isDark ? "opacity-100" : "opacity-0"}
          bg-[radial-gradient(circle_at_75%_50%,rgba(56,189,248,0.15),transparent_60%)]
        `}
      />

      {/* Knob */}
      <motion.span
        className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-slate-950 shadow-md`}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ x: isDark ? 28 : 0 }}
      />

      {/* Icons */}
      <span className="absolute left-1.5 top-1.5 text-gray-500 dark:text-gray-400">
        <PiSunDuotone size={14} />
      </span>
      <span className="absolute right-1.5 top-1.5 text-gray-500 dark:text-gray-400">
        <PiMoonDuotone size={14} />
      </span>
    </button>
  );
}
