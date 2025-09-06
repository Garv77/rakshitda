import React from "react";
import { useNavigate } from "react-router-dom";
import FramerMotion from "./framer";

import OfficeImage from "../clothsimages/wofficesupplies.jpg";
import Formal from "../clothsimages/wbacche.jpg";
import Essentials from "../clothsimages/wdailyusable.jpg";
import Manpower from "../clothsimages/wmanpower.jpg";
import Ration from "../clothsimages/Wrationsupplies.jpg"


const categories = [
  {
    title: "Office Supplies",
    description:
      "All essential office supplies including pens, notebooks, staplers, highlighters, and more.",
    image: OfficeImage,
    link: "/office-supplies",
  },
  {
    title: "Daily Usable Items",
    description:
      "Daily essentials for hostel or home use, like towels, water bottles, cleaning supplies, and personal care items.",
    image: Essentials,
    link: "/essentials",
  },
  {
    title: "Clothing",
    description:
      "A variety of clothing items including shirts, pants, cardigans, dupattas, and suiting fabric.",
    image: Formal,
    link: "/clothing",
  },
  {
    title : "Manpower Outsourcing" , description : "We help you provide right labours who are able to perform everytype of construction as well as non construction works.",
    image : Manpower,
    id : "manpower",
    link : "/manpower",
  },
  {
    title : "Ration" , description : "All type of daily use ration, including edibals are available. coming soon",
    image : Ration,
    id : "ration",
    link : "/ration",
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <FramerMotion />
      <div className="min-h-screen bg-gray-50 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Product Categories</h1>
        <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2">{cat.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{cat.description}</p>
                <button
                  onClick={() => navigate(cat.link)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-auto"
                >
                  Explore 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
