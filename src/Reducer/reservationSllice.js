import { createSlice } from '@reduxjs/toolkit';

const initialState=[

];

const ReservationSlice = createSlice({
    name:'reservation',
    initialState,
    reducers:{
        "ADD_RESERVATION":(state,action)=>{
            state.push(action.payload);
        }
    }
})
export default ReservationSlice;

