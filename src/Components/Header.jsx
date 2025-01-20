import React from "react";
import { Link } from "react-router";

import brandLogo from "../assets/nike.svg";

export default function Header() {
  return (
    <nav className="h-[72px] max-w-7xl mx-auto flex justify-between items-center px-4">
      <div className="cursor-pointer">
        <Link to="/Home">
          <img src={brandLogo} alt="logo" className="size-20 text-red-700"/>
        </Link>
      </div>
      <ul className="flex gap-10 list-none text-3xl">
        <Link to="/About" className="hover:text-red-700">
          About
        </Link>
        <Link to="/Contact" className="hover:text-red-700">
          Contact
        </Link>
      </ul>

      <Link
        to="/Login"
        className="bg-[#d01c28] text-white text-3xl px-4 py-1.5 rounded-full"
      >
        Login
      </Link>
    </nav>
  );
}
