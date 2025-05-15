import React, { useEffect } from 'react';
import useCartStore from '../stores/cartStore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { showToast } from '../utils/toast';

const CheckoutSuccess = () => {
  const cart = useCartStore((state) => state.cart);
  const rawCart = useCartStore((state) => state.cart);
  const [cartSnapshot, setCartSnapshot] = useState([]);
  const clearCart = useCartStore((state) => state.clearCart);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setCartSnapshot(rawCart);

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
    <main className="container mx-auto px-8">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl py-4 mb-4"> Your purchase was successful! </h1>
        <Link
          to="/products"
          className="text-center p-4 border-amber-950 bg-white text-amber-950 border-2 w-full"
        >
          {' '}
          Continue Shopping
        </Link>
      </div>
      <div className="relative">
        <button
          className="flex w-full border-2 bg-white border-black flex-row justify-between items-center p-4 mt-8 group  cursor-pointer hover:bg-gray-200 rounded z-50"
          aria-label="Toggle dropdown"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <h2 className="">Purchase summary</h2>
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
        className={`bg-white rounded transition-all duration-300 ease-in-out overflow-hidden relative z-10 ${
          dropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {cartSnapshot.map((product) => (
          <li
            key={product.id}
            className={`flex md:flex-row flex-col md:items-center -z-10 gap-4 justify-between p-4 transition-all border-b-1 border-gray-400  ${dropdownOpen ? '' : '-translate-y-40 pointer-events-none'} `}
          >
            <div className="gap-6 flex flex-row">
              <img
                src={product.image?.url}
                alt={product.image?.alt}
                className="w-16 h-full object-cover rounded"
              />
              <div className="flex flex-col justify-start items-start h-full  gap-2 w-full">
                <div className="flex flex-row justify-between w-full items-center">
                  <h2 className="text-2xl border-b-0">{product.title}</h2>
                </div>
                <p className="text-sm text-gray-600">{product.price} NOK</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CheckoutSuccess;
