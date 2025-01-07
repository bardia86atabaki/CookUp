import React from "react";
import Star from '../Assets/Vector.png';

function Command({ commandtext, userName, userImage, rating, position }) {
  const RatingStar = Array.from({ length: rating });

  return (
    <div className={`w-[220px] h-[216px] bg-white absolute rounded-xl p-[8px] flex flex-col justify-between ${position}`}>
      <div className="bg-[#F1F3F7] w-full h-[150px] p-2 rounded-xl">
        <div className="flex">
          {RatingStar.map((_, index) => (
            <img key={index} src={Star} alt="star" className="w-4 h-4" />
          ))}
        </div>
        {commandtext}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-[30px] h-[30px] rounded-full flex overflow-hidden">
            <img src={userImage} alt="" className="w-full" />
          </div>
          <span>{userName}</span>
        </div>
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5063 18.3453L3.01888 10.6574C-1.59384 6.0447 5.18686 -2.81173 11.5063 4.35337C17.8257 -2.81173 24.5757 6.07545 19.9937 10.6574L11.5063 18.3453Z"
            stroke="black"
            strokeWidth="1.50225"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Command;
