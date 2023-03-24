import { createSlice } from '@reduxjs/toolkit';

const initialState=[

];

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