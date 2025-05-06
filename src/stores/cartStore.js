import { create } from "zustand";

const useCartStore = create((set, get) => ({
    cart: [],

    addToCart: (product) => {
        const cart = get().cart;
        const exists = cart.find(p => p.id === product.id);

        if (exists) {
            set({
                cart: cart.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                )
            });
        } else {
            set({ cart: [...cart, { ...product, quantity: 1}]});
        }
    },

    removeFromCart: (id) => {
        set({
            cart: get().cart.filter(p => p.id !== id)
        })
    },

    updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        set({
            cart: get().cart.map(p =>
                p.id === id ? { ...p, quantity } : p
            )
        })
    },

    clearCart: () => set({ cart: []}),

    getTotal: () =>
        get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    ,

    getItems: () =>
        get().cart.reduce((sum, item) => sum + item.quantity, 0)
    ,
}))

export default useCartStore;