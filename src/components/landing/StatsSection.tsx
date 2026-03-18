import { Trophy, GraduationCap, FileCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

const stats = [
  { icon: Trophy, value: 6, suffix: "X+", label: "AIR-1 Achieved" },
  { icon: GraduationCap, value: 150, suffix: "K+", label: "Students Mentored" },
  { icon: FileCheck, value: 11, suffix: "K+", label: "Total Law College Selections" },
  { icon: Star, value: 1600, suffix: "+", label: "Selections Last Year" },
];

const StatCard = ({
  icon: Icon,
  value,
  suffix,
  label,
  inView,
}: {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) => {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="bg-white p-6 border border-gray-100 shadow-sm">
      <p className="font-body text-sm text-gray-500 mb-2">{label}</p>
      <div
        className="font-stats text-gray-900"
        style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1 }}
      >
        {count}
        {suffix}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-14 md:py-20 bg-amber-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center">
          <div>
            <h2
              className="font-heading text-gray-900 mb-4"
              style={{ fontWeight: 900 }}
            >
              Numbers That Define Our Legacy
            </h2>
            <p className="font-body text-gray-500 mb-6 text-sm md:text-[15px]">
              Join the LLB coaching institute trusted by thousands of aspirants across Delhi NCR.
            </p>
            <Button
              onClick={() =>
                document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary text-white rounded-none px-6 h-10 hover:bg-primary/90 font-bold text-sm shadow-none"
            >
              Schedule Free Session
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
