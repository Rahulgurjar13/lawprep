import { motion } from "framer-motion";
import { BarChart3, ClipboardList, UserCheck, FileText, Bell, CalendarDays } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Dedicated Parent Portal", text: "Track progress and test scores", color: "bg-blue-100 text-blue-600" },
  { icon: ClipboardList, title: "Mock Test Insights", text: "Detailed performance reports", color: "bg-orange-100 text-orange-600" },
  { icon: UserCheck, title: "Personalized Teacher Feedback", text: "Section-wise feedback", color: "bg-green-100 text-green-600" },
  { icon: FileText, title: "Exclusive Mentorship Reports", text: "NLU student insights", color: "bg-purple-100 text-purple-600" },
  { icon: Bell, title: "Daily Attendance Notifications", text: "Stay updated always", color: "bg-red-100 text-primary" },
  { icon: CalendarDays, title: "Monthly PTMs", text: "Monthly faculty meetings for strategy", color: "bg-yellow-100 text-yellow-600" },
];

const ParentFeatures = () => {
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-gray-900 text-center mb-2" style={{ fontWeight: 900 }}>
          Coaching That Keeps Parents in the Loop Too
        </h2>
        <p className="font-body text-gray-500 text-center mb-10 text-sm md:text-[15px]">
          Stay connected with your child's preparation journey
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white p-5 border border-gray-100 shadow-sm flex items-start gap-4"
            >
              <div className={`w-9 h-9 flex items-center justify-center shrink-0 ${f.color}`}>
                <f.icon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-gray-900 mb-0.5" style={{ fontWeight: 900, fontSize: "0.9rem" }}>
                  {f.title}
                </h3>
                <p className="font-body text-xs text-gray-500">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentFeatures;
