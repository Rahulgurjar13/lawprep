import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const centers = [
  {
    name: "South Delhi",
    area: "Hauz Khas, South Delhi",
    phone: "+91-9289485506",
    address: "Second Floor, 14, near Vadilal Hangout, Kaushalya Park, Hauz Khas, New Delhi, Delhi 110016",
    maps: "https://share.google/D2iw8UZ0SqzOLhDcQ",
  },
  {
    name: "Gurugram",
    area: "Sector 14, Gurugram",
    phone: "+91-9289485503",
    address: "M-35, Second Floor, above HDFC Bank, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122007",
    maps: "https://share.google/6brsGcIzOIp9uxjDL",
  },
  {
    name: "North Delhi",
    area: "GTB Nagar, North Delhi",
    phone: "+91-9289485501",
    address: "Metro Gate No. 1, upstairs Bank of Baroda, 73-75, Ring Road, Mall Road, GTB Nagar, New Delhi, Delhi 110033",
    maps: "https://share.google/j26hjq5H1UrwFmwXi",
  },
  {
    name: "Noida",
    area: "Sector 62, Noida",
    phone: "+91-9289485508",
    address: "Ground Floor, Sandesh Tower, C-56/31, C Block, Phase 2, Sector 62, Noida, Uttar Pradesh 201309",
    maps: "https://share.google/rxgMdmBk43lflPFr3",
  },
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
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-body font-semibold text-primary hover:underline transition-colors"
              >
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CentersSection;
