import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import React, { useState } from 'react';
import logo from '/public/swan.svg';

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center px-6 md:px-12 transition-all duration-150 py-4">
        <Link
          to="/"
          className="p-1 relative hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <img
            src={logo}
            alt="SwanCom logo"
            className="w-[70px] h-auto object-cover transition-all duration-300 ease-in-out translate-y-3"
          />
          <span className="font-ballet font-medium text-[16px] ">Swan</span>
          <span className="font-garamond text-[12px] font-bold ">COM</span>
        </Link>
        <button
          aria-label="Toggle menu"
          className="m-3 flex gap-[6px] flex-col items-end min-md:hidden w-fit"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[2px] w-8 bg-black transition-transform duration-150 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-150 ${menuOpen ? 'opacity-0 translate-y-1' : ''}`}
          ></span>
          <span
            className={`h-[2px] w-8 bg-black transition-transform duration-150 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          <NavLinks />
        </ul>
      </nav>
      {/* Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-150 ease-in-out bg-white ${
          menuOpen
            ? 'max-h-96 opacity-100 pointer-events-auto bg-white'
            : 'max-h-0 opacity-0 pointer-events-none bg-white'
        }`}
      >
        <ul className="flex flex-col bg-white  justify-center items-center gap-4 px-4 py-10">
          <NavLinks />
        </ul>
      </div>
    </>
  );
}

export default NavBar;
