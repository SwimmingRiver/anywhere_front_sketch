import { createSlice } from '@reduxjs/toolkit';

const initialState=[{
    booking_no:0,
    member_no:0,
    room_no:0,
    check_in:"",
    check_out:"",
    guests:0,
    booking_status:"",
    created_at:"",
    updated_at:""
}];

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

