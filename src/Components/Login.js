import { KAKAO_AUTH_URL } from './../Util/kakaoJoin';
import useInput from "../Hooks/useInput";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import userInfoSlice from "../Reducer/UserInfoSlice";
import {Link,useNavigate} from "react-router-dom";

function Login() {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let data = { id: id, password: password };
      dispatch(userInfoSlice.actions.login(data));
      navigate("/");
    },
    [id, password]
  );
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label>id</label>
            <input value={id} onChange={setId} placeholder="id" />
          </div>
          <div>
            <label>password</label>
            <input value={password} onChange={setPassword} placeholder="password" />
          </div>
          <button>login</button>
          <a href={KAKAO_AUTH_URL}>Kakao</a>
          <Link to="/join">sign up</Link>
        </form>
      </>
    );
  }
  export default Login;
  