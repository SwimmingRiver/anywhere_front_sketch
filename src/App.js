import Join from "./Components/Join";
import styled from "styled-components";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from './Pages/Main';
import Login from './Components/Login';
import Nav from './Nav';

const Title = styled.h1`
  font-size: 3em;
  color: #a566ff;
  font-family: "Itim", cursive;
  /* text-shadow: -1px 0px #a566ff, 0px 1px white, 1px 0px black, 0px -1px black; */
  text-shadow: 1px 1px 1px;
`;
const Wrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function App() {
  return (
    <>
    <Wrapper>
     <Title>Anywhere</Title>
     

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;
