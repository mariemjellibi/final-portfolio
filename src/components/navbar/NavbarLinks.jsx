import React from "react";
import { Link } from "react-scroll";

const Links = [
  { link: "About me", section: "about" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
  { link: "Experience", section: "experience" },
  { link: "Education", section: "education" },
  { link: "Skills", section: "skills" },
];
const NavbarLinks = ({ menuOpen }) => {
  return (
    <ul
      className={`font-bold text-center items-center
        ${menuOpen ? "flex flex-col gap-4 py-4" : "hidden"}
        lg:flex lg:flex-row lg:gap-6 lg:py-0
        text-white transition-all duration-300`}
    >
      {Links.map((link, index) => (
        <li key={index} className="group">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to={link.section}
            className="cursor-pointer hover:text-cyan-500 transition-colors duration-300 block py-2 px-4"
            onClick={() => {
              // Optional: close menu on click if you want
            }}
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

// const NavbarLinks = ({ menuOpen }) => {
//   return (
//     <ul
//       className={`
//         lg:flex lg:gap-6 font-bold text-center py-4
//         lg:flex-row

//         sm:flex-col sm:absolute sm:top-full sm:left-0 sm:w-full sm:bg-black sm:rounded-lg sm:shadow-lg sm:p-4 sm:transition-all sm:duration-300
//         ${menuOpen ? "flex" : "hidden"}
//       `}
//     >
//       {Links.map((link, index) => (
//         <li key={index} className="group">
//           <Link
//             spy={true}
//             smooth={true}
//             duration={500}
//             offset={-120}
//             to={link.section}
//             className="cursor-pointer hover:text-cyan-500 transition-colors duration-300"
//           >
//             {link.link}
//           </Link>
//           <div className="mx-auto bg-cyan-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
//         </li>
//       ))}
//     </ul>
//   );
// };


export default NavbarLinks;
