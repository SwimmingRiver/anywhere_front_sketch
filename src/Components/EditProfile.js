import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import userInfoSlice from "../Reducer/UserInfoSlice";

const Wrapper = styled.div`
  border: solid 1px black;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Box = styled.div``;
const ImageBox = styled.div`
  width: 5em;
  height: 5em;
  border: solid 1px black;
  border-radius: 50px;
  overflow: hidden;
`;
function EditProfile() {
  const user = useSelector((state) => state.user);
  const me = user.filter((v) => v.on === true);
  const [nickname, setNickname] = useInput("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClick = () => {
    dispatch(userInfoSlice.actions.changeNickname({id:me[0].id,nickname:nickname}));
    navigate("/profile");
  };
  return (
    <Wrapper>
      <ImageBox>{/* <img src={require("")} /> */}</ImageBox>
      <input onChange={setNickname} placeholder={`${me[0].nickname}`} />
      <button onClick={onClick}>profie edit</button>
    </Wrapper>
  );
}
export default EditProfile;
