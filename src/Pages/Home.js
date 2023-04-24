import Carousel from "../Components/Carousel";
import styled from "styled-components";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import userInfoSlice from './../Reducer/UserInfoSlice';


const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40em 40em 40em;
  grid-template-rows: 25em 25em;
  place-items: center;
  @media(max-width:500px){
    grid-template-columns: 100%;
    grid-template-rows: 25em 25em 25em 25em 25em;
    place-items: center;
    height: 80vh;
  }
`;
const HomeWrapper = styled.div`
  display: flex;

`;

function Home(){
  const LoggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    let index = LoggedUser.map((v) => v.on).indexOf(true);
    dispatch(userInfoSlice.actions.logout(LoggedUser[index]));
    navigate("/");
  }, [LoggedUser]);

    return(<>
     <h1>Home</h1>
     <HomeWrapper>
     <h2>{LoggedUser.map((v) => (v.on ? `welcome,${v.nickname}` : null))}</h2>
      {LoggedUser.map((v) => v.on).includes(true) ? (
        <button onClick={onClick}>logout</button>
      ) : null}
    <CarouselWrapper>
        <Carousel place="도쿄" />
        <Carousel place="부산" />
        <Carousel place="서울" />
        <Carousel place="대구"/>
        <Carousel place="오사카" />
        </CarouselWrapper>
        </HomeWrapper>
    </>)
}
export default Home;