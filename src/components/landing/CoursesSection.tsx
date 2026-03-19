import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { courses } from "@/data/courseData";


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
              {/* Left thumbnail — student photo with overlay */}
              <div className="sm:w-44 md:w-52 shrink-0 relative overflow-hidden" style={{ minHeight: "140px" }}>
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                {/* Subtle tint overlay so image stays vivid */}
                <div className="absolute inset-0 bg-primary/15" />
                {/* Discount badge */}
                <span className="absolute top-2 left-2 bg-accent text-gray-900 font-black px-2 py-0.5 text-[10px] z-10"
                  style={{ fontFamily: "Inter, sans-serif" }}>
                  {c.discount}
                </span>
                {/* Batch label strip at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-1.5 px-3 z-10">
                  <p className="text-white text-center font-black leading-tight" style={{ fontSize: "1.1rem" }}>LLB {c.year}</p>
                  <p className="text-white/80 text-center uppercase tracking-widest" style={{ fontSize: "0.55rem", fontWeight: 700 }}>{c.batchLabel}</p>
                </div>
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
                  </div>
                <Link to={`/course/${c.slug}`}>
                  <Button className="shrink-0 bg-primary text-white hover:bg-primary/90 rounded-none font-bold text-sm h-9 px-5 shadow-none">
                    Explore Now →
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
