import React from 'react'
import useCartStore from '../stores/cartStore'

function Increment({item}) {
    const increment = useCartStore((state) => state.increment);
    const decrement = useCartStore((state) => state.decrement);


    return (
        <div className='flex  items-center gap-2'>
            <button
                aria-label='Decrease quantity'
                className={`px-3 py-1 rounded border-2 border-gray-300 text-center transition-all duration-150 ease-in-out ${item.quantity === 1 ? 'text-gray-300 border cursor-not-allowed' : 'bg-white hover:bg-gray-400'}`}
                onClick={() => decrement(item.id)}
            >
            -
            </button>
            <span className='min-w-[30px] text-center'>{item.quantity}
            </span>
            <button
                aria-label='Decrease quantity'
                className={`px-3 py-1 rounded border-2 border-gray-300 text-center transition-all duration-150 ease-in-out ${item.quantity === 10 ? 'text-gray-400 border cursor-not-allowed' : 'bg-white hover:bg-gray-400'}`}
                onClick={() => increment(item.id)}
            >
            +
            </button>
        </div>
    )
}

export default Increment