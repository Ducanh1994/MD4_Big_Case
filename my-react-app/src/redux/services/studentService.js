import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
export const getStudents = createAsyncThunk(
    'students/getBlogs',
    async () => {
        const res = await axios.get('http://localhost:3001/students')
        return res.data;
    }
)
