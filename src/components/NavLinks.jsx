import { NavLink } from 'react-router-dom';
function NavLinks() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/checkout', label: 'Cart' },
    { to: '/contact', label: 'Contact' },
  ];

  return links.map(({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block py-1 transition-colors 
            ${isActive ? 'text-red-700 font-bold' : 'text-black hover:bg-amber-50'}`
        }
      >
        {label}
      </NavLink>
    </li>
  ));
}

export default NavLinks;
