import React from 'react'
import useCartStore from '../stores/cartStore'

function Increment({product}) {
    const increment = useCartStore((state) => state.increment);
    const decrement = useCartStore((state) => state.decrement);


    return (
        <div className='flex  items-center gap-2'>
            <button
                aria-label='Decrease quantity'
                className={`px-3 py-1 rounded border-2 border-gray-300 text-center transition-all duration-150 ease-in-out ${product.quantity === 1 ? 'text-gray-300 border cursor-not-allowed' : 'bg-white hover:bg-gray-400 cursor-pointer'}`}
                onClick={(e) => {
                    e.stopPropagation();
                    if (product.quantity > 1) {
                        decrement(product.id);
                        console.log('decrement');
                    }
                }}
                disabled={product.quantity === 1}
            >
            -
            </button>
            <span className='min-w-[30px] text-center'>{product.quantity}
            </span>
            <button
                aria-label='Increase quantity'
                className={`px-3 py-1 rounded border-2 border-gray-300 text-center transition-all duration-150 ease-in-out ${product.quantity === 10 ? 'text-gray-400 border cursor-not-allowed' : 'bg-white hover:bg-gray-400 cursor-pointer'}`}
                onClick={(e) => {
                    e.stopPropagation();
                    if (product.quantity < 10) {
                        increment(product.id);
                        console.log('increment');
                    }
                }}
                disabled={product.quantity === 10}
            >
            +
            </button>
        </div>
    )
}

export default Increment
