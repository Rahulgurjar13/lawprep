import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const DemoCTA = () => {
  return (
    <section className="py-14 md:py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white border border-amber-100 shadow-sm p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="font-heading text-gray-900 mb-3" style={{ fontWeight: 900 }}>
              Book Your Free Demo Class Now!
            </h2>
            <p className="font-body text-gray-500 mb-5 text-sm md:text-[15px]">
              Experience the quality of teaching at India's best LLB coaching institute — absolutely FREE.
            </p>
            <Button
              onClick={() =>
                document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary text-white rounded-none h-10 px-6 text-sm font-bold hover:bg-primary/90 shadow-none"
            >
              Book Your Spot Now
            </Button>
          </div>
          <div className="w-44 h-32 bg-amber-100 flex items-center justify-center shrink-0">
            <BookOpen className="w-14 h-14 text-amber-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCTA;
