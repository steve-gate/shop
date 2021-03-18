import { createSlice, createReducer, createAction } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [],

}
const addToCart = createAction('AddToCart')

const cartSlice = createReducer(initialState, {
    [addToCart.type]: (state, action) => {
        return {
            ...state,
            cartItems: [...state.cartItems, action.item],

        }
    }
}

)


export default cartSlice;

