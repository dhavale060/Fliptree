// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './AsyncThunks';

const ProductSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartItems:[],
    status: 'idle', // idle | loading | success | error
    error: null,
  },
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action){
      state.cartItems = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { addToCart,removeFromCart} = ProductSlice.actions;
export default ProductSlice.reducer;
