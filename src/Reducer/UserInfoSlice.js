<<<<<<< HEAD
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
      console.log(state);
    },
  },
});
=======
import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


const initialState = [
  {
    member_no: "1",
    member_email: "123@123.com",
    isHost: false,
    member_pwd: "1",
    member_name: "firstman",
    member_phone_num: "000-0000-0000",
    member_img_path: "",
    member_status: "", 
    on: false,
  }
];

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_SIGN_UP: (state, action) => {
      let num=2;
      let {key,value}={key:"member_no",value:num};
      action.payload[key]=value;
      state.push(action.payload);
      num++;
    },
    USER_LOG_IN: (state, action) => {
      const index = state.map((v) => v.member_email).indexOf(action.payload.member_email);
      state[index].on = true;
    },
    USER_LOG_OUT: (state, action) => {
      const index = state.map((v) => v.member_email).indexOf(action.payload.member_email);
      state[index].on = false;
    },
    USER_CHANGE_NICKNAME: (state, action) => {
      const { member_email, member_name } = action.payload;
      const index = state.map((v) => v.member_email).indexOf(member_email);
      state.splice(index, 1, {
        member_no:"",
        member_email: state[index].member_email,
        member_pwd: state[index].password,
        member_name: member_name,
        on: true,
      });
      // state[index].nickname = action.payload;
    },
  },
});

export default userInfoSlice;
>>>>>>> master
