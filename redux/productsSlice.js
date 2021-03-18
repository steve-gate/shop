import ProductsList from "../data";
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: ProductsList,

}

const productsSlice = createSlice({
    name: 'products',
    initialState,
})

export default productsSlice.reducer;
