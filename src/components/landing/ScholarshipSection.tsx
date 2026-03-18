import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const scholarshipStats = [
  { label: "Discount Worth", value: "₹1.5 Lakh+" },
  { label: "Scholarship Up to", value: "100%" },
  { label: "Tests Conducted", value: "500+" },
  { label: "Scholarships Awarded", value: "INR 5.8 Cr+" },
];

const ScholarshipSection = () => {
  return (
    <section id="scholarship" className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading text-gray-900" style={{ fontWeight: 900 }}>
              Get Up to 100% Scholarship on 3-Year LLB Coaching!
            </h2>
            <p className="font-body text-gray-500 mt-2 text-sm md:text-[15px] max-w-xl">
              Earn a full or partial scholarship based on your performance in our scholarship test.
            </p>
          </div>
          <Button className="bg-primary text-white rounded-none px-6 h-10 hover:bg-primary/90 shrink-0 self-start font-bold text-sm shadow-none">
            Apply Now
          </Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {scholarshipStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-5 border border-gray-100 shadow-sm text-center"
            >
              <div className="font-stats text-primary" style={{ fontWeight: 700, fontSize: "1.75rem" }}>
                {s.value}
              </div>
              <p className="font-body text-xs md:text-sm text-gray-500 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
