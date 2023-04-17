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

  const addUser = (aId, aPw, aName) => {
    let _user = {
      id: aId,
      pw: aPw,
      name: aName,
      // on:false
    };
    return _user;
  };
  const onsubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (passwordErr) {
        return setPasswordErr(true);
      }

      dispatch(
        userInfoSlice.actions.join({
          id: id,
          password: password,
          nickname: nickname,
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