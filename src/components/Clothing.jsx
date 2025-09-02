import React, { useState , useEffect} from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
// Import images (replace with actual images of items)
import SuitingCloth from "../clothsimages/Rwhite.jpeg";
import CheckShirt from "../clothsimages/Rcheckshirt.avif";
import DupattaFabric from "../clothsimages/Rwhite.jpeg";
import WhiteSuitCloth from "../clothsimages/Rsuitkapda.jpeg";
import BlueShirt from "../clothsimages/Rblueshirt.webp"
import WarmPants from "../clothsimages/Rbluepantshirt.jpeg"
import BlueDuppata from "../clothsimages/Rblueduppata.jpeg";

export const products = [
  {
    id: "pant-shirt-white",
    title: "pant shirt (White)",
    description: "High-quality white suiting cloth ideal for formal wear.",
    price: "₹ 163",
    image: SuitingCloth,
  },
  {
    id: "check-shirt",
    title: "Check Shirt",
    description: "Trendy check-pattern shirt suitable for casual and semi-formal occasions.",
    price: "₹86",
    image: CheckShirt,
  },
  {
    id: "dupatta-fabric",
    title: "Dupatta Fabric",
    description: "Soft dupatta fabric available in multiple shades.",
    price: "₹52",
    image: DupattaFabric,
  },
  {
    id: "blue-shirts",
    title: "Blue shirts",
    description: "Blue shirt for formal and casual wear.",
    price: "₹163",
    image: BlueShirt,
  },
  {
    id: "blue-pant-shirt",
    title: "Blue pant shirt",
    description: "Thick and comfortable blue cotton pants and shirts.",
    price: "₹165",
    image: WarmPants,
  },
  {
    id: "white-suit-cloth",
    title: "White Suit Cloth",
    description: "Premium white cloth suitable for making suits.",
    price: "₹93",
    image: WhiteSuitCloth,
  },
  {
    id: "blue-duppata",
    title: "Blue Duppata",
    description: "Blue duppata for formal and casual wears.",
    price: "₹93",
    image: BlueDuppata,
  },
];


export default function ClothingCollection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      
      <br />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <div className="min-h-screen bg-white">
        <main className="max-w-screen-xl mx-auto px-0.5 py-4">
          <h1 className="text-3xl font-bold text-center mb-8">Clothing Collection</h1>

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
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-gray-800 font-semibold mb-4">{product.price}</p>
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
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg 
                     bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Clothes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                     focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                     rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
