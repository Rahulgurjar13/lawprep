import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const colleges = [
  {
    name: "National Law School of India University (Bangalore)",
    exam: "NLSAT",
    info: "The gold standard of law schools; known as the Harvard of the East. Highly competitive entrance.",
  },
  {
    name: "Faculty of Law, University of Delhi (Campus Law Centre)",
    exam: "CUET-PG",
    info: "Largest intake among top law schools; high reputation for judiciary and litigation preparation.",
  },
  {
    name: "Government Law College (GLC), Mumbai",
    exam: "MH CET Law",
    info: "Extremely affordable; oldest law school in Asia. Reputed for litigation practice.",
  },
  {
    name: "ILS Law College, Pune",
    exam: "MH CET Law",
    info: "Renowned for its academic rigor and beautiful campus. 100 years of excellence.",
  },
  {
    name: "BHU Law School, Varanasi",
    exam: "CUET-PG",
    info: "Strong focus on socio-economic and community law. Reputed for high judiciary intake.",
  },
  {
    name: "NLU Odisha (NLUO), Cuttack",
    exam: "NLUO Entrance",
    info: "One of the few NLUs offering the 3-year LLB programme.",
  },
  {
    name: "Symbiosis Law School, Pune",
    exam: "All India Admission Test (AIAT)",
    info: "Premier private law school known for its international curriculum and infrastructure.",
  },
];

const exams = [
  "NLSAT-LLB",
  "CUET PG-LLB",
  "NLUO All India Entrance Test",
  "JSAT Law Entrance Exam",
  "MH CET (3 Year LLB)",
  "Symbiosis All India Admission Test",
  "PU LLB Entrance Test",
  "Rajiv Gandhi School IIT Kharagpur Exam",
];

const CollegeCard = ({ college, index }: { college: typeof colleges[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      key={college.name}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-gray-100 shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-3 text-left"
      >
        <div className="w-7 h-7 bg-primary/10 flex items-center justify-center shrink-0">
          <GraduationCap className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-body text-sm text-gray-800 block">{college.name}</span>
          <span className="font-body text-xs font-semibold text-primary mt-0.5 block">
            Exam: {college.exam}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-3 pb-3 pt-0 ml-10 font-body text-xs text-gray-500 leading-relaxed border-t border-gray-50">
          {college.info}
        </div>
      )}
    </motion.div>
  );
};

const ExamsSection = () => {
  return (
    <section id="exams" className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Colleges */}
          <div>
            <h2 className="font-heading text-gray-900 mb-6" style={{ fontWeight: 900 }}>
              Top Law Colleges We Prepare You For
            </h2>
            <div className="space-y-2">
              {colleges.map((c, i) => (
                <CollegeCard key={c.name} college={c} index={i} />
              ))}
            </div>
          </div>

          {/* Exams */}
          <div>
            <h2 className="font-heading text-gray-900 mb-6" style={{ fontWeight: 900 }}>
              Entrance Exams Covered
            </h2>
            <div className="flex flex-wrap gap-2">
              {exams.map((e, i) => (
                <motion.span
                  key={e}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-1.5 bg-primary text-white text-xs md:text-sm font-body font-semibold px-4 py-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  {e}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 p-5 bg-white border border-gray-100 shadow-sm">
              <p className="font-body text-gray-600 text-sm mb-3 font-medium">
                Not sure which exam to target?
              </p>
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90 rounded-none font-bold text-sm shadow-none"
              >
                <a href="tel:+919289485506">Talk to Our Expert →</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
