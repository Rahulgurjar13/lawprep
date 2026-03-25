import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918750581505"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-success text-success-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-body text-sm font-medium">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
