import React from "react";
import Btn from "../Components/btn";
import Command from "../Components/Command";
import userProfile from "../Assets/image 4.png";

function Home() {
  return (
    <div className="flex justify-between items-center relative">
      <div className="h-full flex flex-col justify-around w-1/2 leading-[80px] relative">
        <h1 className="font-bold text-[4rem]">Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
        <p className="leading-[24px] font-light text-custom-gray">
          Discover more than <span className="text-custom-yellow">10,000 recipes</span>.
        </p>
        <Btn width="w-48" height="h-16">Explore Recipes</Btn>
      </div>
      <div className="w-1/2 relative">
        <img src="src/Assets/Tomato.png" alt="Tomato" className="w-[100px]" />
        <img src="src/Assets/1.png" alt="Dish" className="relative w-full z-0" />
        
        <Command
          commandtext="The recipes here are not only delicious but also easy to follow."
          userName="Sarah M."
          userImage={userProfile}
          rating={5}
          position="top-[60vh] left[5px]"
        />
        
        <Command
          commandtext="I've discovered a treasure trove of meatless recipes that have made my meals."
          userName="Farelin J."
          userImage={userProfile}
          rating={5}
          position="top-[50vh] left-[60%] transform -translate-x-1/2"
        />
        
        <img src="src/Assets/Broccoli.png" alt="Broccoli" className="absolute right-0 w-[100px]" />
      </div>   
    </div>
  );
}

export default Home;
