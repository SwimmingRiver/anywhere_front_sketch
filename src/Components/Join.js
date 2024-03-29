import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";
import userInfoSlice from "../Reducer/UserInfoSlice";

function Join() {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [userNum, setUserNum] = useState(2);

  const onPasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordErr(password !== e.target.value);
    },
    [password]
  );
  const [nickname, setNickname] = useInput("");

  const navigate = useNavigate();

  // const userData = useSelector((state) => state);
  const dispatch = useDispatch();

  const onsubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (passwordErr) {
        return setPasswordErr(true);
      }
      dispatch(
        userInfoSlice.actions.USER_SIGN_UP({
          isHost:false,
          member_email: id,
          member_pwd: password,
          member_name: nickname,
          member_phone_num: "",
          member_img_path: "",
          member_status: "",
          on:false,
        })
      );
      navigate("/");
    },
    [id, password, passwordCheck, nickname]
  );

  return (
    <>
      <h2>Join</h2>
      <form onSubmit={onsubmit}>
        <div>
          <label>ID</label>
          <br />
          <input placeholder="id" value={id} required onChange={setId} />
        </div>
        <div>
          <label>password</label>
          <br />
          <input
            placeholder="password"
            value={password}
            onChange={setPassword}
            required
          />
        </div>
        <div>
          <label>password repeat</label>
          <br />
          <input
            placeholder="password repeat"
            value={passwordCheck}
            required
            onChange={onPasswordCheck}
          />
        </div>
        {passwordErr ? <p>check password again</p> : null}
        <div>
          <label>nickname</label>
          <br />
          <input
            placeholder="nickname"
            value={nickname}
            required
            onChange={setNickname}
          />
        </div>
        <button>Join</button>
      </form>
    </>
  );
}
export default Join;