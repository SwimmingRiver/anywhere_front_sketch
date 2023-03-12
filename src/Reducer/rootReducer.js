import { combineReducers } from "redux";
import ReservationSlice from "./reservationSllice";
import userInfoSlice from './UserInfoSlice';
import { PlanSlice } from './planSlice';

const rootReducer =combineReducers({
    user:userInfoSlice,
    reservation:ReservationSlice,
    plan:PlanSlice,
})
export default rootReducer;