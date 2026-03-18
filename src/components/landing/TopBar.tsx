import { Phone } from "lucide-react";

const centers = [
  { area: "South Delhi", phone: "+91-8750581505" },
  { area: "Gurugram", phone: "+91-8750581505" },
  { area: "North Delhi", phone: "+91-8750581505" },
  { area: "Noida", phone: "+91-8750581505" },
];

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-1.5 text-xs font-body">
      <div className="container mx-auto px-4 flex items-center justify-center gap-1 md:gap-4 flex-wrap">
        {/* Mobile: show only first number */}
        <a href="tel:+918750581505" className="flex items-center gap-1 md:hidden">
          <Phone className="w-3 h-3" />
          <span>📞 +91-8750581505</span>
        </a>
        {/* Desktop: show all */}
        <div className="hidden md:flex items-center gap-3 text-xs">
          {centers.map((c, i) => (
            <span key={c.area} className="flex items-center gap-1">
              <a href={`tel:${c.phone.replace(/-/g, "")}`} className="hover:underline">
                📞 {c.area}: {c.phone}
              </a>
              {i < centers.length - 1 && <span className="mx-1 opacity-50">|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
