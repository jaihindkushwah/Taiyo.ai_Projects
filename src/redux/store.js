import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./crateContactSlice";

export const store=configureStore({
    reducer:contactReducer
});