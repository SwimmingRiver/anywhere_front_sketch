import Join from "../Components/Join";
import styled from "styled-components";
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from '../Components/Login';
import Nav from '../Nav';
import Kakao from "../Util/Kakao";
import { useState } from "react";
import Search from "../Components/Search";
import LodgeInfo from "../Components/LodgeInfo";

const Title = styled.h1`
  font-size: 1em;
  width: 100vw;
  color: white;
  background-color: #a566ff;
  
  font-family: "Itim", cursive;
  text-shadow: -1px 0px #a566ff, 0px 1px white, 1px 0px black, 0px -1px black;
  /* text-shadow: 1px 1px 1px; */
  @media(max-width: 500px) {

  }
`;
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HeadWrapper = styled.div`
  font-size: 3em;
  width: 100vw;
  color: white;
  background-color: #a566ff;
  display: flex;
`;
const Hamburg = styled.div`
  @media(min-width: 500px) {
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
`;
const Item = styled.li`
  border: solid 1px black;
  width: 20vw;
  list-style: none;
  text-align: center;
`;

function Main() {
  return (
    <>
    <Wrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
       <HeadWrapper>
       <Title><Link to="/">Anywhere</Link></Title>
       </HeadWrapper>
       <Search/>   
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/kakaologin" element={<Kakao/>}/>
        <Route path="/lodgeinfo" element={<LodgeInfo />} />
      </Routes>
      <Lower>
        <Item>
          <Link to="/"><span class="material-symbols-outlined">home</span></Link>
 
        </Item>
        <Item>
          <span class="material-symbols-outlined">search</span>
        </Item>
        <Item>
          <Link to="/join"><span class="material-symbols-outlined">account_circle</span></Link>
        </Item>
        <Item>
          <span class="material-symbols-outlined">more_horiz</span>
        </Item>
      </Lower>
      </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default Main;
