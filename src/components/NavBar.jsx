import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import React, {useState} from "react";

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="container mx-auto flex justify-between items-center p-4">
        <Link path='/' className='p-4'> Logo
        </Link>
        <button aria-label='Toggle menu' className="m-3 flex gap-2 flex-col min-md:hidden w-fit" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`h-2 w-11 rounded-full bg-black transition-transform duration-150 ${menuOpen ? 'rotate-45 translate-y-4' : ''}`}></span>
            <span className={`h-2 w-11 rounded-full bg-black transition-transform duration-150 ${menuOpen ? 'opacity-0 translate-y-2' : ''}`}></span>
            <span className={`h-2 w-11 rounded-full bg-black transition-transform duration-150 ${menuOpen ? '-rotate-45 -translate-y-4' : ''}`}></span>
        </button>
        {/* Desktop */}
        <ul className='hidden md:flex gap-6'>
            <NavLinks/>
        </ul>
        {/* Mobile */}
        <ul className={`flex flex-col gap-4 mt-4 md:hidden transition-all duration-150 ease-in-out ${menuOpen ? 'h-full block opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
            <NavLinks/>
        </ul>
    </nav>
  );
}

export default NavBar;
