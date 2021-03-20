import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductsReducers from './ProductsReducers';
import CartReducers from './CartReducers';

import productsSlice from './productsSlice';
import cartSlice from './cartSlice';






export const store = configureStore({
    reducer: {
        products: productsSlice,
        cartItems: cartSlice
    },

});


