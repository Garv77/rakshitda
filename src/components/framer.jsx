import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import OfficeImage from "../clothsimages/wofficesupplies.jpg";
import Formal from "../clothsimages/wbacche.jpg";
import Essentials from "../clothsimages/wdailyusable.jpg";
import Manpower from "../clothsimages/wmanpower.jpg";
import Ration from "../clothsimages/Wrationsupplies.jpg"

import Baba from "../officeimages/Rmainimage.jpeg";


const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};


export default function App() {
  
const slides = [
  {
    src: OfficeImage,
    title: "Office Supplies",
    description: "Tons of office supplies in cheapest price possible",
    action: () => navigate("/office-supplies"),
  },
  {
    src:Essentials, 
    title: "Daily Essentials",
    description: "All essential products at a single place",
    action: () => navigate("/essentials"),
  },

  {
    src: Formal,
    title: "Clothings",
    description: "Raw cloths and ready made cloths.",
    action: () => navigate("/clothing"),
  },
    {
    src:Manpower, 
    title: "Manpower Outsourcing",
    description: "All essential labours at a single place.",
    action: () => navigate("/manpower"),
  },
  {
    src:Ration, 
    title: "Ration",
    description: "Coming Soon",
    action: () => navigate("/ration"),
  },
  {
    src: Baba,
    title: "Shri Neem Krori Traders",
    description: "all items in one place under cheapest price.",
    action: () => navigate("/"),
  },
];

  const [[page, direction], setPage] = useState([0, 0]);
  const navigate = useNavigate();

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, [page]);

  const current = slides[page];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-[50vh] md:h-[70vh] w-full bg-white">
        <AnimatePresence custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
           <div className="relative w-full h-full">
  <img
    src={current.src}
    alt={`Slide ${page + 1}`}
    className="w-full h-full object-contain md:object-cover"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
</div>
            {/* Overlay text */}
            <div className="absolute top-1/2 left-1/2 w-full text-center transform -translate-x-1/2 -translate-y-1/2 text-white px-4">
              <motion.h2
                key={`title-${page}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-4xl font-bold"
              >
                {current.title}
              </motion.h2>
              <motion.p
                key={`desc-${page}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-2 text-sm md:text-lg"
              >
                {current.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() => paginate(-1)}
            className="bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
          >
            ←
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
          >
            →
          </button>
        </div>

        {/* Action Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={current.action}
            className="bg-white px-4 py-2 text-black rounded shadow hover:bg-gray-200"
          >
            Checkout 
          </button>
        </div>
      </div>
    </div>
  );
}
