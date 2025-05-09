import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import React, { useState } from 'react';

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center px-4 transition-all duration-150 py-4 bg-white sticky top-0">
        <Link to="/" className="p-4">
          {' '}
          Logo
        </Link>
        <button
          aria-label="Toggle menu"
          className="m-3 flex gap-[6px] flex-col min-md:hidden w-fit"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-1 w-8 rounded-full bg-black transition-transform duration-150 ${menuOpen ? 'rotate-45 translate-y-3' : ''}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black transition-transform duration-150 ${menuOpen ? 'opacity-0 translate-y-1' : ''}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black transition-transform duration-150 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
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
          menuOpen ? 'max-h-96 opacity-100 pointer-events-auto bg-white' 
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
