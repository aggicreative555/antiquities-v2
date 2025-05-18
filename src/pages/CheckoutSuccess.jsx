import React, { useEffect, useState } from 'react';
import useCartStore from '../stores/cartStore';
import { Link } from 'react-router-dom';
import { showToast } from '../utils/toast';
import logo from '/public/swan.svg';

const CheckoutSuccess = () => {
  const rawCart = useCartStore((state) => state.cart);
  const [cartSnapshot, setCartSnapshot] = useState([]);
  const clearCart = useCartStore((state) => state.clearCart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartSnapshot(rawCart);

    const snapshotTotal = rawCart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    setTotal(Math.round(snapshotTotal));

    const handleUnload = () => {
      clearCart(); // cart clears after leaving the page
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => {
      clearCart(); // clears cart on route change
      setTimeout(() => {
        showToast.cartEmpty();
      }, 1000);
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return (
    <main className="container mx-auto px-8 flex flex-col items-center">
      <div className="flex flex-col gap-4 text-center justify-center items-center relative w-[400px] md:w-[800px] transition-all duration-300 ease-in-out">
        <img
          src={logo}
          alt="SwanCom logo"
          className="w-[100px] h-auto object-cover absolute -z-10 transition-all duration-300 ease-in-out left-8 top-12"
        />
        <h1 className="font-garamond text-red-800 text-4xl bread-word py-4 mb-4 uppercase max-w-[200px]">
          {' '}
          Your{' '}
          <span className="font-ballet font-bold text-6xl capitalize">
            purchase
          </span>{' '}
          was successful!
        </h1>
        <img
          src={logo}
          alt="SwanCom logo"
          className="w-[100px] h-auto object-cover absolute -z-10 transition-all duration-300 ease-in-out right-8 top-12 scale-x-[-1]"
        />
        <Link to="/products" className="btn-l text-lg btn-primary">
          {' '}
          Continue Shopping
        </Link>
      </div>
      <div className="relative mt-20 w-full">
        <button
          className="btn-l w-full justify-between px-8"
          aria-label="Toggle dropdown"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <h2 className="font-button text-lg uppercase">Purchase summary</h2>
          <div className="m-4 relative w-fit cursor-pointer">
            <span
              className={`h-1 w-4 rounded-full absolute bg-black transition-transform duration-150 ${dropdownOpen ? '-rotate-45' : 'rotate-45 '}`}
            ></span>
            <span
              className={`h-1 w-4 rounded-full absolute left-2 bg-black -rotate-45 transition-transform duration-150 ${dropdownOpen ? 'rotate-45' : ''}`}
            ></span>
          </div>
        </button>
      </div>
      <ul
        className={`bg-white rounded transition-all duration-300 ease-in-out overflow-hidden relative z-10 w-full ${
          dropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {cartSnapshot.map((product) => (
          <li
            key={product.id}
            className={`flex md:flex-row flex-col md:items-start w-full -z-10 gap-4 justify-between py-10 transition-all border-b-1 border-gray-300  ${dropdownOpen ? '' : '-translate-y-40 pointer-events-none'} `}
          >
            <div className="gap-6 flex flex-row">
              <img
                src={product.image?.url}
                alt={product.image?.alt}
                className="w-[120px] h-[120px] aspect-square object-cover"
              />
              <div className="flex flex-col justify-start items-start h-full  gap-2 w-full">
                <div className="flex flex-row justify-between w-full items-center">
                  <h2 className="font-garamond text-red-800 uppercase text-2xl">
                    {product.title}
                  </h2>
                </div>
                <p className="text-sm font-button uppercase text-bold">
                  {product.price} NOK
                </p>
              </div>
            </div>
          </li>
        ))}
        <p className="font-semibold font-button uppercase text-lg py-5 w-full border-b border-gray-300">
          You paid: {total} NOK{' '}
        </p>
      </ul>
    </main>
  );
};

export default CheckoutSuccess;
