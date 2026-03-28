import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, MapPin, Mail, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-redirect to home after 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">

      {/* Top red strip — matches site TopBar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-2">
          <span className="text-white text-sm font-semibold">🎯 Admissions Open for 2026 & 2027 Batches — Limited Seats</span>
        </div>
      </div>

      {/* Navbar-style header with logo */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-[70px]">
          <a href="/" className="flex items-center shrink-0" title="Law Prep Tutorial — Home">
            <img
              src="/images/Picture1.png"
              alt="Law Prep Tutorial — Best 3-Year LLB Coaching in Delhi NCR"
              className="h-20 md:h-24 w-auto object-contain"
              width="180"
              height="96"
            />
          </a>
          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 rounded-none text-sm px-5 h-9 font-bold shadow-none"
          >
            <a href="tel:+918750581505" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">

          {/* Success icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-green-50 border-2 border-green-200 w-20 h-20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" strokeWidth={2.5} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-foreground mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Thank You for Registering!
          </h1>

          <p className="font-body text-gray-600 text-base md:text-lg mb-2 max-w-lg mx-auto leading-relaxed">
            Your enquiry has been received successfully. Our counsellor will contact you shortly to guide you through your <strong>3-Year LLB preparation</strong> journey.
          </p>

          <p className="font-body text-sm text-gray-400 mb-10">
            You will be redirected to the homepage in <strong className="text-primary">{countdown}s</strong>
          </p>

          {/* What happens next */}
          <div className="bg-white border border-gray-100 shadow-sm mb-10">
            <div className="bg-primary px-6 py-3">
              <h2 className="text-white font-heading text-base font-bold tracking-tight" style={{ fontSize: "1rem" }}>
                What Happens Next?
              </h2>
            </div>
            <div className="px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-10 h-10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Step 1</p>
                    <p className="text-xs text-gray-500 mt-0.5">Our counsellor will call you within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-10 h-10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Step 2</p>
                    <p className="text-xs text-gray-500 mt-0.5">Schedule your free demo class at any center</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-10 h-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Step 3</p>
                    <p className="text-xs text-gray-500 mt-0.5">Begin your journey to top law colleges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a
              href="tel:+918750581505"
              className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-4 hover:border-primary/30 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Call Us</p>
                <p className="text-sm text-foreground font-bold">+91-8750581505</p>
              </div>
            </a>
            <a
              href="mailto:info@lawpreptutorial.com"
              className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-4 hover:border-primary/30 transition-colors"
            >
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</p>
                <p className="text-sm text-foreground font-bold">info@lawpreptutorial.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-4">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Centers</p>
                <p className="text-sm text-foreground font-bold">Delhi NCR — 4 Centers</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 rounded-none h-12 px-8 text-sm font-bold shadow-none"
          >
            <Link to="/" className="inline-flex items-center gap-2">
              Explore Our Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-center sm:text-left">
            © 2025 Law Prep Tutorial. All rights reserved. | India's #1 3-Year LLB Coaching
          </p>
          <a
            href="tel:+918750581505"
            className="font-body text-xs text-primary hover:underline flex items-center gap-1"
          >
            <Phone className="w-3 h-3" /> +91-8750581505
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
