import {FaFacebook, FaFacebookF, FaInbox, FaInstagram, FaPhoneAlt} from "react-icons/fa";
import Container from "../shared/Container";
import {FaXTwitter} from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-primary text-white py-3">
      <Container>
        <div className="flex items-center justify-between ">
          {/* Contact */}
          <div className="flex gap-6">
            <p className="flex items-center gap-2">
              <FaInbox /> silvercabscampbelltown@gmail.com
            </p>
            <p className="flex items-center gap-1">
              <FaPhoneAlt /> +61 469 885 961
            </p>
          </div>
          {/* Socials */}
          <div className="flex items-center gap-6">
            <a className="hover:scale-120 duration-75" href="https://facebook.com" target="_blank">
              <FaFacebook size={22} />
            </a>
            <a className="hover:scale-120 duration-75" href="https://instagram.com" target="_blank">
              <FaInstagram size={22}/>
            </a>
            <a className="hover:scale-120 duration-75" href="https://x.com" target="_blank">
              <FaXTwitter size={22}/>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
