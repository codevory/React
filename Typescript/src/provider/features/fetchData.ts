import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DataFromApi {
id:number;
title:string;
price:number;
rating:number;
description:string;
category:string;
tags:string[];
images:string[];
}

interface ApiResponse {
products:DataFromApi[];
total:number;
skip:number;
limit:number;
loading:boolean;
error:string | null;
}


const initialState:ApiResponse = {
    products:[],
    total:0,
    skip:0,
    limit:0,
    loading:false,
    error:null,
}

const ApiData = createSlice({
name:"ApiData",
initialState,
reducers : {
    setData:(state,action:PayloadAction<DataFromApi[]>) => {
        state.products = action.payload
    },
    setLoading:(state,action:PayloadAction<boolean>) => {
     state.loading = action.payload
    },
    setError : (state,action:PayloadAction<string | null>) => {
        state.error = action.payload
    }
}

})

export default ApiData.reducer;
export const {setData,setError,setLoading} = ApiData.actions;