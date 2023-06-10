import { createSlice } from "@reduxjs/toolkit";

const contactSlice=createSlice({
    name:"Contact Data",
    initialState:{
        
    },
    reducers:{
        addData:(state,action)=>({}),
        editData:(state,action)=>({}),
        deleteData:(state,action)=>({})
    }
})

export const { addData,editData,deleteData}=contactSlice.actions;

export const contactReducer=contactSlice.reducer;
