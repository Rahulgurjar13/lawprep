import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const centers = [
  { name: "South Delhi", area: "Hauz Khas", phone: "+91-9289485506", address: "Hauz Khas, South Delhi", maps: "https://maps.google.com/?q=Hauz+Khas+Delhi" },
  { name: "Gurugram", area: "Sector 14", phone: "+91-9289485501", address: "Sector 14, Gurugram", maps: "https://maps.google.com/?q=Sector+14+Gurugram" },
  { name: "North Delhi", area: "Mukherjee Nagar", phone: "+91-9289485503", address: "Mukherjee Nagar, North Delhi", maps: "https://maps.google.com/?q=Mukherjee+Nagar+Delhi" },
  { name: "Noida", area: "Sector 62", phone: "+91-9289485508", address: "Sector 62, Noida", maps: "https://maps.google.com/?q=Sector+62+Noida" },
];

const CentersSection = () => {
  return (
    <section id="centers" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-gray-900 text-center mb-10" style={{ fontWeight: 900 }}>
          Visit Our Centers Across Delhi NCR
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {centers.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-9 h-9 bg-primary/10 flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-heading text-gray-900 mb-1" style={{ fontWeight: 900, fontSize: "1rem" }}>
                {c.name}
              </h3>
              <p className="font-body text-sm text-gray-500 mb-3">{c.address}</p>
              <a href={`tel:${c.phone.replace(/-/g, "")}`} className="flex items-center gap-1.5 text-sm font-body font-semibold text-primary hover:underline mb-2">
                <Phone className="w-3.5 h-3.5" /> {c.phone}
              </a>
              <a href={c.maps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-body text-gray-500 hover:text-primary transition-colors">
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 max-w-3xl mx-auto bg-gray-50 border border-gray-100 h-44 flex items-center justify-center">
          <p className="font-body text-gray-400 text-sm">📍 Delhi NCR — 4 Centers</p>
        </div>
      </div>
    </section>
  );
};

export default CentersSection;
