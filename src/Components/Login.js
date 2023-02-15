import { KAKAO_AUTH_URL } from './../Util/kakaoJoin';

function Login() {
    return (
      <>
        <h1>Login</h1>
        <form>
          <div>
            <label>id</label>
            <input placeholder="id" />
          </div>
          <div>
            <label>password</label>
            <input placeholder="password" />
          </div>
          <button>login</button>
          <a href={KAKAO_AUTH_URL}>Kakao</a>
        </form>
      </>
    );
  }
  export default Login;
  