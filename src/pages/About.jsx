import React from "react";
import img1 from "../Assets/img1.png";

function About() {
  return (
    <div
      className="bg-cover bg-center h-[500px] rounded-md mt-32 relative flex items-center justify-between"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute top-1/2 right-28 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10 w-1/3">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Our recipes are the heart and soul of our culinary community, and they
          reflect our commitment to providing you with memorable and delightful
          dining experiences.
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>

      <div className="absolute bottom-8 left-10 transform bg-green-200 text-center py-2 px-4 rounded-lg">
        <p className="text-lg font-semibold">
          50+ Quick Food Recipes <br /> That Easy To Do!
        </p>
      </div>
    </div>
  );
}

export default About;
