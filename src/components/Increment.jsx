import React from 'react';
import useCartStore from '../stores/cartStore';

function Increment({ product }) {
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);

  return (
    <div className="flex  items-center gap-2">
      <button
        aria-label="Decrease quantity"
        className={`btn-s h-10 w-10 p-0  ${product.quantity === 1 ? 'opacity-30 cursor-not-allowed' : 'btn-s cursor-pointer'}`}
        onClick={(e) => {
          e.stopPropagation();
          if (product.quantity > 1) {
            decrement(product.id);
          }
        }}
        disabled={product.quantity === 1}
      >
        <span className='h-[1.5px] w-3 bg-black disabled:bg-gray-300 disabled:cursor-not-allowed'></span>
      </button>
      <span className="min-w-[30px] text-center font-caslon text-lg ">{product.quantity}</span>
      <button
        aria-label="Increase quantity"
        className={`btn-s h-10 w-10 p-0 cursor-pointer'}`}
        onClick={(e) => {
          e.stopPropagation();
          if (product.quantity < 10) {
            increment(product.id);
          }
        }}
        disabled={product.quantity === 10}
      >
       <span className='h-[1.5px] w-3 translate-x-1/2 rotate-90 bg-black disabled:bg-gray-200 disabled:cursor-not-allowed'></span>
       <span className='h-[1.5px] w-3 -translate-x-1/2 bg-black disabled:bg-gray-300 disabled:cursor-not-allowed'></span>
      </button>
    </div>
  );
}

export default Increment;
