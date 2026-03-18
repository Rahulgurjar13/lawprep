import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "LLB 2026 Target Batch: Offline",
    rating: 4.9,
    reviews: "34,812",
    discount: "30% OFF",
    batchStart: "01-Nov-2025",
    hours: "800+",
    target: "For Final Year Graduates",
    bestselling: true,
    year: "2026",
    batchLabel: "TARGET BATCH",
  },
  {
    title: "LLB 2026 Finisher Batch: Offline",
    rating: 4.9,
    reviews: "16,753",
    discount: "30% OFF",
    batchStart: "09-Dec-2025",
    hours: "800+",
    target: "For Droppers",
    bestselling: true,
    year: "2026",
    batchLabel: "FINISHER BATCH",
  },
  {
    title: "LLB 2027 Foundation Batch: Offline",
    rating: 4.9,
    reviews: "28,592",
    discount: "27% OFF",
    batchStart: "09-Dec-2025",
    hours: "1200+",
    target: "Expert Mentorship",
    bestselling: false,
    year: "2027",
    batchLabel: "FOUNDATION BATCH",
  },
];

const CoursesSection = () => {
  const [tab, setTab] = useState<"all" | "bestselling">("all");
  const filtered =
    tab === "bestselling" ? courses.filter((c) => c.bestselling) : courses;

  return (
    <section id="courses" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2
            className="font-heading text-gray-900"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 900 }}
          >
            Our 3-Year LLB Courses
          </h2>
          {/* Tabs */}
          <div className="flex gap-2">
            {[
              { key: "all", label: "All Courses" },
              { key: "bestselling", label: "Bestselling Courses" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as "all" | "bestselling")}
                className={`font-body text-sm font-semibold px-4 py-1.5 border transition-all ${
                  tab === t.key
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards — horizontal, sharp-edged */}
        <div className="space-y-4 max-w-4xl">
          {filtered.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row overflow-hidden"
            >
              {/* Left red banner — sharp */}
              <div className="bg-primary sm:w-44 md:w-48 shrink-0 p-4 flex flex-col items-center justify-center relative select-none">
                <span
                  className="absolute top-2 left-2 bg-accent text-gray-900 font-black px-2 py-0.5 text-[10px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {c.discount}
                </span>
                <span
                  className="text-white text-center leading-none"
                  style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "2rem" }}
                >
                  LLB
                </span>
                <span
                  className="text-white/90 text-center uppercase mt-1"
                  style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.04em" }}
                >
                  {c.year}
                </span>
                <span
                  className="text-white/80 text-center uppercase mt-0.5"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.1em" }}
                >
                  {c.batchLabel}
                </span>
              </div>

              {/* Right content */}
              <div className="p-5 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-2">
                  <h3
                    className="font-heading text-gray-900"
                    style={{ fontWeight: 900, fontSize: "1rem" }}
                  >
                    {c.title}
                  </h3>
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-gray-500 font-body ml-1">({c.reviews})</span>
                  </div>
                  {/* Details */}
                  <div className="flex flex-wrap gap-3 text-xs font-body text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      Batch Starting: {c.batchStart}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {c.hours} Hours
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      {c.target}
                    </span>
                  </div>
                  <p className="flex items-center gap-1 text-xs text-red-500 font-semibold font-body">
                    <Zap className="w-3 h-3" />
                    Only 12 seats left in this batch
                  </p>
                </div>
                <Button className="shrink-0 bg-primary text-white hover:bg-primary/90 rounded-none font-bold text-sm h-9 px-5 shadow-none">
                  Explore Now →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
