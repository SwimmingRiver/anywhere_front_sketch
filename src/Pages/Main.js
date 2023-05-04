import styled from "styled-components";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Routers from "../Components/Routers";


const Title = styled.h1`
  font-size: 1em;
  width: 100vw;
  color: white;
  background-color: #a566ff;

  font-family: "Itim", cursive;
  text-shadow: -1px 0px #a566ff, 0px 1px white, 1px 0px black, 0px -1px black;
  /* text-shadow: 1px 1px 1px; */
  @media (max-width: 500px) {
  }
`;
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width:500px) {
    display: flex;
    flex-direction: row;
  }
`;
const HeadWrapper = styled.div`
  font-size: 3em;
  width: 100vw;
  color: white;
  background-color: #a566ff;
  display: flex;
`;
const Hamburg = styled.div`
  @media (min-width: 500px) {
    display: none;
  }
`;
const Lower = styled.div`
  width: 100%;
  height: 10vh;
  border: solid 1px black;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  bottom: 0;
  @media (min-width: 500px) {
    display: none;
  }
`;

const Righter = styled.div`
  height: 95vh;
  width: 10vw;
  overflow: hidden;
  border: solid black 1px;
  display: flex;
  flex-direction: column;

  @media (max-width:500px) {
    display: none;
  }
`;
const Item = styled.li`
  border: solid 1px black;
  width: 20vw;
  list-style: none;
  text-align: center;
  @media (min-width:500px) {
    width: 10vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

function Main() {
  const Logged = useSelector((state) => state.user);
  const LoggedCheck = Logged.map((v) => v.on).includes(true);
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      
      <HeadWrapper>
            <Title>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Anywhere
              </Link>
            </Title>
          </HeadWrapper>
      
      <Wrapper>

          <Routers/>

          <Lower>
            <Item>
              <Link to="/">
                <span class="material-symbols-outlined">home</span>
              </Link>
            </Item>
            <Item>
              <Link to={LoggedCheck ? "/planner" : "/login"}>
                <span class="material-symbols-outlined">add</span>
              </Link>
            </Item>
            <Item>
              <Link to="/search">
                <span class="material-symbols-outlined">search</span>
              </Link>
            </Item>
            <Item>
              <Link to={LoggedCheck ? "/profile" : "/login"}>
                <span class="material-symbols-outlined">account_circle</span>
              </Link>
            </Item>
          </Lower>

          <Righter>
            <Item>
              <Link to="/">
                <span class="material-symbols-outlined">home</span>
              </Link>
            </Item>
            <Item>
              <Link to={LoggedCheck ? "/planner" : "/login"}>
                <span class="material-symbols-outlined">add</span>
              </Link>
            </Item>
            <Item>
              <Link to="/search">
                <span class="material-symbols-outlined">search</span>
              </Link>
            </Item>
            <Item>
              <Link to={LoggedCheck ? "/profile" : "/login"}>
                <span class="material-symbols-outlined">account_circle</span>
              </Link>
            </Item>
          </Righter>
        
      </Wrapper>
      </BrowserRouter>
    </>
  );
}
export default Main;
