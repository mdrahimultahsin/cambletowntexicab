import {Link} from "react-router";
import Container from "../shared/Container";
import {
  FaAngleDoubleRight,
  FaBuilding,
  FaCar,
  FaHandshake,
  FaPhone,
  FaUserFriends,
} from "react-icons/fa";
import {MdOutlineMailOutline, MdOutlineMessage} from "react-icons/md";
import {useEffect, useState} from "react";
import {IoLogoWhatsapp} from "react-icons/io5";
import {FaLocationDot, FaMapLocationDot} from "react-icons/fa6";
import Loading from "../shared/Loading";

const Footer = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      })
      .catch(() => {
        setLoading(false);
      });
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
                src="/campbelltowntaxicabs-footer-logo.png"
                alt="Campbelltown Taxi Cabs"
              />
            </Link>
            <h3 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl mt-4 mb-3">
              <FaUserFriends />
              About Us
            </h3>
            <p className="mt-2 ">
              Our fleet of professional drivers provides Taxi Cab services in
              Sydney, Sydney Airport transfers, Taxi Cabs with car seats, and
              Maxi Cabs equipped with wheelchair access.
            </p>
          </div>
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl">
              <FaCar /> Premium Services
            </h2>
            <div>
              <ul className="mt-5 space-y-2">
                {loading ? (
                  <Loading />
                ) : (
                  services
                    .map((singleService) => (
                      <Link
                        to={`${singleService.pathname}`}
                        key={singleService.service_id}
                        className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
                      >
                        <FaAngleDoubleRight
                          className="text-primary"
                          size={20}
                        />
                        {singleService.title}
                      </Link>
                    ))
                    .slice(0, 7)
                )}
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
                <Link
                  to="/area-covered"
                  key={index}
                  className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
                >
                  <FaAngleDoubleRight className="text-primary" />
                  <span className="text-sm md:text-base">{area}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* contact information */}
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl">
              <FaPhone /> Contact
            </h2>
            <div>
              <ul className="mt-5 space-y-3">
                <li className="flex items-center gap-2">
                  <FaLocationDot className="text-primary" size={20} /> 1 Hurley
                  St, Campbelltown, Australia
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="mailto:silvercabscampbelltown@gmail.com"
                    className="hover:underline flex items-center gap-2 break-all"
                  >
                    <MdOutlineMailOutline className="text-primary" size={20} />
                    silvercabscampbelltown@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:1300450428" className="flex items-center gap-2">
                    <FaPhone className="text-primary" size={20} /> 1300 450 428
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/61423963380"
                    className="flex items-center gap-2"
                    target="blank"
                  >
                    <IoLogoWhatsapp className="text-primary" size={20} /> +61
                    423 963 380
                  </a>
                </li>
                <li>
                  <a
                    href="sms:+61423963380"
                    className="flex items-center gap-2"
                    target="blank"
                  >
                    <MdOutlineMessage className="text-primary" size={20} /> Send
                    Message
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
            Taxi, Premier Maxi Taxi, Campbelltown Top Maxi Taxi, GM Cabs, or
            other approved local taxi operators.
          </p>
        </div>
        <div className="flex flex-col-reverse  md:flex-row md:justify-between md:items-center mt-5">
          <p className="text-center mt-3  md:mt-0">
            © 2025 Campbelltown Taxi Cabs. All Rights Reserved.
          </p>
          <div className="text-center">
            <Link to={`/terms-and-condition`} className="text-primary">
              Terms And Conditions
            </Link>
            <span> | </span>
            <Link to={`privacy-policy`} className="text-primary">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link to={`cancellation-and-refunds`} className="text-primary">
              Cancellation And Refunds
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
