import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/2348137180348"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppCTA;
