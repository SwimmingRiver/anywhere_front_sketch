import Carousel from "../Components/Carousel";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50em 50em;
  grid-template-rows: 50em 50em;
  place-items: center;
`;


function Main(){
    return(<>
     <h1>Main</h1>
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
export default Main;