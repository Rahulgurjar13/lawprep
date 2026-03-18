import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

const BrochureDownload = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleSuccess = () => {
    setTimeout(() => {
      setFormOpen(false);
      const a = document.createElement("a");
      a.href = "/brochure.pdf";
      a.download = "Law_Prep_Brochure.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 2000); // Give time for the success state in LeadForm to show
  };

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
          onClick={() => setFormOpen(true)}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-6 h-10 font-bold text-sm transition-colors shadow-none"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Brochure
        </Button>
      </div>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto rounded-none p-0 border-none bg-transparent">
          <DialogHeader className="sr-only">
            <DialogTitle>Download Brochure</DialogTitle>
            <DialogDescription>Please fill the form to instantly download the brochure.</DialogDescription>
          </DialogHeader>
          <LeadForm onSuccess={handleSuccess} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrochureDownload;
