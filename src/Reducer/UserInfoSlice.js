import { createSlice } from "@reduxjs/toolkit";


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
    changeNickname: (state, action) => {
      const { id, nickname } = action.payload;
      const index = state.map((v) => v.id).indexOf(id);
      state.splice(index, 1, {
        id: state[index].id,
        password: state[index].password,
        nickname: nickname,
        on: true,
      });
      // state[index].nickname = action.payload;
    },
  },
});

export default userInfoSlice;
