import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "What I liked most was the level of interaction in online classes. Doubts were taken seriously, and mentors were always available.",
    name: "Rohan Joshi",
    rank: "AIR-3, CLAT 2026",
    initial: "R",
  },
  {
    quote: "Law Prep's rigorous mock tests made the actual exam feel easy!",
    name: "Shreya Agarwal",
    rank: "AIR 79, CLAT 2025",
    initial: "S",
  },
  {
    quote: "Strategic mentorship and guidance by Law Prep led me to AIR 1.",
    name: "Jai Bohara",
    rank: "AIR 1, CLAT 2024",
    initial: "J",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-heading text-gray-900" style={{ fontWeight: 900 }}>
            Student Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0"
              >
                <span
                  className="font-heading text-primary"
                  style={{ fontWeight: 900, fontSize: "1.5rem" }}
                >
                  {testimonials[current].initial}
                </span>
              </div>
              {/* Text */}
              <div className="flex-1">
                <Quote className="w-6 h-6 text-primary mb-3" />
                <p className="font-body text-gray-700 text-[15px] leading-relaxed italic mb-4">
                  "{testimonials[current].quote}"
                </p>
                <p className="font-body font-bold text-gray-900 text-sm">
                  {testimonials[current].name}
                </p>
                <p className="font-body text-xs text-primary font-semibold mt-0.5">
                  ✅ {testimonials[current].rank}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all ${
                  i === current ? "bg-primary w-8" : "bg-gray-200 w-4"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
