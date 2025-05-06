import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bottom-0 flex flex-col mx-auto w-full justify-center items-center text-white bg-amber-950 p-10 mt-10">
      <div className="p-10">Footer Logo</div>
      <nav>
        <ul className="flex flex-col gap-4 lg:flex-row lg:gap-6 mb-10 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex flex-col justify-between items-center mb-4">
          <div className="flex flex-row gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <p>All rights reserved</p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
