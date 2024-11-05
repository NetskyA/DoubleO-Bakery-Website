import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Adjust the path as needed
import userReducer from '../Services/userSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer, // Daftarkan userReducer di sini
  },
});

export default store;
