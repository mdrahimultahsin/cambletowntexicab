import { FaCar, FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import { LuInbox } from "react-icons/lu";

const FloatingSidebar = () => {
  return (
    <div className="z-50 fixed top-[250px] left-0 flex flex-col">
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-tr-md bg-green-500 cursor-pointer text-white transition-all duration-300 hover:w-16 hover:rounded-r-md">
        <FaWhatsapp size={20} />
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-black hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 hover:w-16 hover:rounded-r-md">
        <FaPhoneVolume size={20} />
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#EA8A35] text-white cursor-pointer transition-all duration-300 hover:w-16 hover:rounded-r-md">
        <LuInbox size={20} />
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-br-md bg-primary text-white cursor-pointer transition-all duration-300 hover:w-16 hover:rounded-r-md">
        <FaCar size={20} />
      </div>
    </div>
  );
};

export default FloatingSidebar;
