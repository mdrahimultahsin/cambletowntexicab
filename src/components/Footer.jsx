import { Link } from "react-router";
import Container from "../shared/Container";
import { FaAngleDoubleRight, FaCar, FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoLocation, IoLogoWhatsapp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const serviceAreas = [
    "Campbelltown",
    "Macarthur",
    "Menangle",
    "Leumeah",
    "Raby",
    "St Andrew's",
    "St Helen's park",
    "Ruse",
    "Minto",
    "Ingleburn",
    "Glenfield",
    "Camden",
    "Camden south",
    "Oran park",
    "Gregory hills",
    "Eagle vale",
    "Elderslie",
    "Spring farm",
    "Cobbity",
    "Cowdor",
    "Denham court",
    "Edmondson park",
    "Austral",
    "Liverpool",
    "Picton",
    "Thilmere",
    "Bargo",
    "Bowral",
    "Goulburn",
    "Airds",
    "Gledswood Hills",
    "Leppington",
  ];

  return (
    <footer className=" text-white pt-5 pb-5 bg-linear-to-r from-[#003049] to-[#000e15]">
      <Container className="relative z-10">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
          <div>
            <Link to="/">
              <img
                className="w-25 md:w-40"
                src="/cambelltowntaxicabs-footer-logo.png"
                alt=""
              />
            </Link>
            <h3 className="mt-4 text-lg md:text-2xl  font-playfair text-primary font-bold ">
              About Us
            </h3>
            <p className="mt-2 ">
              Our fleet of professional drivers provides Maxi/Taxi Cab services
              in Sydney, Sydney Airport transfers, Taxi Cabs with car seats, and
              Maxi Cabs equipped with wheelchair access.
            </p>
          </div>
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl">
              <FaCar /> Premium Services
            </h2>
            <div>
              <ul className="mt-5 space-y-2">
                {service
                  .map((singleService) => (
                    <li
                      key={singleService.service_id}
                      className="flex items-center gap-2"
                    >
                      <FaAngleDoubleRight className="text-primary" size={20} />
                      {singleService.title}
                    </li>
                  ))
                  .slice(0, 7)}
              </ul>
            </div>
          </div>

          {/* location we coverer section */}
          <div className="">
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl mb-3">
              <FaMapLocationDot /> Covered Area
            </h2>
            <div className="grid grid-cols-2 gap-1">
              {serviceAreas.slice(0, 16).map((area, index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <FaAngleDoubleRight className="text-primary" />
                  <span className="text-sm md:text-base">{area}</span>
                </div>
              ))}
            </div>
          </div>


          {/* contact information */}
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl">
              <FaPhone /> Contact
            </h2>
            <div>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2">
                  <MdOutlineMailOutline className="text-primary" size={20} />
                  silvercabscampbelltown@gmail.com
                </li>
                <li>
                  <a href="tel:+1300450428" className="flex items-center gap-2">
                    <FaPhone className="text-primary" size={20} /> +61 469 885
                    961
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/01865775514" className="flex items-center gap-2" target="blank">
                  <IoLogoWhatsapp className="text-primary" size={20} /> +1300 450 428
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-b! border-t border-primary mt-10 hidden md:inline-block">
          <p className="text-justify  py-2">
            Disclaimer: Campbelltown Taxi Cabs, operating the website
            www.campbelltowntaxicabs.com.au , is a privately owned and operated
            booking and authorized service provider. Campbelltown Taxi Cabs is
            not associated or affiliated with any registered trademarks such as
            "Maxi Taxi" owned by Cabcharge Australia Limited or 13cabs
            Australia. To ensure timely service for our customers, we may
            utilize vehicles from authorized taxi companies such as 13cabs Maxi
            Taxi, Premier Maxi Taxi, Silver Top Maxi Taxi, GM Cabs, or other
            approved local taxi operators.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-center mt-5">
          <p className="text-center mt-6 md:mt-0">
            © 2025 cambletowntexicab. All Rights Reserved.
          </p>
          <div>
            <Link className="text-primary">Terms And Conditions</Link>
            <span> | </span>
            <Link className="text-primary">
              Privacy Policy Collection Statement
            </Link>
            <span> | </span>
            <Link className="text-primary">Cancellation And Refunds</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
