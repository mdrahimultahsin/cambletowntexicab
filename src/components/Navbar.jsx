import {NavLink} from "react-router";
import Container from "../shared/Container";
import {FaChevronDown} from "react-icons/fa";
import { useState } from "react";

const Navbar = ({isMenuOpen}) => {
        const [openDropdown, setOpenDropdown] = useState(null);
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
      pathname: "/services",
      dropdowns: [
        {id: 1, label: "Airport Transfer", pathname: "/services/airport"},
        {id: 2, label: "City Ride", pathname: "/services/city-ride"},
        {id: 3, label: "Hourly Booking", pathname: "/services/hourly"},
      ],
    },
    {
      id: 4,
      label: "Blogs",
      pathname: "/blogs",
    },
    {
      id: 5,
      label: "Our Fleet",
      pathname: "/fleet",
    },
    {
      id: 6,
      label: "Contact Us",
      pathname: "/contact",
    },
  ];
  return (
    <nav className="bg-secondary text-white ">
      <Container>
        <div className="">
          <ul className="hidden md:flex items-center justify-center gap-1">
            {navlinks.map((navlink) => (
              <li key={navlink.id} className="relative group">
                {/* MAIN NAV */}
                <NavLink
                  to={navlink.pathname}
                  className={({isActive}) =>
                    isActive
                      ? "bg-white text-primary py-3 px-4  font-medium flex items-center gap-1"
                      : "py-3 px-4 bg-transparent hover:bg-white hover:text-primary  font-medium flex items-center gap-1"
                  }
                >
                  {navlink.label}
                  {navlink.dropdowns?.length > 0 && <FaChevronDown size={12} />}
                </NavLink>

                {/* DROPDOWN */}
                {navlink.dropdowns && navlink.dropdowns.length > 0 && (
                  <ul className="absolute left-0 top-full bg-white text-black w-48 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {navlink.dropdowns.map((item) => (
                      <li key={item.id}>
                        <NavLink
                          to={item.pathname}
                          className="block px-4 py-2 hover:bg-primary hover:text-white"
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
     
        {/* Mobile Menu */}
<div
  className={`absolute top-28 left-0 h-full w-1/2 bg-white text-black shadow transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <ul className="flex flex-col md:hidden gap-1 text-left">
    {navlinks.map((navlink) => (
      <li key={navlink.id} className="relative">
        {/* MAIN NAV */}
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
            className={({ isActive }) =>
              isActive
                ? " text-primary font-medium flex-1"
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

        {/* DROPDOWN */}
        {navlink.dropdowns && openDropdown === navlink.id && (
          <ul className="bg-gray-100 text-black w-full shadow-inner">
            {navlink.dropdowns.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.pathname}
                  className="block px-6 py-2 hover:bg-primary hover:text-white"
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
