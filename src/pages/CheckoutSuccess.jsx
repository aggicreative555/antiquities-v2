import React from 'react';
import useCartStore from '../stores/cartStore';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  const cart = useCartStore((state) => state.cart);
   const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <main className="container mx-auto px-8">
      <div className="flex flex-col gap-4 text-center">
        <h1 className='text-2xl py-4 mb-4'> Your purchase was successful! </h1>
        <Link to="/products" className="text-center p-4 border-amber-950 bg-white text-amber-950 border-2 w-full"> Continue Shopping
        </Link>
      </div>
      <div className="relative">
        <button className='flex bg-white border-black flex-row justify-between w-full p-4 mt-8 group transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-200 rounded z-50'
          aria-label="Toggle dropdown"
          onClick={() => setDropdownOpen(!dropdownOpen)}
              >
          <h2 className=''>Purchase summary</h2>
          <div className="m-4 relative min-md:hidden w-fit cursor-pointer">
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
        className={`transition-all duration-300 ease-in-out bg-white rounded overflow-hidden relative z-10 ${
          dropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        >
        {cart.map((product) => (
          <li
          key={product.id}
          className={`flex md:flex-row flex-col md:items-center -z-10 gap-4 justify-between p-4 border-b-1 border-gray-400 transition-all duration-50 ${dropdownOpen ? '' : '-translate-y-20 pointer-events-none'} `}>
          <div className="gap-6 flex flex-row">
            <img
              src={product.image?.url}
              alt={product.image?.alt}
              className="w-16 h-full object-cover rounded"
            />
            <div className='flex flex-col justify-start items-start h-full  gap-2 w-full'>
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
