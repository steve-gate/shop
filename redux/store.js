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



/* const RootReducer = combineReducers({
    products: ProductsReducers,
    cartItems: CartReducers,


});
const store = createStore(RootReducer); */



export const store = configureStore({
    reducer: {
        products: productsSlice,
        cartItems: cartSlice
    },

});


