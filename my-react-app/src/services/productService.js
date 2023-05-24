import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await axios.get('http://localhost:3001/products');
        return res.data;
    }
)
export const deleteProduct = createAsyncThunk(
    'products/deleteProducts',
    async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`);
        return id;
    }
)
export const addProduct = createAsyncThunk(
    'products/addProducts',
    async (product) => {
        await axios.post(`http://localhost:3001/products`, product)
    }
)
export const findProductById = createAsyncThunk(
    'products/findProducts',
    async (id) => {
        const res = await axios.get(`http://localhost:3001/products/${id}`);
        return res.data;
    }
)
export const editProduct = createAsyncThunk(
    'products/editProduct',
    async (arg, thunkAPI) => {
        console.log(arg)
        await axios.put(`http://localhost:3001/products/${arg.id}`, arg.product)
    }
)