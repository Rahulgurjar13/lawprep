import { motion } from "framer-motion";
import { FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const colleges = [
  {
    name: "National Law School of India University",
    shortName: "NLSIU",
    location: "Bangalore, Karnataka",
    exam: "NLSAT",
    info: "The gold standard of law schools; known as the Harvard of the East. Highly competitive entrance.",
    logo: "https://www.nls.ac.in/wp-content/themes/nlsiu/assets/dist/images/placeholder/nlsiu-logo.jpg",
  },
  {
    name: "Faculty of Law, University of Delhi",
    shortName: "Campus Law Centre",
    location: "New Delhi",
    exam: "CUET-PG",
    info: "Largest intake among top law schools; high reputation for judiciary and litigation preparation.",
    logo: "https://lawfaculty.du.ac.in/userfiles/images/2law-faculty-logo.png",
  },
  {
    name: "Government Law College",
    shortName: "GLC",
    location: "Mumbai, Maharashtra",
    exam: "MH CET Law",
    info: "Oldest law school in Asia. Extremely affordable and reputed for litigation practice.",
    logo: "https://www.glcmumbai.com/images/government.jpg",
  },
  {
    name: "ILS Law College",
    shortName: "ILS",
    location: "Pune, Maharashtra",
    exam: "MH CET Law",
    info: "Renowned for academic rigor and beautiful campus. 100 years of excellence.",
    logo: "https://ilslaw.edu/wp-content/uploads/2025/05/College-1.svg",
  },
  {
    name: "BHU Law School",
    shortName: "BHU",
    location: "Varanasi, Uttar Pradesh",
    exam: "CUET-PG",
    info: "Strong focus on socio-economic law. Reputed for high judiciary intake.",
    logo: "https://www.bhu.ac.in/Scripts/SitesBhu/images/logo.png",
  },
  {
    name: "NLU Odisha (NLUO)",
    shortName: "NLUO",
    location: "Cuttack, Odisha",
    exam: "NLUO Entrance",
    info: "One of the few NLUs offering the 3-year LLB programme.",
    logo: "https://nluo.ac.in/storage/2024/04/logo-nluo1.png",
  },
  {
    name: "Symbiosis Law School",
    shortName: "SLS",
    location: "Pune, Maharashtra",
    exam: "AIAT",
    info: "Premier private law school with international curriculum and world-class infrastructure.",
    logo: "https://www.symlaw.ac.in/assets/logo/logo.svg",
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
            <div className="space-y-3">
              {colleges.map((college, i) => (
                <motion.div
                  key={college.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-gray-100 shadow-sm p-4 flex gap-4 items-start"
                >
                  {/* Logo */}
                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 flex items-center justify-center p-1.5">
                    <img
                      src={college.logo}
                      alt={`${college.shortName} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-bold text-sm text-gray-900 leading-snug">
                      {college.name}
                    </p>
                    <p className="font-body text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {college.location}
                    </p>
                    <p className="font-body text-xs text-gray-500 mt-1.5 leading-relaxed">
                      {college.info}
                    </p>
                    <span className="inline-block mt-2 bg-primary/10 text-primary text-[11px] font-semibold font-body px-2 py-0.5">
                      Exam: {college.exam}
                    </span>
                  </div>
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
                <a href="tel:+918750581505">Talk to Our Expert →</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
