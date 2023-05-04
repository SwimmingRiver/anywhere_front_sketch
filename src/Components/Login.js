import { KAKAO_AUTH_URL } from "./../Util/kakaoJoin";
import useInput from "../Hooks/useInput";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import userInfoSlice from "../Reducer/UserInfoSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exUser = useSelector((state) => state.user);
  const userIndex = exUser.map((i) => i.member_email).indexOf(id);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let data = { member_email: id, member_pwd: password };
      if (!exUser.map((v) => v.member_email).includes(id)) {
        return alert("가입되지 않은 회원입니다.");
      }
      if (exUser[userIndex].member_pwd !== password) {
        return alert("잘못된 암호입니다.");
      }
      dispatch(userInfoSlice.actions.USER_LOG_IN(data));
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
          <input value={id} onChange={setId} required placeholder="id" />
        </div>
        <div>
          <label>password</label>
          <input
            value={password}
            onChange={setPassword}
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button>login</button>
        <a href={KAKAO_AUTH_URL}>Kakao</a>
        <Link to="/join">/sign up</Link>
      </form>
    </>
  );
}
export default Login;