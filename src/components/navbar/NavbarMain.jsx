import React, { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full fixed top-2 left-1/2 -translate-x-1/2 z-20 px-4">
      <div className="mx-auto max-w-[1200px] w-full h-[60px] lg:h-[70px] bg-black border-2 border-orange-500 rounded-full flex items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <NavbarLinks menuOpen={true} />
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <NavbarBtn />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-xl p-2 border border-orange-500 rounded-full text-white"
          >
            <GiHamburgerMenu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-2 border-orange-500 mt-2 rounded-xl p-4">
          <NavbarLinks menuOpen={menuOpen} />
          <div className="mt-4">
            <NavbarBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMain;
