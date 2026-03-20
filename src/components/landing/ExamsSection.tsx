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
    <section id="exams" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 font-body mb-4 uppercase"
          >
            NATIONWIDE OPPORTUNITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-gray-900 text-3xl md:text-4xl lg:text-[40px] max-w-4xl mx-auto" 
            style={{ fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Top Law Colleges We Prepare You For
          </motion.h2>
        </div>

        {/* Universities Grid (4 cols on laptops, perfectly balanced) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {colleges.map((college, i) => (
            <motion.div
              key={college.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 md:p-5 flex flex-col h-full"
            >
              <div className="flex gap-3.5 items-start mb-3.5">
                {/* Logo */}
                <div className="w-12 h-12 shrink-0 border border-gray-100 flex items-center justify-center p-1.5 bg-white">
                  {college.logo ? (
                    <img
                      src={college.logo}
                      alt={`${college.shortName} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="font-heading text-primary font-black text-xs">{college.shortName}</span>
                  )}
                </div>
                {/* Titles */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-body font-bold text-[13px] text-gray-900 leading-snug line-clamp-2">
                    {college.name}
                  </p>
                  <p className="font-body text-[10px] text-gray-500 flex items-center gap-[3px] mt-1 uppercase tracking-wide font-bold">
                    <MapPin className="w-[10px] h-[10px] shrink-0" />
                    {college.location}
                  </p>
                </div>
              </div>
              
              {/* Info text - takes remaining space to push badge down to bottom */}
              <p className="font-body text-[11px] md:text-xs text-gray-600 leading-relaxed mb-4 flex-grow">
                {college.info}
              </p>
              
              {/* Badge at the bottom */}
              <div className="mt-auto">
                <span className="inline-block bg-primary/5 text-primary text-[10px] font-bold font-body px-2 py-1 uppercase tracking-wider">
                  Exam: {college.exam}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: Exams Covered & CTA combined */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 shadow-lg p-6 md:p-10"
        >
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-center">
            
            {/* Left: Exams list */}
            <div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4" style={{ fontWeight: 900, letterSpacing: "-0.01em" }}>
                Entrance Exams Covered
              </h3>
              <p className="font-body text-sm text-gray-600 mb-6 max-w-2xl leading-relaxed">
                Our comprehensive curriculum builds the reasoning, legal aptitude, and reading comprehension skills required to conquer India's top 3-Year LLB entrance exams.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {exams.map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-[13px] font-body font-semibold px-3.5 py-2 hover:border-primary/40 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    {e}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA Box */}
            <div className="bg-gray-50 border border-gray-100 p-6 text-center h-full flex flex-col justify-center">
              <h4 className="font-heading text-lg text-gray-900 mb-2" style={{ fontWeight: 800 }}>Not sure which exam to target?</h4>
              <p className="font-body text-xs text-gray-500 mb-5 leading-relaxed">
                Find out which law colleges align with your profile and career goals.
              </p>
              <Button
                asChild
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-none font-bold text-sm shadow-none h-11"
              >
                <a href="tel:+918750581505">Talk to Our Expert →</a>
              </Button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExamsSection;
