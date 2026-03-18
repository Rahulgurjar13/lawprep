import { motion } from "framer-motion";
import { GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const colleges = [
  "National Law School of India University (Bangalore)",
  "Campus Law Centre, University of Delhi",
  "National Law University, Odisha",
  "Rajiv Gandhi School of IP Law, IIT Kharagpur",
  "Jindal Global Law School",
  "Government Law College, Mumbai",
  "Symbiosis Law School, Pune",
  "Panjab University",
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
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-white p-3 border border-gray-100 shadow-sm"
                >
                  <div className="w-7 h-7 bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-sm text-gray-800">{c}</span>
                </motion.div>
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
