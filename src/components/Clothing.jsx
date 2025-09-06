import React, { useState , useEffect} from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
// Import images (replace with actual images of items)
import DupattaFabric from "../clothsimages/rakwhiteduppata.jpg";
import BlueDuppata from "../clothsimages/Rblueduppata.jpeg";
import wblazer from "../clothsimages/wblazer.jpg";
import wblueduppata from "../clothsimages/wblueduppata.jpg";
import wbluepant from "../clothsimages/wbluepant.jpg";
import wboyshoes from "../clothsimages/wboyshoes.jpg";
import wcheckshirt from "../clothsimages/wcheckshirt.jpg";
import wgirlshoe from "../clothsimages/wgirsshoe.jpg";
import whouseshirt from "../clothsimages/whouseshirt.jpg";
import wnavyskirt from "../clothsimages/wnavyskirt.jpg";
import wshirtwhite from "../clothsimages/wshirtwhite.jpg";
import wtracksuit from "../clothsimages/wtracksuit.jpg";
import wbag from "../clothsimages/wschoolbag.jpg";

export const products = [
  {
    id: "shirt-white",
    title: "Shirt (White)",
    description: "High-quality white suiting cloth ideal for formal wear.",
    image: wshirtwhite,
  },
  {
    id: "check-shirt",
    title: "Check Shirt",
    description: "Trendy check-pattern shirt suitable for casual and semi-formal occasions.",
    image: wcheckshirt,
  },
  {
    id: "white-duppata",
    title: "white duppata",
    description: "Soft dupatta fabric available in multiple shades.",
    image: DupattaFabric,
  },
  {id : "customizable-bag" , title : "Customizable bags" , description : "Fully Customizable bags , customize according to need." , image : wbag},
 
  {
    id: "blue-pant",
    title: "Blue Pant",
    description: "Thick and comfortable blue cotton pants.",
    image: wbluepant,
  },
  {
    id: "house-shirt",
    title: "House Shirt",
    description: "Casual house shirt for everyday wear.",
    image: whouseshirt,
  },
  {
    id: "blazer",
    title: "Blazer",
    description: "Stylish blazer for formal occasions.",
    image: wblazer,
  },
  {
    id: "navy-skirt",
    title: "Navy Skirt",
    description: "Comfortable navy skirt for school or casual wear.",
    image: wnavyskirt,
  },
  {
    id: "tracksuit",
    title: "Tracksuit",
    description: "Comfortable tracksuit for sports and daily wear.",
    image: wtracksuit,
  },
  {
    id: "boy-shoes",
    title: "Boy Shoes",
    description: "Durable shoes for boys, suitable for daily use.",
    image: wboyshoes,
  },
  {
    id: "girl-shoes",
    title: "Girl Shoes",
    description: "Comfortable shoes for girls, ideal for school and casual wear.",
    image: wgirlshoe,
  },
  {
    id: "blue-duppata-variant",
    title: "Blue Duppata Variant",
    description: "Another blue duppata option for formal and casual wear.",
    image: wblueduppata,
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
