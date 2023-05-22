import {createSlice} from "@reduxjs/toolkit";
import {getProduct} from "../../services/productService";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        list: []
    },
    extraReducers: builder => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.list = action.payload;
            console.log(3)
        })
    }
});

export default productSlice.reducer;