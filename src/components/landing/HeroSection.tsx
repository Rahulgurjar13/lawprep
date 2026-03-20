import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";

const trustBadges = [
  { icon: "⭐", text: "4.9 Rated" },
  { icon: "🎯", text: "1600+ Selections" },
  { icon: "👨‍🎓", text: "150K+ Students" },
  { icon: "🏆", text: "6X AIR-1 Winners" },
];

const bgSlides = [
  { label: "National Law School of India University", url: "https://www.nls.ac.in/wp-content/uploads/2020/09/NLS.jpg" },
  { label: "ILS Law College, Pune",                   url: "https://www.hindustantimes.com/ht-img/img/2024/06/20/1600x900/The-Indian-Law-Society--ILS--Law-College-in-Pune-i_1718910709765.jpg" },
  { label: "BHU Law School",                          url: "https://cache.careers360.mobi/media/article_images/2022/1/31/bhu-llb_S6pA9pL.jpg" },
  { label: "Symbiosis Law School",                    url: "https://www.clatapult.com/wp-content/uploads/2021/12/sls.jpg" },
  { label: "Government Law College, Mumbai",          url: "https://www.glcmumbai.com/images/G5L.jpg" },
];

const INTERVAL_MS = 5000;

const HeroSection = () => {
  const [viewers, setViewers] = useState(() => Math.floor(Math.random() * 25) + 38);
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.random() < 0.5 ? 1 : -1;
        return Math.min(72, Math.max(31, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % bgSlides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "600px" }}>

      {/* ── Background Slideshow ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slideIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={bgSlides[slideIdx].url}
              alt={bgSlides[slideIdx].label}
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.82)" }}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay: strong left tint fading right so form area stays light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,20,0.78) 0%, rgba(10,10,20,0.55) 45%, rgba(10,10,20,0.18) 100%)",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div
        className="relative z-10 container mx-auto px-6 lg:px-10"
        style={{ paddingTop: "clamp(48px,8vw,88px)", paddingBottom: "clamp(48px,8vw,88px)" }}
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Text Block ── */}
          <div className="space-y-6 max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-white/30 text-white text-xs md:text-sm font-semibold px-4 py-1.5 font-body backdrop-blur-sm"
              style={{ background: "rgba(185,28,28,0.70)" }}
            >
              🏆 India's #1st, 3-Year LLB Coaching | Delhi NCR
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="font-heading"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                color: "#ffffff",
                textShadow: "0 2px 24px rgba(0,0,0,0.7)",
              }}
            >
              Best 3-Year LLB Coaching<br className="hidden sm:block" /> in Delhi NCR
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="font-body leading-relaxed"
              style={{
                fontSize: "clamp(0.88rem, 1.5vw, 1rem)",
                color: "rgba(255,255,255,0.90)",
                textShadow: "0 1px 10px rgba(0,0,0,0.6)",
                maxWidth: "520px",
              }}
            >
              Planning to pursue a 3-Year LLB degree from top law colleges like NLSIU Bengaluru, Faculty of Law (DU), or Symbiosis Pune? Start your preparation with Law Prep Tutorial — experienced faculty, structured curriculum, and guaranteed results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                onClick={() => {
                  const el = document.getElementById("hero-form");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="w-full sm:w-auto bg-primary text-white rounded-none h-12 px-7 text-sm font-bold hover:bg-primary/90 shadow-none"
              >
                📅 Book Free Counselling
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto rounded-none h-12 px-7 text-sm font-bold shadow-none backdrop-blur-sm"
                style={{
                  borderColor: "rgba(255,255,255,0.45)",
                  color: "white",
                  background: "rgba(255,255,255,0.10)",
                }}
              >
                <a href="tel:+918750581505" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91-8750581505
                </a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              {trustBadges.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-1.5 font-body font-semibold"
                  style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.92)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
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
              transition={{ delay: 0.50 }}
              className="flex items-center gap-2 text-xs font-body"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {viewers} students viewing this page right now
            </motion.div>
          </div>

          {/* ── RIGHT: Lead Form Card ── */}
          <motion.div
            id="hero-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="w-full shadow-2xl"
            style={{ borderRadius: "0" }}
          >
            {/* Red header strip */}
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-heading font-black text-lg" style={{ letterSpacing: "-0.01em" }}>
                Get Free Demo
              </p>
              <p className="text-white/80 text-xs font-body mt-0.5">Book a free 3-Year LLB session — no commitment, no spam</p>
            </div>
            {/* White form body */}
            <div className="bg-white px-6 py-5">
              <LeadForm compact />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-[3.5rem] left-0 right-0 z-40 px-3 pb-3 pointer-events-none">
        <Button
          onClick={() => {
            const el = document.getElementById("hero-form");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="w-full h-12 rounded-none bg-primary text-white text-[15px] font-bold shadow-2xl pointer-events-auto"
        >
          📝 Get Free Counselling
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
