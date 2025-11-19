import React, {useState} from "react";
import TopHeader from "./TopHeader";
import MidHeader from "./MidHeader";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <TopHeader />
      <MidHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </header>
  );
};

export default Header;
