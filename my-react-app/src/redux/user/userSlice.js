import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../services/userService";

const initialState = {
    currentUser: {}
}
const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.curentUser = action.payload;
        })
    }
})

export default useSlice.reducer;