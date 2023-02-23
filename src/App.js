import Join from "./Components/Join";
import styled from "styled-components";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from './Pages/Main';
import Login from './Components/Login';
import Nav from './Nav';
import Kakao from "./Util/Kakao";
import { useState } from "react";

const Title = styled.h1`
  font-size: 1em;
  width: 100vw;
  color: white;
  background-color: #a566ff;
  
  font-family: "Itim", cursive;
  /* text-shadow: -1px 0px #a566ff, 0px 1px white, 1px 0px black, 0px -1px black; */
  text-shadow: 1px 1px 1px;
  @media(max-width: 500px) {
    color: black;
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
const Hamburg = styled.button`
  @media(min-width: 500px) {
    display: none;
  }
`;
function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
    <Wrapper>
      <HeadWrapper>
    <Hamburg
            onClick={() => {
              setNavToggle((prev) => !prev);
            }}
          >
            Ham
          </Hamburg>
     <Title>Anywhere</Title>
     </HeadWrapper>
      <BrowserRouter basename="/anywhere/front_sketch/">
      {navToggle ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/kakaologin" element={<Kakao/>}/>
      </Routes>
      </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;
