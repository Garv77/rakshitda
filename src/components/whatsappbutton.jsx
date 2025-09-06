import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // optional, for better icon quality

const WhatsappButton = () => {
  const phoneNumber = "917465076529"; // Your number in international format (no +)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 animate-bounce">
        <FaWhatsapp className="text-2xl" />
      </div>
    </a>
  );
};

export default WhatsappButton;
