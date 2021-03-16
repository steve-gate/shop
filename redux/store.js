import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './reducers/booksReducer';
import productsSlice from './productsSlice';

const store = configureStore({
    reducer: { products: productsSlice },
});

export default store;
