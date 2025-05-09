import React from 'react';
import useCartStore from '../stores/cartStore';
import Increment from '../components/Increment';
import { Link } from 'react-router-dom';

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.getTotal());

  if (cart.length === 0) {
    return (
      <Link to="/products" className="p-4 border-amber-950 bg-white text-amber-950 border-2 w-full"> Continue Shopping
      </Link>
    )
  }


  return (
    <div className="container h-fit mx-auto px-8">
      <div className='flex flex-row justify-between items-center relative w-full mb-10 mt-2'>
        <Link to='' className='text-sm text-amber-950 -z-10'>Back</Link>
        <h1 className='absolute left-1/2 transform -translate-x-1/2 uppercase text-2xl text-amber-950 -z-10'>Your cart</h1>
      </div>
      <div>
        <p className='text-lg text-amber-950 my-4'>
          Your products
        </p>
      <div>
      <ul className="space-y-4">
        {cart.map((product) => ( 
          <li
          key={product.id}
          className="flex md:flex-row flex-col md:items-center gap-4 justify-between p-4 rounded shadow-md ">
          <div className="gap-6 flex flex-row">
          <Link to={`/products/${product.id}`} key={product.id}>
            <img
              src={product.image?.url}
              alt={product.image?.alt}
              className="w-24 h-full object-cover rounded"
            />
          </Link>
            <div className='flex flex-col justify-start items-start h-full  gap-2 w-full'>
              <div className="flex flex-row justify-between w-full items-center">
                <Link to={`/products/${product.id}`} key={product.id}>
                <h2 className="text-2xl border-b-0 hover:border-b-2  hover:border-amber-950 transition-all duration-50">{product.title}</h2>
                </Link>
                <button
                  aria-label="Remove item"
                  className="text-amber-950 text-bold text-2xl py-1 px-2 transition-all duration-150 ease-in-out cursor-pointer hover:text-red-800 hover:bg-red-100"
                  onClick={() => {
                    removeFromCart(product.id);
                    }
                  }
                  > X
                </button>
              </div>
              <p className="text-sm text-gray-600">{product.price} NOK</p>
              <Increment product={product}/>
            </div>
          </div>
        </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row gap-6 h-fit my-4 md:items-center w-full">
        <p className='uppercase w-fit text-nowrap'>Price {Math.round(total)} NOK</p>
        <Link to="/checkout-success" className="p-4 border-amber-950 bg-amber-900 text-white border-2 w-full"> Proceed to checkout
        </Link>
      </div>
      </div>
      </div>
    </div>

  )
}

export default Checkout;


