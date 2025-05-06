import { NavLink} from 'react-router-dom';
import useCartStore from '../stores/cartStore';
import { useState, useEffect } from 'react';


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
    { to: '/checkout', label: 'Cart', isCart: true },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map(({ to, label, isCart }) => (
        <li key={to} className="relative">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `block py-1 transition-colors ${
                isActive ? 'text-amber-950 font-bold' : 'text-black hover:bg-amber-50'
              }`
            }
          >
            {label}
            {isCart && (
              <span
                aria-label="Cart item count"
                className={`
                  absolute -top-2 -right-3 bg-amber-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full
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
