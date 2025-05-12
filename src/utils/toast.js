import { toast } from 'react-toastify';

export const showToast = {
  messageSuccess: (
    message = 'Message sent! We will reply to you as soon as we can!'
  ) =>
    toast.success(message, {
      className:
        'p-6 shadow-md bg-green-100 border border-green-800 text-green-800',
      hideProgressBar: false,
      progressClassName: 'bg-green-800 rounded',
    }),

  checkoutSuccess: (
    message = 'Purchase has been made! We are packing your order...'
  ) =>
    toast.success(message, {
      className:
        'p-6 shadow-md bg-green-100 border border-green-800 text-green-800',
      hideProgressBar: true,
      autoClose: 1000,
      progressClassName: 'bg-green-800 rounded',
      closeButton: 'text-green-800',
    }),

  itemAdded: (productId, productTitle) =>
    toast.success(`${productTitle} added to cart!`, {
      className:
        'p-6 shadow-md bg-green-100 border border-green-800 text-green-800',
      hideProgressBar: true,
      autoClose: 300,
      closeButton: false,
      toastId: `item-added-${productId}`,
    }),

  itemRemoved: (productId, productTitle) =>
    toast.error(`${productTitle} removed from cart.`, {
      className: 'p-6 shadow-md bg-red-100 border border-red-800 text-red-800',
      hideProgressBar: true,
      autoClose: 300,
      closeButton: false,
      toastId: `item-removed-${productId}`,
    }),

  cartEmpty: (message = 'Your cart is empty') =>
    toast.error(message, {
      className: 'p-6 shadow-md bg-red-100 border border-red-800 text-red-800',
      hideProgressBar: true,
      autoClose: 500,
    }),

  error: (
    message = 'Something went wrong! Please try again by refreshing the page.'
  ) =>
    toast.error(message, {
      className: 'p-6 shadow-md bg-red-100 border border-red-800 text-red-800',
      hideProgressBar: true,
      autoClose: 500,
    }),

  sending: (message = 'Sending your message...') =>
    toast.loading(message, {
      className:
        'p-6 shadow-md bg-amber-100 border border-amber-800 text-amber-800',
      hideProgressBar: false,
      progressClassName: 'bg-amber-800 rounded',
    }),

  purchasing: (message = 'Logging your purchase...') =>
    toast.loading(message, {
      className:
        'p-6 shadow-md bg-amber-100 border border-amber-800 text-amber-800',
      hideProgressBar: false,
      progressClassName: 'bg-amber-800 rounded',
    }),

  loading: (message = 'Please wait while the operation is loading...') =>
    toast.loading(message, {
      className:
        'p-6 shadow-md bg-amber-100 border border-amber-800 text-amber-800',
      hideProgressBar: false,
      progressClassName: 'bg-amber-800 rounded',
    }),
};
