import { createStore, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import ProductsReducers from './ProductsReducers';
import CartReducers from './CartReducers';

import productsSlice from './productsSlice';
import cartSlice from './cartSlice';



/* const RootReducer = combineReducers({
    products: ProductsReducers,
    cartItems: CartReducers,


});
const store = createStore(RootReducer); */


const store = configureStore({
    reducer: {
        products: productsSlice,
        cartItems: cartSlice
    },
});

export default store;
