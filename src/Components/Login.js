import { KAKAO_AUTH_URL } from './../Util/kakaoJoin';
import useInput from "../Hooks/useInput";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import userInfoSlice from "../Reducer/UserInfoSlice";

function Login() {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let data = { id: id, password: password };
      dispatch(userInfoSlice.actions.login(data));
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
        </form>
      </>
    );
  }
  export default Login;
  