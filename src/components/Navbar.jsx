import { Link, useLocation } from "react-router-dom";
import { images } from "../constants/images";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between lg:h-20 lg:px-0">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={theme === "dark" ? images.logo : images.whitelogo} 
              alt="IC Frontier Capital" 
              className="h-14 w-auto sm:h-16 lg:h-20 transition-transform hover:scale-105" 
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium text-base xl:text-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                    location.pathname === item.path
                      ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 mt-2">
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
