import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cartList.findIndex(item => item.id === newItem.id);
      
      if (existingItemIndex !== -1) {
        // If item already exists in cart, increase its count
        state.cartList[existingItemIndex].count++;
      } else {
        // If item doesn't exist in cart, add it with count of 1
        state.cartList.push({ ...newItem, count: 1 });
      }
    },
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.cartList = state.cartList.filter(item => item.id !== idToRemove);
    },
    clearCart(state) {
      state.cartList = [];
    },
    updateCartItem(state, action) {
      const { id, count } = action.payload;
      const itemToUpdate = state.cartList.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.count = count;
      }
    },
    removeCartItem(state, action) {
      const idToRemove = action.payload;
      state.cartList = state.cartList.filter(item => item.id !== idToRemove);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
