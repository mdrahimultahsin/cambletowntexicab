import React from "react";

const Button = ({children, onClick,className}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 md:px-6 py-2 md:py-3 bg-secondary text-white rounded-md hover:bg-primary transition cursor-pointer font-medium md:font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
