import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const locations = ["South Delhi", "Gurugram", "North Delhi", "Noida", "Other"];
const courses = ["NLSAT-LLB", "CUET PG-LLB", "MH CET", "Other"];

interface LeadFormProps {
  onSuccess?: () => void;
  className?: string;
}

const LeadForm = ({ onSuccess, className = "" }: LeadFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", course: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))
      e.phone = "10-digit number required";
    if (!form.location) e.location = "Select location";
    if (!form.course) e.course = "Select course";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast({
      title: "✅ Request Received!",
      description: "Our counsellor will call you within 2 hours!",
    });
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className={`bg-white p-8 text-center border border-gray-100 shadow-sm ${className}`}>
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="font-heading text-xl text-gray-900 mb-2">Thank You!</h3>
        <p className="font-body text-gray-500 text-sm">Our counsellor will call you within 2 hours.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 border border-gray-100 shadow-sm ${className}`} id="hero-form">
      <h3
        className="font-heading text-gray-900 mb-1"
        style={{ fontSize: "1.25rem", fontWeight: 900 }}
      >
        Request a Callback
      </h3>
      <p className="font-body text-sm text-gray-500 mb-5">Get expert guidance — absolutely free</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-none h-11 border-gray-200 focus:border-primary text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-none h-11 border-gray-200 focus:border-primary text-sm"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <Input
            placeholder="Your mobile number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
            }
            className="rounded-none h-11 border-gray-200 focus:border-primary text-sm"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <select
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full h-11 border border-gray-200 bg-white px-3 text-sm text-gray-700 font-body focus:outline-none focus:border-primary"
          >
            <option value="">You're currently in</option>
            {locations.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>
        <div>
          <select
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="w-full h-11 border border-gray-200 bg-white px-3 text-sm text-gray-700 font-body focus:outline-none focus:border-primary"
          >
            <option value="">Course interested in</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
        </div>
        <Button
          type="submit"
          className="w-full h-11 rounded-none bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-none"
        >
          Submit
        </Button>
        <p className="flex items-center justify-center gap-1 text-xs text-gray-400">
          <Lock className="w-3 h-3" /> Your data is 100% safe. No spam, ever.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
