import { Link } from 'react-router-dom';
import logo from '/public/swan-white.svg';

function Footer() {
  return (
    <footer className="bottom-0 flex flex-col mx-auto w-full justify-center items-center text-black border-t-[.5px] border-gray-200 bg-white p-10 mt-10">
      <div className=" text-white break-word w-screen h-fit py-10 px-4 bg-red-800 text-center flex flex-col justify-center items-center md:flex-row md:gap-3 hover:tracking-wider transition-all ease-in-out duration-300 cursor-default group mb-5">
        <img
          src={logo}
          alt="SwanCom logo"
          className="swan w-[150px] h-auto object-cover transition-all duration-300 ease-in-out group-hover:translate-x-2 md:group-hover:-translate-x-2"
        />
        <div className="flex flex-col justify-center items-center">
          <span className="font-ballet text-6xl translate-y-2">Thank you</span>
          <span className="group-hover:italic font-button text-sm uppercase font-light">
            for purchasing with us
          </span>
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-4 lg:flex-row lg:gap-6  mb-10 md:mb-20 items-center mt-5 md:mt-10 transition-all duration-300 ease-in-out">
          <li className="block my-1 font-garamond text-lg uppercase text-black transition-all duration-50 ease-in-out hover:border-b-[1px] border-black hover:tracking-wide">
            <Link to="/">Home</Link>
          </li>
          <li className="block my-1 font-garamond text-lg uppercase text-black transition-all duration-50 ease-in-out hover:border-b-[1px] border-black hover:tracking-wide">
            <Link to="/products">Products</Link>
          </li>
          <li className="block my-1 font-garamond text-lg uppercase text-black transition-all duration-50 ease-in-out hover:border-b-[1px] border-black hover:tracking-wide">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex flex-col justify-between items-center mb-4 gap-4">
          <div className="flex flex-row gap-4">
            <span
              className="text-xs font-caslon text-black hover:border-b-[1px] border-black hover:tracking-wide cursor-pointer
            transition-all duration-50 ease-in-out"
            >
              Privacy Policy
            </span>
            <span
              className="text-xs font-caslon text-black hover:border-b-[1px] border-black hover:tracking-wide cursor-pointer
            transition-all duration-50 ease-in-out"
            >
              Terms of Service
            </span>
          </div>
          <div className="text-xs font-caslon text-gray-400 italic hover:tracking-wider hover:text-red-800 transition-all duration-300 ease-in-out cursor-default">
            <span className="pr-1">All rights reserved</span>
            <span className="font-ballet font-semibold text-base">
              {''}Swan
            </span>
            <span className="font-garamond font-black tracking-wide ">COM</span>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
