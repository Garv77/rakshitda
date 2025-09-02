import React, { useState , useEffect } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
// Import images
import Ra4 from "../officeimages/Ra4.avif";
import Rpen from "../officeimages/Rpen.avif";
import Rnotebooks from "../officeimages/Rnotebooks.avif";
import Rstapler from "../officeimages/Rstapler.avif";
import Rhighliters from "../officeimages/Rhighliters.avif";
import Rfilefolder from "../officeimages/Rfilefolder.avif";
import Rmarker from "../officeimages/Rmarker.avif";
import Rclips from "../officeimages/Rclips.avif";
import Rscissor from "../officeimages/Rscissor.avif";

export const products = [
  {
    id: "a4-sheets",
    title: "A4 Sheets",
    description:
      "High-quality multipurpose A4 paper suitable for printing, photocopying, and everyday office use. Ensures smooth performance without jams.",
    image: Ra4,
  },
  {
    id: "pens",
    title: "Pens",
    description:
      "Durable and smooth-writing pens designed for long hours of writing. Ideal for students, professionals, and daily office work.",
    image: Rpen,
  },
  {
    id: "notebooks",
    title: "Notebooks",
    description:
      "Premium spiral-bound notebooks for organized note-taking and journaling. Sturdy covers and quality paper for a neat writing experience.",
    image: Rnotebooks,
  },
  {
    id: "stapler",
    title: "Stapler",
    description:
      "Heavy-duty stapler with smooth action for binding documents securely. Compact design suitable for office desks and travel use.",
    image: Rstapler,
  },
  {
    id: "highlighters",
    title: "Highlighters",
    description:
      "Bright, smudge-resistant highlighters available in assorted colors. Perfect for marking important notes and study materials.",
    image: Rhighliters,
  },
  {
    id: "files-folders",
    title: "Files & Folders",
    description:
      "Durable and spacious office files and folders for organizing documents. Lightweight and easy to carry for meetings and storage.",
    image: Rfilefolder,
  },
  {
    id: "whiteboard-markers",
    title: "Whiteboard Markers",
    description:
      "Long-lasting dry erase markers with vibrant ink that wipes clean easily. Essential for meetings, classrooms, and brainstorming sessions.",
    image: Rmarker,
  },
  {
    id: "paper-clips",
    title: "Paper Clips",
    description:
      "Rust-resistant, durable paper clips for bundling documents together. Essential stationery item for every office desk.",
    image: Rclips,
  },
  {
    id: "scissors",
    title: "Scissors",
    description:
      "Sharp and ergonomic office scissors designed for cutting paper, packaging, and other materials with ease and precision.",
    image: Rscissor,
  },
];


export default function OfficeSupplies() {
  const [searchTerm, setSearchTerm] = useState("");
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filteredProducts = products.filter(
    (product) =>
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
          <h1 className="text-3xl font-bold text-center mb-8">Office Supplies</h1>

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
        className="mb-2 text-sm font-medium text-black sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg 
                     bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Office Supplies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                     focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                     rounded-lg text-sm px-4 py-2 
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
