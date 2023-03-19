import { createSlice } from '@reduxjs/toolkit';

const initialState={
    plans:[]
};

const PlanSlice=createSlice({
    name:'plan',
    initialState,
    reducers:{
        "ADD_PLAN":(state,action)=>{
            state.push(action.payload);
        }
    }
});

export default PlanSlice;