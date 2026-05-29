import { create } from "zustand";

// Zustand store manages the cart globally, allowing different pages to access and update cart items
// without passing props between component