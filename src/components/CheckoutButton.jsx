import React from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils/toast';
import { toast } from 'react-toastify';

function CheckoutButton() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    showToast.purchasing();

    setTimeout(() => {
      toast.dismiss();
      showToast.checkoutSuccess();
      navigate('/checkout-success');
    }, 1500);
  };

  return (
    <button
      className="btn-l btn-primary py-4 w-full focus:ring-offset-2"
      onClick={handleCheckout}
      aria-label="Proceed to checkout"
    >
      Proceed to checkout
    </button>
  );
}

export default CheckoutButton;
