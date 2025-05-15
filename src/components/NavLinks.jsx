import { NavLink } from 'react-router-dom';
import useCartStore from '../stores/cartStore';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faBugSlash, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavLinks() {
  const itemCount = useCartStore((state) => state.getItems());
  const [animate, setAnimate] = useState(false);

  // animation when cart amount increases
  useEffect(() => {
    if (itemCount > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [itemCount]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/checkout', 
      label: <FontAwesomeIcon icon={faBasketShopping}/>, 
      isCart: true },
  ];

  return (
    <>
      {links.map(({ to, label, isCart }) => (
        <li key={to} className="relative  bg-white ">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `block my-1 font-garamond text-lg uppercase text-black transition-all duration-50 ease-in-out ${
                isActive
                  ? 'text-red-900 font-bold border-b-[1px] border-red-900 hover:text-black hover:border-black hover:tracking-wider'
                  : 'text-black hover:border-b-[1px] border-black hover:tracking-wide'
              }`
            }
          >
            {label}
            {isCart && (
              <span
                aria-label="Cart item count"
                className={`
                  absolute -top-2 -right-3 bg-red-900 text-white font-button text-xs w-5 h-5 flex items-center justify-center rounded-full
                  transition-all duration-300
                  ${itemCount > 0 ? 'block' : 'hidden'}
                  ${animate ? 'animate-bounce' : ''}
                `}
              >
                {itemCount}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
