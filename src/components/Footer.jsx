import { Link } from "react-router-dom";
function Footer() {
   return (
          <footer className="container flex flex-col w-full justify-center items-center text-white bg-amber-950 fixed bottom-0 p-10" >
              <div className='p-10'>
                 Footer Logo
              </div>
              <nav>
                <ul className='flex flex-col gap-4'>
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
              </nav>
          </footer>
      )
  
}

export default Footer;
