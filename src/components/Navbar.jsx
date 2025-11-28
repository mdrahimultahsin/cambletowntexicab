import {NavLink} from "react-router";
import Container from "../shared/Container";
import {
  FaChevronDown,
  FaPlane,
  FaBaby,
  FaWheelchair,
  FaBriefcase,
  FaShip,
  FaGift,
  FaStar,
  FaBox,
  FaUsers,
  FaCrown,
  FaCar,
  FaBus,
} from "react-icons/fa";

import {useEffect, useRef, useState} from "react";

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef();
  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const navlinks = [
    {
      id: 1,
      label: "Home",
      pathname: "/",
    },
    {
      id: 2,
      label: "About Us",
      pathname: "/about",
    },
    {
      id: 3,
      label: "Services",
      pathname: "/services/book-taxi-sydney-airport",
      dropdowns: [
        {
          id: 1,
          label: "Book Taxi Sydney Airport",
          pathname: "/services/book-taxi-sydney-airport",
          icon: <FaPlane />,
          desc: "Quick rides to Sydney airport.",
        },
        {
          id: 2,
          label: "Baby Seat Taxi Sydney",
          pathname: "/services/baby-seat-taxi-sydney",
          icon: <FaBaby />,
          desc: "Family-friendly taxi service.",
        },
        {
          id: 3,
          label: "Wheelchair Accessible Taxi",
          pathname: "/services/wheelchair-accessible-taxi",
          icon: <FaWheelchair />,
          desc: "Accessible taxis for all passengers.",
        },
        {
          id: 4,
          label: "Corporate Transport Services",
          pathname: "/services/corporate-transport-services",
          icon: <FaBriefcase />,
          desc: "Professional transport for corporate clients.",
        },
        {
          id: 5,
          label: "Cruise Terminal Transfer",
          pathname: "/services/cruise-terminal-transfer",
          icon: <FaShip />,
          desc: "Timely transfers to cruise terminals.",
        },
        {
          id: 6,
          label: "Wedding Transfer",
          pathname: "/services/wedding-transfer",
          icon: <FaGift />,
          desc: "Comfortable wedding day transportation.",
        },
        {
          id: 7,
          label: "Event Transfer",
          pathname: "/services/event-transfer",
          icon: <FaStar />,
          desc: "Convenient transfers for events.",
        },
        {
          id: 8,
          label: "Parcel Delivery",
          pathname: "/services/parcel-delivery",
          icon: <FaBox />,
          desc: "Fast parcel pickup and delivery.",
        },
        {
          id: 9,
          label: "Maxi Taxi Service",
          pathname: "/services/maxi-taxi-service",
          icon: <FaUsers />,
          desc: "Large group taxi service.",
        },
        {
          id: 10,
          label: "Luxury Transfer",
          pathname: "/services/luxury-transfer",
          icon: <FaCrown />,
          desc: "Premium luxury travel experience.",
        },
        {
          id: 11,
          label: "Taxi Sydney Service",
          pathname: "/services/taxi-sydney-service",
          icon: <FaCar />,
          desc: "Reliable taxi service across Sydney.",
        },
        {
          id: 12,
          label: "Airport Shuttle",
          pathname: "/services/airport-shuttle",
          icon: <FaBus />,
          desc: "Comfortable airport shuttle rides.",
        },
        {
          id: 13,
          label: "Corporate Trips",
          pathname: "/services/corporate-tips",
          icon: <FaBriefcase />,
          desc: "Corporate long-distance trips.",
        },
      ],
    },
    {
      id: 4,
      label: "Book A Taxi Cab",
      pathname: "/book-a-taxi",
    },
    {
      id: 5,
      label: "Area We Covered",
      pathname: "/area-covered",
    },
    {
      id: 6,
      label: "Our Fleet",
      pathname: "/fleet",
    },
    {
      id: 7,
      label: "Cabcharge Taxi",
      pathname: "/cabcharge-taxi",
    },
    {
      id: 8,
      label: "Blogs",
      pathname: "/blogs",
    },

    {
      id: 9,
      label: "Contact Us",
      pathname: "/contact",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <nav className=" bg-secondary text-white ">
      <Container>
        <div className="">
          <ul className="hidden md:flex items-center justify-center gap-1">
            {navlinks.map((navlink) => (
  <li key={navlink.id} className="relative group">

    {/* MAIN NAV */}
    <NavLink
      to={navlink.pathname}
      className={({ isActive }) =>
        isActive
          ? "bg-white text-primary py-3 px-2 lg:px-4 font-medium flex items-center gap-1 text-center"
          : "py-3 px-2 lg:px-4 bg-transparent hover:bg-white hover:text-primary font-normal text-sm lg:text-base md:font-medium flex items-center gap-1 text-center"
      }
    >
      {navlink.label}
      {navlink.dropdowns?.length > 0 && <FaChevronDown size={12} />}
    </NavLink>

    {/* MEGA DROPDOWN FOR SERVICES */}
    {navlink.dropdowns && navlink.dropdowns.length > 0 && (
      <div
        className="
          absolute left-0 top-full bg-white text-black shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all z-50 p-6

          /* ✅ RESPONSIVE WIDTH FIX */
          w-[800px] max-lg:w-[600px] max-md:w-[95vw]

          /* CENTER DROPDOWN ON SMALL DEVICES */
          max-md:left-1/2 max-md:-translate-x-1/2
        "
      >
        <div
          className="
            grid grid-cols-3 gap-6
            /* ✅ RESPONSIVE GRID FIX */
            max-lg:grid-cols-2 
            max-md:grid-cols-1

            border-t border-b border-gray-300 py-4
          "
        >
          {/* SERVICE ITEM */}
          {navlink.dropdowns?.map((item) => (
            <NavLink
              key={item.id}
              to={item.pathname}
              onClick={() => {
                setOpenDropdown(!openDropdown);
              }}
              className="
                flex items-start gap-3 p-2 hover:bg-gray-100 rounded-lg

                /* ✅ MAKE EACH ITEM FULL-WIDTH ON MOBILE */
                max-md:flex-row max-md:w-full
              "
            >
              {/* ICON */}
              <div className="text-primary text-3xl">{item.icon}</div>

              <div>
                <h4 className="font-semibold text-black">{item.label}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    )}
  </li>
))}

          </ul>
        </div>

        <div
          className={`absolute right-0 w-1/2 bg-white text-black shadow z-999 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "top-16" : "-top-300"
          } max-h-[80vh] overflow-y-auto`}
          ref={menuRef}
        >
          <ul className="flex flex-col z-999 bg-white md:hidden gap-1 text-left">
            {navlinks.map((navlink) => (
              <li key={navlink.id} className="relative">
                <div
                  className="flex items-center justify-between py-3 pl-4 pr-4 cursor-pointer"
                  onClick={() =>
                    navlink.dropdowns?.length > 0
                      ? handleDropdownToggle(navlink.id)
                      : null
                  }
                >
                  <NavLink
                    to={navlink.pathname}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={({isActive}) =>
                      isActive
                        ? "text-primary font-medium flex-1"
                        : "font-medium text-black flex-1"
                    }
                  >
                    {navlink.label}
                  </NavLink>

                  {navlink.dropdowns?.length > 0 && (
                    <FaChevronDown
                      size={20}
                      className={`transition-transform ${
                        openDropdown === navlink.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {navlink.dropdowns && openDropdown === navlink.id && (
                  <ul className="bg-gray-100 text-black w-full shadow-inner">
                    {navlink.dropdowns.map((item) => (
                      <li key={item.id}>
                        <NavLink
                          to={item.pathname}
                          onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                            setOpenDropdown(!openDropdown);
                          }}
                          className="block px-6 py-2 hover:bg-primary hover:text-white border-b border-gray-300"
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
