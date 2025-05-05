import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  isError: false,

  fetchProducts: async () => {
    set({ isLoading:true, isError: false});

    try {
      const response = await fetch('https://v2.api.noroff.dev/online-shop');
      const json = await response.json();

      console.log('API response:', json);

      set({ products: json.data, isLoading: false});
    } catch(error) {
      console.error('Fetch error:', error);
      set({ isError: true, isLoading: false });
    }
  }
}));

