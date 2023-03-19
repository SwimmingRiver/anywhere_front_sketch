import { createSlice } from "@reduxjs/toolkit";
export const initialState = [
  {
    id: "1",
    password: "1",
    nickname: "firstman",
    on: false,
  },
  {
    id: "2",
    password: "2",
    nickname: "2",
    on: false,
  },
];

const userInfoSlice = createSlice({
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
    logout: (state, action) => {
      const index = state.map((v) => v.id).indexOf(action.payload.id);
      state[index].on = false;
    },
  },
});

export default userInfoSlice;
