import {createSlice} from "@reduxjs/toolkit";
import {getProduct} from "../../services/productService";

const initialState = {
    list: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
});

export default productSlice.reducer;