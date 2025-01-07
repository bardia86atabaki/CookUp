import React from 'react';

const Btn = ({ width = 'w-36', height = 'h-12', children }) => {
  return (
    <button
      className={` ${width} ${height} bg-custom-yellow text-white rounded-[10px] flex justify-center items-center font-bold text-sm cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Btn;
