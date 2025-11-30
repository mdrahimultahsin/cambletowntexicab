import {FaCar, FaPhoneVolume, FaWhatsapp} from "react-icons/fa";
import {LuInbox} from "react-icons/lu";
import {useNavigate} from "react-router";

const FloatingSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="z-50 fixed top-[300px] md:top-[300px] left-0 flex flex-col">
      {/* WhatsApp */}
      <a
        href="https://wa.me/61423963380"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-tr-md bg-green-500 cursor-pointer text-white transition-all duration-300 hover:w-16 hover:rounded-r-md"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Phone */}
      <a
        href="tel:+1300450428"
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-black hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 hover:w-16 hover:rounded-r-md"
      >
        <FaPhoneVolume size={20} />
      </a>

      {/* Email */}
      <a
        href="mailto:silvercabscampbelltown@gmail.com"
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#EA8A35] text-white cursor-pointer transition-all duration-300 hover:w-16 hover:rounded-r-md"
      >
        <LuInbox size={20} />
      </a>

      {/* Car / Services Page */}
      <div
        onClick={() => navigate("/book-a-taxi")}
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-br-md bg-primary text-white cursor-pointer transition-all duration-300 hover:w-16 hover:rounded-r-md"
      >
        <FaCar size={20} />
      </div>
    </div>
  );
};

export default FloatingSidebar;
