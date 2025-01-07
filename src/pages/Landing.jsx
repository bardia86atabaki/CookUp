import React from "react";
import Btn from "../Components/btn";

function Landing() {
  return (
    <div className="p-8 flex gap-20 mt-28">
      <nav className="mb-8 l">
        <h1 className="text-2xl font-bold">Menu</h1>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="text-custom-Green">Home</li>
          <li>Recipe</li>
          <li>Community</li>
          <li>About Us</li>
        </ul>
      </nav>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Categories</h2>
        <ul className="flex flex-col gap-4 mt-5">
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Social</h2>
        <ul className="flex flex-col gap-4 mt-5">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div className="w-400px">
        <img src="src/Assets/Salad.png" alt="" />
      </div>
      <div className="mb-8">
   <div className="flex items-center">
   <h2 className="text-2xl font-bold">Sign up for our newsletter</h2>
   <img src="src/Assets/Fried Eggs.png" alt="" />
   </div>
        <div className="flex mt-20 gap-3">
          <input
            type="text"
            placeholder="Your Email Address"
            className="border  p-2"
          />
          <Btn>Submit</Btn>
        </div>
      </div>
    </div>
  );
}

export default Landing;
