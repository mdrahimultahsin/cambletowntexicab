import React from "react";

const ButtonSecondary = ({children, onClick,className}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 md:px-6 py-2 md:py-3 bg-secondary text-white rounded-md gap-1! md:gap-2! hover:bg-primary transition text-sm md:text-base cursor-pointer font-medium md:font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
