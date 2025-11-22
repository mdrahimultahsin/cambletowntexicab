import React, { useState } from "react";
import TopHeader from "./TopHeader";
import MidHeader from "./MidHeader";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
     <header className="relative">
      <TopHeader />

      {/* SINGLE sticky wrapper */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <MidHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
