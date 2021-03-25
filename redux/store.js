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



import productsSlice from './productsSlice';
import cartSlice from './cartSlice';






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

