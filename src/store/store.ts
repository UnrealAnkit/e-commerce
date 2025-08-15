import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['payload.headers'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// TypeScript types for TypeScript files
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;