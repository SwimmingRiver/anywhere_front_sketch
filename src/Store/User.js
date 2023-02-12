import { configureStore } from "@reduxjs/toolkit";
import { initialState, userInfoSlice } from "../Reducer/UserInfoSlice";
export const userStore = configureStore({
  initialState: initialState,
  reducer: userInfoSlice,
});
