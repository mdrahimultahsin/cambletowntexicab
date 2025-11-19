import {
  FaFacebook,
  FaFacebookF,
  FaInbox,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import Container from "../shared/Container";
import {FaXTwitter} from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-primary text-white py-3">
      <Container>
        <div className="flex items-center justify-between ">
          {/* Contact */}
          <div className="flex-1 flex justify-between md:justify-start gap-6 ">
            <p className="flex items-center gap-2 text-xs md:text-sm lg:text-base">
              <FaInbox /> silvercabscampbelltown@gmail.com
            </p>
            <p className="flex items-center gap-1  text-xs md:text-sm lg:text-base">
              <FaPhoneAlt /> +61 469 885 961
            </p>
          </div>
          {/* Socials */}
          <div className="hidden md:flex items-center gap-6 ">
            <a className="hidden md:block hover:scale-120 duration-75" href="">
              <FaFacebook size={22} />
            </a>
            <a className="hidden md:block hover:scale-120 duration-75" href="">
              <FaInstagram size={22} />
            </a>
            <a className="hidden md:block hover:scale-120 duration-75" href="">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
