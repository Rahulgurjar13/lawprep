import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Exams Covered", href: "#exams" },
  { label: "Toppers", href: "#testimonials" },
  { label: "Scholarship", href: "#scholarship" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-[70px]">
        {/* Logo — Yellow box style */}
        <a href="/" className="flex items-center shrink-0" title="Law Prep Tutorial — Home" aria-label="Law Prep Tutorial Home">
          <img
            src="/images/Picture1.png"
            alt="Law Prep Tutorial — Best 3-Year LLB Coaching in Delhi NCR"
            title="Law Prep Tutorial"
            className="h-20 md:h-24 w-auto object-contain"
            fetchPriority="high"
            width="180"
            height="96"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-body text-[14px] font-medium text-gray-700 hover:text-primary px-4 py-2 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollTo("#hero-form")}
            className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90 rounded-none text-sm px-5 h-9 font-bold shadow-none"
          >
            Book Free Demo
          </Button>
          <button
            className="lg:hidden p-2 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-0.5">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left font-body text-sm font-medium py-2.5 px-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="pt-2">
            <Button
              onClick={() => scrollTo("#hero-form")}
              className="w-full bg-primary text-white rounded-none font-bold shadow-none"
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
