import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, size, color, quantity = 1 } = action.payload;
      
      // Check if item already exists in cart with same size and color
      const existingItemIndex = state.items.findIndex(
        item => 
          item.product._id === product._id && 
          item.size === size && 
          item.color === color
      );

      if (existingItemIndex > -1) {
        // Update existing item quantity
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        state.items.push({
          product,
          size,
          color,
          quantity,
          price: product.price
        });
      }

      // Update totals
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    removeFromCart: (state, action) => {
      const { productId, size, color } = action.payload;
      
      state.items = state.items.filter(
        item => 
          !(item.product._id === productId && 
            item.size === size && 
            item.color === color)
      );

      // Update totals
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    updateQuantity: (state, action) => {
      const { productId, size, color, quantity } = action.payload;
      
      const itemIndex = state.items.findIndex(
        item => 
          item.product._id === productId && 
          item.size === size && 
          item.color === color
      );

      if (itemIndex > -1) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or negative
          state.items.splice(itemIndex, 1);
        } else {
          // Update quantity
          state.items[itemIndex].quantity = quantity;
        }

        // Update totals
        state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },

    loadCartFromStorage: (state, action) => {
      const { items, total, itemCount } = action.payload;
      state.items = items;
      state.total = total;
      state.itemCount = itemCount;
    }
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  loadCartFromStorage 
} = cartSlice.actions;

export default cartSlice.reducer;
