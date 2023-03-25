import { useSelector } from "react-redux";
import styled from "styled-components";
import {Link} from "react-router-dom";

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
function Profile() {
  const user = useSelector((state) => state.user);
  const me = user.filter((v) => v.on === true);

  return (
    <Wrapper>
      <ImageBox>{/* <img src={require("")} /> */}</ImageBox>
      <Link to="/editprofile">profie edit</Link>
      <h1>{`${me[0].nickname}`}</h1>
      <h2>내 리뷰 </h2>
      <Link to="/myplan">내 여행</Link>
    </Wrapper>
  );
}
export default Profile;
