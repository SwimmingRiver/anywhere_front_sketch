import Carousel from "../Components/Carousel";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 25em 25em;
  grid-template-rows: 25em 25em;
  place-items: center;
  @media(max-width:500px){
    grid-template-columns: 100%;
    grid-template-rows: 25em 25em 25em 25em 25em;
    place-items: center;
    
  }
`;


function Home(){
    return(<>
     <h1>Home</h1>
    <CarouselWrapper>
        <Carousel place="도쿄" />
        <Carousel place="런던" />
        <Carousel place="뉴욕" />
        <Carousel place="부산" />
        <Carousel place="서울" />
        <Carousel place="오사카" />
        </CarouselWrapper>
    </>)
}
export default Home;