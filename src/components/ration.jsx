import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        Coming Soon
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center">
        We’re working hard to bring something amazing. Stay tuned!
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
          Notify Me
        </button>
        <button className="border border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-gray-900 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
