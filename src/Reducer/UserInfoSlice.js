import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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
    member_no: "2",
    member_email: "1",
    isHost: false,
    member_pwd: "1",
    member_name: "thus",
    member_phone_num: "000-0000-0000",
    member_img_path: "",
    member_status: "", 
    on: false,
  }
];

export const postUser = createAsyncThunk(
  "post/user",
  async ()=>{
    const res = await axios.post("http://sign_up_api");
    return res.data;
  }
)

export const getUser = createAsyncThunk(
  "get/user",
  async ()=>{
    const res = await axios.get("http://login_api");
    return res.data;
  }
)

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
  extraReducers:
  (builder)=>{
    builder.addCase(postUser.pending, (state, action) => {
      state.status = "Loading...";
  });
  builder.addCase(postUser.fulfilled, (state, action) => {
    state.value = action.payload;
      state.status = "Complete";
});
builder.addCase(postUser.rejected, (state, action) => {
  state.status = "Error";
});
//회원가입
builder.addCase(getUser.pending, (state, action) => {
  state.status = "Loading...";
});
builder.addCase(getUser.fulfilled, (state, action) => {
  const index = state.map((v) => v.member_email).indexOf(action.payload.member_email);
  state[index].on = true;
  state.status = "Complete";
});
builder.addCase(getUser.rejected, (state, action) => {
  state.status = "Error";
});
//로그인

  }
});

export default userInfoSlice;