import React from 'react'
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils/toast';


function CheckoutButton() {
    const navigate = useNavigate();

    const handleCheckout = () => {

        showToast.purchasing();

        setTimeout(() => {
            showToast.purchasing().dismiss;

            showToast.checkoutSuccess();
            navigate('/checkout-success');
        }, 2000);
        
    }

    return (
        <button
          className="p-4 text-center border-amber-950 bg-amber-900 text-white border-2 w-full rounded hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          onClick={handleCheckout}
          aria-label="Proceed to checkout"
        >
          Proceed to checkout
        </button>
      );
}

export default CheckoutButton;