import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bottom-0 flex flex-col mx-auto w-full justify-center items-center text-black border-t-[.5px] border-gray-200 bg-white p-10 mt-10">
      <div className="p-10">Footer Logo</div>
      <nav>
        <ul className="flex flex-col gap-4 lg:flex-row lg:gap-6 mb-20 items-center">
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
              className="text-xs font-caslon text-black hover:border-b-[1px] border-black hover:tracking-wide
            transition-all duration-50 ease-in-out"
            >
              Privacy Policy
            </span>
            <span
              className="text-xs font-caslon text-black hover:border-b-[1px] border-black hover:tracking-wide
            transition-all duration-50 ease-in-out"
            >
              Terms of Service
            </span>
          </div>
          <p className="text-xs font-caslon text-gray-400 italic">
            All rights reserved @SwanCom
          </p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
