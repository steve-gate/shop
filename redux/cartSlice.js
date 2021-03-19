import { createSlice, createReducer, createAction } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [],

}
const addToCart = createAction('AddToCart');
const deleteFromCart = createAction('DeleteFromCart');

const incrementQuantity = createAction('IncrementQuantity');
const decrementQuantity = createAction('DecrementQuantity');

const cartSlice = createReducer(initialState, {
    [addToCart.type]: (state, action) => {
        let exists = -1;
        if (state.cartItems.length > 0) {

            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === action.item.id) {
                    let exists = 1;
                    return {
                        ...state, cartItems: state.cartItems.map(
                            item => item.id === action.item.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                    }
                }
            }

        }

        if (exists == -1) {
            return {
                ...state,
                cartItems: [...state.cartItems, action.item],
            }
        }

    },

    [deleteFromCart.type]: (state, action) => {
        return {
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== action.item.id)
        }
    },



}

)


export default cartSlice;

