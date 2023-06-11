import { createSlice } from "@reduxjs/toolkit";

const contactSlice=createSlice({
    name:"Contact Data",
    initialState:{
        value:[]
    },
    reducers:{
        addData:(state,action)=>({value:[...state.value,action.payload]}),
        editData:(state,action)=>({
            value:[...state.value.map(
                (item)=>{if(item.id===Number(action.payload.id)){return action.payload}else{return item}}
                )]
        }),
        deleteData:(state,action)=>({
            value:[...state.value.filter((item)=>(item.id!==Number(action.payload)))]
        })
    }
})

export const { addData,editData,deleteData}=contactSlice.actions;

export const contactReducer=contactSlice.reducer;
