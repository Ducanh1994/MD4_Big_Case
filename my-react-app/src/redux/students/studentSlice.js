import { createSlice } from "@reduxjs/toolkit";
import {getStudents} from "../services/studentService";

const initialState = {
    list: []
};

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getStudents.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
});

export default studentSlice.reducer;
