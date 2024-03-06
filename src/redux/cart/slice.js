import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartList.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cartList = state.cartList.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
