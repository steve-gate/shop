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





/* const RootReducer = combineReducers({
    products: ProductsReducers,
    cartItems: CartReducers,


});
const store = createStore(RootReducer); */

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}



export const store = configureStore({
    reducer: {
        products: productsSlice,
        cartItems: persistReducer(persistConfig, cartSlice)
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});
export const persistor = persistStore(store)


