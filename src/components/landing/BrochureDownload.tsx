import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BrochureDownload = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-gray-900 mb-2" style={{ fontWeight: 900 }}>
          Looking for Detailed Course Information?
        </h2>
        <p className="font-body text-gray-500 mb-6 text-sm md:text-[15px]">
          Download the complete brochure for courses, fees, scholarships, and success stats.
        </p>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-6 h-10 font-bold text-sm transition-colors shadow-none"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Brochure
        </Button>
      </div>
    </section>
  );
};

export default BrochureDownload;
