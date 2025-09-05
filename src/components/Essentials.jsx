import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

// inside Essentials return()


// Corrected image imports with proper extensions


import locker from "../essentialimages/Rlocker.avif";
import towels from "../essentialimages/Rtowels.avif";
import personalCare from "../essentialimages/Rpersonalcare.avif";
import brush from "../essentialimages/Rbrush.avif";
import cleaning from "../essentialimages/Rcleaning.avif";
import bucket from "../essentialimages/Rbucket.avif";

import rbedsheet from "../essentialimages/wmattress.jpg";
import rpillow from "../essentialimages/wpillow.jpg";
import rpepsodant from "../clothsimages/wpepsodant.jpg";
import rcloseup from "../clothsimages/wcloseup.jpg";
import rlifeboy from "../clothsimages/wlifeboy.jpg";
import rsos from "../clothsimages/wsos.jpg";
import rsurf from "../clothsimages/wsurf.jpg";
import rvim from "../clothsimages/wvim.jpg";

export const products = [
  {
    id: "pepsodant",
    title: "Pepsodent",
    description: "Pepsodent toothpaste for healthy and clean teeth.",
    image: rpepsodant,
  },
  {
    id: "lifeboy-soap",
    title: "Lifeboy Soap",
    description: "Lifeboy soap for daily hygiene and fresh skin.",
    image: rlifeboy,
  },
  {
    id: "sos-scrub",
    title: "SOS Scrub Pads",
    description: "Durable SOS pads for cleaning utensils effectively.",
    image: rsos,
  },
  {
    id: "surf-detergent",
    title: "Surf Detergent",
    description: "High-quality detergent powder for laundry cleaning.",
    image: rsurf,
  },
  {
    id: "vim-liquid",
    title: "Vim",
    description: "Vim liquid for sparkling clean dishes.",
    image: rvim,
  },
  {
    id: "closeup",
    title: "Closeup",
    description: "Closeup toothpaste for strong and fresh teeth.",
    image: rcloseup,
  },
  {
    id: "bed-sheets",
    title: "Bed Sheets",
    description: "Comfortable bed sheets, mattresses, and covers for a good night's sleep.",
    image: rbedsheet,
  },
  {
    id: "pillows",
    title: "Pillows",
    description: "Comfortable and soft pillows for a good night's sleep.",
    image: rpillow,
  },
  {
    id: "towels",
    title: "Towels",
    description: "Soft bath and hand towels, quick-drying and durable for everyday use.",
    image: towels,
  },
  {
    id: "trunks-lockers",
    title: "Trunks & Lockers",
    description: "Secure storage trunks and lockers for students to keep belongings safe.",
    image: locker,
  },

  {
    id: "buckets-mugs",
    title: "Buckets & Mugs",
    description: "Strong plastic buckets, mugs, and jugs for bathing and storage use.",
    image: bucket,
  },

 
];


export default function Essentials() {
  const [searchTerm, setSearchTerm] = useState("");
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
       <br />
      <br />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <br />
      <div className="min-h-screen bg-white">
        <main className="max-w-screen-xl mx-auto px-0.5 py-4">
          <h1 className="text-3xl font-bold text-center mb-8">Daily Usable Items</h1>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="mx-auto mb-4 rounded-lg object-cover h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full"
                  />
                  <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    <Link to={`/product/${product.id}`}>View Details</Link>

                  </button>
                </div>
              ))
            ) : (
              <p className="col-span-2 text-center text-gray-500">
                No matching items found
              </p>
            )}
          </div>
        </main>
      </div>
      
    </>
  );
}

function SearchForm({ searchTerm, setSearchTerm }) {
  return (
    <form className="max-w-md mx-auto bg-white" onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-black sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Essentials..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}