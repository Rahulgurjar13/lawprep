import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";

const trustBadges = [
  { icon: "⭐", text: "4.9 Rated" },
  { icon: "🎯", text: "1600+ Selections" },
  { icon: "👨‍🎓", text: "150K+ Students" },
  { icon: "🏆", text: "6X AIR-1 Winners" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-primary text-xs md:text-sm font-semibold px-4 py-1.5 font-body"
            >
              🏆 India's #1 3-Year LLB Coaching | Delhi NCR
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-gray-900"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              Best 3-Year LLB Coaching in Delhi NCR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-xl"
            >
              Planning to pursue a 3-Year LLB degree from top law colleges like NLS Bangalore,
              Campus Law Centre Delhi, or Symbiosis Pune? Start your preparation with Law Prep
              Tutorial — experienced faculty, structured curriculum, and guaranteed results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                onClick={() => {
                  const el = document.getElementById("hero-form");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-primary text-white rounded-none h-11 px-6 text-sm font-bold hover:bg-primary/90 shadow-none"
              >
                📅 Book Free Counselling
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none h-11 px-6 text-sm border-gray-300 text-gray-700 hover:border-primary hover:text-primary font-semibold shadow-none"
              >
                <a href="tel:+919289485506" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91-9289485506
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              {trustBadges.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-1.5 text-sm font-body font-semibold text-gray-700"
                >
                  <span>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Live urgency */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-xs font-body text-gray-500"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              47 students viewing this page right now
            </motion.div>
          </div>

          {/* RIGHT — Form (all devices) */}
          <div id="hero-form" className="w-full lg:sticky lg:top-24 mt-8 lg:mt-0">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Mobile form CTA - Floating */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 px-4 pb-2 pointer-events-none">
        <Button
          onClick={() => {
            const el = document.getElementById("hero-form");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="w-full h-11 rounded-none bg-primary text-white text-sm font-bold shadow-none pointer-events-auto shadow-md"
        >
          📝 Get Free Counselling
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
