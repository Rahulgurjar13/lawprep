import { motion } from "framer-motion";
import { GraduationCap, Building2, Trophy, BookOpen, MessageSquare, User } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    text: "Our faculty includes top legal educators and NLU alumni with decades of combined teaching experience.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Building2,
    title: "Prime Infrastructure",
    text: "State-of-the-art classrooms across 4 centers in Delhi NCR — Hauz Khas, Gurugram, Mukherjee Nagar, and Noida.",
    color: "bg-red-100 text-primary",
  },
  {
    icon: Trophy,
    title: "Top Results Every Year",
    text: "1600+ law college selections in a single year — the highest success rate by any LLB coaching in India.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: BookOpen,
    title: "Excellent Study Material",
    text: "Printed books, eBooks, and topic-wise resources covering the entire 3-Year LLB entrance syllabus.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageSquare,
    title: "Unlimited Doubt Solving",
    text: "Never get stuck — access unlimited doubt-clearing sessions with expert mentors, online and offline.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: User,
    title: "Personalised Preparation",
    text: "1:1 mentorship tailored to your strengths and weak areas, with AI-powered performance tracking.",
    color: "bg-green-100 text-green-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="font-heading text-gray-900 text-center mb-2"
          style={{ fontWeight: 900 }}
        >
          Why is Law Prep Tutorial the Best 3-Year LLB Institute in Delhi NCR?
        </h2>
        <p className="font-body text-gray-500 text-center mb-10 text-sm md:text-[15px] max-w-2xl mx-auto">
          We don't just teach — we build future lawyers
        </p>

        <div className="grid lg:grid-cols-[1fr_350px] lg:gap-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${f.color}`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="font-heading text-gray-900 mb-1"
                    style={{ fontWeight: 900, fontSize: "0.95rem" }}
                  >
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block h-full w-full"
          >
            <img
              src="/images/student_success.png"
              alt="Happy law student on campus"
              className="w-full h-full object-cover bg-gray-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
