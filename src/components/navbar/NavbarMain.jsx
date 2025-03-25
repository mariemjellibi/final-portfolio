import React, { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="max-w-[1300px] mx-auto px-4 w-full fixed left-1/2 -translate-x-1/2 z-20 flex justify-between items-center mt-2">
      {/* Navbar principale */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-full border-2 border-orange-500">
        <NavbarLogo />
        <div className="hidden lg:flex">
          <NavbarLinks menuOpen={true} />
        </div>
        <NavbarBtn />
      </div>

      {/* Menu hamburger (visible uniquement sur petits écrans) */}
      <div className="lg:hidden block bg-black text-white p-3 rounded-full border-2 border-orange-500 cursor-pointer">
        <button
          onClick={toggleMenu}
          className="text-2xl p-3 border border-orange-500 rounded-full text-white"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu - Appears below navbar */}
      <div className="lg:hidden absolute top-[70px] left-0 w-full">
        <NavbarLinks menuOpen={menuOpen} />
      </div>
    </div>
  );
};

export default NavbarMain;
