import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./students/studentSlice";

export default configureStore({
    reducer: {
        students: studentReducer,
    },
});