import React from 'react'
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils/toast';
import { toast } from 'react-toastify';
import useCartStore from '../stores/cartStore';



function CheckoutButton() {
    const navigate = useNavigate();
    const clearCart = useCartStore((state) => state.clearCart);

    const handleCheckout = () => {

        showToast.purchasing();

        setTimeout(() => {
            toast.dismiss();
            clearCart()
            showToast.checkoutSuccess();
            navigate('/checkout-success');
        }, 1500);
        
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