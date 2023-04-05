import { configureStore } from "@reduxjs/toolkit";
import  PlanSlice  from "../Reducer/planSlice";
import userInfoSlice from "../Reducer/UserInfoSlice";
import ReservationSlice from "../Reducer/reservationSllice";
  const Store = configureStore({
  reducer: {
    user: userInfoSlice.reducer,
    plan: PlanSlice.reducer,
    reservation:ReservationSlice.reducer,
  },
});
export default Store;