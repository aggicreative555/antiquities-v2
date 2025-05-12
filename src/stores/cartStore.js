import { create } from 'zustand';
import { showToast } from '../utils/toast';

const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const exists = cart.find((p) => p.id === product.id);

    if (exists) {
      set({
        cart: cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }

    showToast.itemAdded(product.id, product.title);
  },

  removeFromCart: (id) => {
    const cart = get().cart;
    const product = cart.find((p) => p.id === id);

    set({
      cart: get().cart.filter((p) => p.id !== id),
    });

    showToast.itemRemoved(product.id, product.title);
  },

  updateQuantity: (id, quantity) => {
    if (quantity < 1) return;
    set({
      cart: get().cart.map((p) => (p.id === id ? { ...p, quantity } : p)),
    });
  },

  increment: (id) => {
    const cart = get().cart;
    const product = cart.find((p) => p.id === id);

    if (!product) {
      console.error(`Product ${id} not found in cart`);
      return;
    }

    set({
      cart: cart.map((p) =>
        p.id === id ? { ...p, quantity: Math.min(p.quantity + 1, 10) } : p
      ),
    });

    showToast.itemAdded(product.id, product.title);
  },

  decrement: (id) => {
    const cart = get().cart;
    const product = cart.find((p) => p.id === id);

    if (!product) {
      console.error(`Product ${id} not found in cart`);
      return;
    }

    const updatedCart = cart

      .map((p) =>
        p.id === id ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p
      )

      .filter((p) => p.quantity > 0);

    set({ cart: updatedCart });

    showToast.itemRemoved(product.id, product.title);
  },

  clearCart: () => {
    set({
      cart: [],
    });
  },

  getTotal: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  getItems: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
}));

export default useCartStore;
