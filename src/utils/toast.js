import { toast } from "react-toastify";

export const showToast = {
    messageSuccess: (message = 'Message sent! We will reply to you as soon as we can!') =>
        toast.success(message, {
            className: 'p-6 shadow-md bg-green-100 border border-green-800 text-green-800',
            hideProgressBar: false,
            progressClassName: 'bg-green-800 rounded',
        }
    ),

    checkoutSuccess: (message = 'Purchase successful! Good job, now you can continue your shopping!') =>
        toast.success(message, {
            className: 'p-6 shadow-md bg-green-100 border border-green-800 text-green-800',
            hideProgressBar: false,
            progressClassName: 'bg-green-800 rounded',
        }
    ),

    itemAdded: (message = 'Item has been added to cart!') =>
        toast.success(message, {
            className: 'p-6 shadow-md bg-green-100 border border-green-800 text-green-800',
            hideProgressBar: true,
            autoClose: 500,
            closeButton: false,
        }
    ),

    itemRemoved: (message = 'Item has been removed from cart') =>
        toast.error(message, {
            className: 'p-6 shadow-md bg-red-100 border border-red-800 text-red-800',
            hideProgressBar: true,
            autoClose: 500,
            closeButton: false,
        }
    ),

    error: (message = 'Something went wrong! Please try again by refreshing the page.') =>
        toast.error(message, {
            className: 'p-6 shadow-md bg-red-100 border border-red-800 text-red-800',
            hideProgressBar: true,
        }
    ),
    

    sending: (message = 'Sending your message...') =>
        toast.loading(message, {
            className: 'p-6 shadow-md bg-amber-100 border border-amber-800 text-amber-800',
            hideProgressBar: false,
            progressClassName: 'bg-amber-800 rounded',
        }
    ),

    purchasing: (message = 'Logging your purchase...') =>
        toast.loading(message, {
            className: 'p-6 shadow-md bg-amber-100 border border-amber-800 text-amber-800',
            hideProgressBar: false,
            progressClassName: 'bg-amber-800 rounded',
        }
    ),

    loading: (message = 'Please wait while the operation is loading...') =>
        toast.loading(message, {
            className: 'p-6 shadow-md bg-amber-100 border border-amber-800 text-amber-800',
            hideProgressBar: false,
            progressClassName: 'bg-amber-800 rounded',
        }
    ),

}