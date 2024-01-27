import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/booksSlice';
const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});
export default store;
