import { Phone } from "lucide-react";

const quickLinks = ["Law Entrance", "Judiciary", "Free Resources", "Centers"];
const centers = [
  { name: "South Delhi", phone: "+91-9289485506" },
  { name: "Gurugram", phone: "+91-9289485501" },
  { name: "North Delhi", phone: "+91-9289485503" },
  { name: "Noida", phone: "+91-9289485508" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo + Tagline */}
          <div>
            <div
              className="inline-flex flex-col items-center justify-center px-2.5 py-1.5 mb-4"
              style={{ background: "#FFD600" }}
            >
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "13px", color: "#b91c1c", lineHeight: 1.2 }}>
                LAW PREP
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "7px", color: "#1f2937", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1.4 }}>
                Tutorial
              </span>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              India's Most Trusted Law Coaching Institute. Preparing students for top 3-Year LLB programs across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white mb-4" style={{ fontWeight: 900, fontSize: "1rem" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Centers */}
          <div>
            <h4 className="font-heading text-white mb-4" style={{ fontWeight: 900, fontSize: "1rem" }}>
              Our Centers
            </h4>
            <ul className="space-y-2">
              {centers.map((c) => (
                <li key={c.name} className="font-body text-sm text-gray-400">
                  {c.name} —{" "}
                  <a href={`tel:${c.phone.replace(/-/g, "")}`} className="hover:text-white transition-colors">
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-white mb-4" style={{ fontWeight: 900, fontSize: "1rem" }}>
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Instagram", url: "https://instagram.com/lawpreptutorial" },
                { name: "YouTube", url: "https://youtube.com" },
                { name: "Facebook", url: "https://facebook.com" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs bg-white/10 hover:bg-primary hover:text-white px-3 py-1.5 transition-colors font-medium"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center">
          <p className="font-body text-xs text-gray-500">
            © 2025 Law Prep Tutorial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
