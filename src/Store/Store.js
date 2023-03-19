import { configureStore } from "@reduxjs/toolkit";
import  PlanSlice  from "../Reducer/planSlice";
import userInfoSlice from "../Reducer/UserInfoSlice";
  const Store = configureStore({
  reducer: {
    user: userInfoSlice.reducer,
    plan: PlanSlice.reducer,
  },
});
export default Store;