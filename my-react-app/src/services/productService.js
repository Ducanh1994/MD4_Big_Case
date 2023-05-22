import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    'products/getProducts',
    async () => {
        console.log(4)
        const res = await axios.get('http://localhost:3001/products');
        return res.data;
    }
)