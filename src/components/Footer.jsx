import {Link} from "react-router";
import Container from "../shared/Container";
import {FaAngleDoubleRight, FaCar, FaPhone} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className=" text-white pt-20 pb-5 bg-linear-to-r from-[#003049] to-[#000e15]">

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

        <div className="border-y-1 border-primary mt-10">
          <p className="text-justify  py-2">Disclaimer: TipTop Transport Solutions operating website www.tiptopmaxisydney.com.au is a privately owned and operated as Booking and Authorized service provider, TipTop is not associated or affiliated with the registered trademark “Maxi Taxi” owned by Cab charge Australia Limited or 13cabs Australia. To provide customer on time service, we might use vehicle from Taxi companies like 13cabs Maxi Taxi, Premier Maxi Taxi, Silver Top Maxi Taxi, GM Cabs or Any Other Authorized Taxi Cabs which is approved by local Transport Company.</p>
        </div>
          <div className="flex justify-between items-center mt-5">
            
          <p className="text-center ">© 2025 cambletowntexicab. All Rights Reserved.</p>
            <div>
            <Link className="text-primary">Terms And Conditions</Link> <span> | </span>
            <Link className="text-primary">Privacy Policy Collection Statement</Link> <span> | </span>
            <Link className="text-primary">Cancellation And Refunds</Link>
            </div>
          </div>
      </Container>
    </footer>
  );
};

export default Footer;
