const ButtonPrimary = ({children, onClick,className,type}) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={`px-4 md:px-6 py-2 md:py-3 gap-1! md:gap-2! bg-primary text-white rounded-md hover:bg-secondary transition cursor-pointer font-medium md:font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
