import { createSlice } from '@reduxjs/toolkit';

const initialState={
    plans:[]
};

export const PlanSlice=createSlice({
    name:'plan',
    initialState,
    reducers:{
        "ADD_PLAN":(state,action)=>{
            state.push(action.payload);
        }
    }
})