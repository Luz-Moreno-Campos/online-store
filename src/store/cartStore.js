import { create } from "zustand";

// Zustand store manages the cart globally, allowing different pages to access and update cart items
// without passing props between component

/**
 * Zustand global cart store
 * - items: stores all cart products
 * - addItem: adds item or increases quantity if it already exists
 * - updateQuantity: updates item quantity
 * - removeItem: removes a specific item
 * - clearCart: empties the cart
 *
 * Uses Zustand `set` to update state immutably.
 */

const useCartStore = create((set) => ({
    items: [],

    // Add item to cart
    addItem: (product, quantity, size, color) =>
        set((state) => {
            const existingItem = state.items.find(
                (item) =>
                    item.id === product.id &&
                    item.size === size &&
                    item.color === color
            );
            if (existingItem) {
                // increase quantity
                return {
                    items: state.items.map((item) =>
                        item.id === product.id &&
                            item.size === size &&
                            item.color === color
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    )
                };
            }
            // add new item
            return {
                items: [...state.items,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    size, color, quantity
                }
                ]
            };
        }),

    // Update quantity
    updateQuantity: (id, size, color, quantity) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id &&
                    item.size === size &&
                    item.color === color
                    ? { ...item, quantity }
                    : item
            )
        })),

    // Remove item
    removeItem: (id, size, color) =>
        set((state) => ({
            items: state.items.filter(
                (item) =>
                    !(
                        item.id === id &&
                        item.size === size &&
                        item.color === color
                    )
            )
        })),

    // Clear cart
    clearCart: () => set({ items: [] })
}));

export default useCartStore;