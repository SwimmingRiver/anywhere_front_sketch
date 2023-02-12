import { createSlice } from "@reduxjs/toolkit";
export const initialState = [
  {
    id: "",
    password: "",
    nickname: "",
  },
];

export const userInfoSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    join: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default userInfoSlice;
