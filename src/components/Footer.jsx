import {Link} from "react-router";
import footerImg from "../assets/footer.jpg";
import Container from "../shared/Container";
import {FaAngleDoubleRight, FaCar, FaPhone} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center relative text-white pt-20 pb-5"
      style={{backgroundImage: `url(${footerImg})`}}
    >
      {/* Overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-0"></div>

      <Container className="relative z-10">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
          <div>
            <Link>
              <img className="w-25 md:w-35" src="/logo.png" alt="" />
            </Link>
            <p>
              Our fleet of professional drivers provides Maxi/Taxi Cab services
              in Sydney, Sydney Airport transfers, Taxi Cabs with car seats, and
              Maxi Cabs equipped with wheelchair access.
            </p>
          </div>
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl">
              <FaCar /> Services
            </h2>
            <div>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} />{" "}
                  Sydney Airport Transfer
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Taxi
                  Cabs with Car Seat
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Maxi
                  Cabs with Wheelchair Seat
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Maxi
                  Cabs with Wheelchair Seat
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Maxi
                  Cabs with Wheelchair Seat
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl">
              <FaCar /> Premium Services
            </h2>
            <div>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} />{" "}
                  Sydney Airport Transfer
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Taxi
                  Cabs with Car Seat
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Maxi
                  Cabs with Wheelchair Seat
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Maxi
                  Cabs with Wheelchair Seat
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-primary" size={20} /> Maxi
                  Cabs with Wheelchair Seat
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl">
              <FaPhone /> Contact
            </h2>
            <div>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2">
                  <MdOutlineMailOutline className="text-primary" size={20} />{" "}
                  silvercabscampbelltown@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-primary" size={20} /> +61 469 885 961
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-primary" size={20} /> +1300 450 428
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <p className="text-center">© 2025 cambletowntexicab. All Rights Reserved.</p>
          <div className="flex justify-between items-center mt-5">
            <Link>Terms And Conditions</Link>
            <Link>Privacy Policy Collection Statement</Link>
            <Link>Cancellation And Refunds</Link>
            <Link>Collection Statement</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
