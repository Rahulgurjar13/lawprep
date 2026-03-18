import { Phone, MessageCircle, FileEdit } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg">
      <div className="grid grid-cols-3 h-14">
        <a
          href="tel:+919289485506"
          className="flex flex-col items-center justify-center gap-0.5 text-primary font-body text-xs font-semibold active:bg-gray-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call
        </a>
        <a
          href="https://wa.me/919289485506"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 font-body text-xs font-semibold active:bg-gray-50 transition-colors"
          style={{ color: "#22c55e" }}
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <button
          onClick={() =>
            document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center justify-center gap-0.5 text-primary font-body text-xs font-semibold active:bg-gray-50 transition-colors"
        >
          <FileEdit className="w-5 h-5" />
          Enroll Free
        </button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
