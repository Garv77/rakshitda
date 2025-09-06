import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <p className="mb-6 text-lg leading-relaxed">
          <strong>Neem Karoli Traders pvt ltd</strong> is a multi-supply firm dedicated to delivering quality products and services that meet everyday needs. With a strong focus on reliability and customer satisfaction, we have built our name as a trusted partner across clothing uniforms, daily-use essentials, manpower solutions, and stationery supplies.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Our mission is simple: to provide dependable, affordable, and timely supply solutions that help organizations, institutions, and individuals focus on what they do best—while we take care of their requirements.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mt-10">
          <div>
            <h2 className="text-xl font-semibold mb-2">👕 Clothing & Uniforms</h2>
            <p className="text-gray-700">From school to corporate uniforms, we ensure comfort, durability, and the right fit.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🛒 Daily-Use Supplies</h2>
            <p className="text-gray-700">Essential goods delivered with consistency and care.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🧑‍🔧 Manpower Supply</h2>
            <p className="text-gray-700">Skilled and reliable workforce tailored to client needs.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">✏️ Stationery Supply</h2>
            <p className="text-gray-700">Complete range of office and educational stationery, always on hand.</p>
          </div>
        </div>

        <p className="mt-10 text-lg leading-relaxed">
          Backed by a dedicated team and guided by the values of integrity and commitment, Neem Karoli stands as a one-stop solution for diverse supply needs.
        </p>

        <p className="mt-4 text-lg leading-relaxed font-medium">
          We don’t just deliver products—we deliver trust, quality, and long-lasting partnerships.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
