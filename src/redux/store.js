import { configureStore } from '@reduxjs/toolkit';
import truckReducer from './features/trucks/trucksSlice';

export const store = configureStore({
  reducer: {
    trucks: truckReducer,
  },
});
