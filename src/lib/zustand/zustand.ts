import { create } from "zustand";

interface Product {
  id: number;
  amount: number;
}

interface Cart {
  products: Product[];
  add: (id: number) => void;
  incrementAmount: (id: number) => void;
  decrementAmount: (id: number) => void;
  remove: (id: number) => void;
  removeAll: () => void;
}

export const useCartStore = create<Cart>((set) => ({
  products: [],
  add: (id: number) =>
    set((state) => ({
      products: state.products.find((product) => product.id === id)
        ? state.products
        : [...state.products, { id, amount: 1 }],
    })),
  incrementAmount: (id: number) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      ),
    })),
  decrementAmount: (id: number) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? {
              ...product,
              amount: product.amount <= 1 ? 1 : product.amount - 1,
            }
          : product
      ),
    })),
  remove: (id: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  removeAll: () => set({ products: [] }),
}));
