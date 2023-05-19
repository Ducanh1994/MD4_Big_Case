import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {},
});

export default studentSlice.reducer;
