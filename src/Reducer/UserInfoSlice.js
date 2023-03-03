import { createSlice } from "@reduxjs/toolkit";
export const initialState = [
  {
    id: "",
    password: "",
    nickname: "",
    on: false,
  },{
    id: "1",
    password: "1",
    nickname: "1",
    on: false,
  }
  
];

export const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    join: (state, action) => {
      state.push(action.payload);
    }, 
    login: (state, action) => {
      const index = state.map((v) => v.id).indexOf(action.payload.id);
      state[index].on = true;
    },
  },
});

export default userInfoSlice;
