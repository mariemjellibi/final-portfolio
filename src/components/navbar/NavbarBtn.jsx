import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

// const NavbarBtn = () => {
//   return (
//     <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-2 border-cyan-500 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-orange-400 hover:border-orange-400 hover:scale-110 transition-transform duration-200">
//       Hire me <LuArrowDownRight />
//     </button>
//   );
// };
const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-2 border-cyan-500 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-orange-400 hover:border-orange-400 hover:scale-110 transition-transform duration-200
      sm:w-full sm:justify-center sm:flex
    ">
      Hire me <LuArrowDownRight />
    </button>
  );
};
export default NavbarBtn;
