import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Login from "./components/Blog/Login";
import Blog from "./components/Blog/Blog";
import ProtectedRoute from "./components/Blog/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import PublicBlog from "./components/Blog/PublicBlog";
import SingleBlogPost from "./components/Blog/SingleBlogPost";
import Philosophy from "./pages/Philosophy";
import ThankYou from "./pages/ThankYou";


export default function App() {
  const [theme, setTheme] = useState("light");

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Update DOM and localStorage on theme change
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen w-full flex flex-col overflow-x-hidden transition-colors duration-500 bg-white dark:bg-slate-900">
          <Navbar theme={theme} setTheme={setTheme} />

          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<PublicBlog />} />
              <Route path="/blog/:id" element={<SingleBlogPost />} />
              <Route
                path="/admin/blog"
                element={
                  <ProtectedRoute>
                    <Blog />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
