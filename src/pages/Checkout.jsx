import React from 'react';
import useCartStore from '../stores/cartStore';
import Increment from '../components/Increment';
import { Link } from 'react-router-dom';
import CheckoutButton from '../components/CheckoutButton';
import { showToast } from '../utils/toast';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = useCartStore((state) => state.getTotal());

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center h-fit mx-10">
        <h2 className="uppercase font-button tracking-wider font-light text-lg my-5 pt-5 pb-2 border-b-2 border-gray-200">
          Your cart is currently empty
        </h2>
        <Link
          to="/products"
          className="btn-l btn-primary w-full transition-all ease-in-out duration-300  
          text-lg md:max-w-[600px] px-15 py-5"
        >
          {' '}
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container h-fit mx-auto px-8">
      <div className="flex flex-row justify-between items-center relative w-full mb-16 mt-2">
        <Link to="" className="absolute">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="text-2xl text-black transition-transform duration-300 ease-in-out hover:-translate-x-2"
          />
        </Link>
        <h1 className="absolute right-1/2 translate-x-1/2 text-3xl md:text-5xl text-center font-garamond uppercase tracking-tighter text-red-800 transition-all duration-300 ease-in-out">
          Your cart
        </h1>
      </div>
      <div className="flex gap-1 flex-col">
        <p className="text-base uppercase font-light font-button text-black">
          Your products
        </p>
        <div>
          <ul className="mt-5 flex flex-col gap-4">
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex md:flex-row flex-col md:items-center gap-4 justify-between my-2 pb-1 border-b border[1px] border-gray-200 w-full group hover:border-black transition-all"
              >
                <div className="gap-6 flex flex-row w-full cursor-pointer ">
                  <Link to={`/products/${product.id}`} key={product.id}>
                    <div className="flex justify-center align-center overflow-hidden w-48 h-48">
                      <img
                        src={product.image?.url}
                        alt={product.image?.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-row w-full justify-between items-center">
                      <Link to={`/products/${product.id}`} key={product.id}>
                        <h2 className="text-lg md:text-2xl text-center font-garamond uppercase tracking-tighter text-red-800 transition-all duration-300 ease-in-out h-full flex align-middle group-hover:text-xl gorup-hover:tracking-wider">
                          {product.title}
                        </h2>
                      </Link>
                      <button
                        aria-label="Remove item"
                        className="cursor-pointer btn-s w-14 h-14"
                        onClick={() => {
                          removeFromCart(product.id);
                        }}
                      >
                        {' '}
                        <span className="bg-black rotate-45 translate-x-[7px] h-[1.5px] w-4"></span>
                        <span className="bg-black -rotate-45 -translate-x-[5px] h-[1.5px] w-4"></span>
                      </button>
                    </div>
                    <p className="text-lg text-black font-button mb-5 group-hover:text-xl group-hover:tracking-wider transition-all">
                      {product.price} NOK
                    </p>
                    <Increment product={product} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 h-fit my-4 items-center justify-center  w-full transition-all ease-in-out duration-300">
            <div className="uppercase font-button font-light text-gray-400 text-sm text-nowrap flex-wrap cursor-default my-5 flex gap-2 items-center border border-black w-full h-fit p-4 py-6 outline-1 outline-offset-1 outline-black">
              <span>Total</span>
              <span className="text-black text-2xl">
                {Math.round(total)} NOK
              </span>
            </div>
            <button
              aria-label="Clear cart"
              className="btn-l py-4 w-full"
              onClick={() => {
                clearCart();
                showToast.cartEmpty();
              }}
            >
              {' '}
              Clear cart
            </button>
            <CheckoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
