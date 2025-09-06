import React, { useEffect } from "react";

import mainn from "../clothsimages/wmanpower.jpg";

export default function Manpower() {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Manpower Outsourcing</h1>
      <img
        src= {mainn}
        alt= "manpower outsourcing"
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-gray-700 mb-6">Provision of all types of specialized workers and laborers for construction, repair, and support services, including plumbers, electricians, and other skilled trades</p>

      <h2 className="text-2xl font-semibold mb-4">Submit Your Query</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name of Organization</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your organization name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Product</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value= "manpower outsourcing"
            readOnly
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Query Now</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
            placeholder="Write your query here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
