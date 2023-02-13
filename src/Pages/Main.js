import Carousel from "../Components/Carousel";
import styled from "styled-components";

const CarouselWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

function Main(){
    return(<>
     <h1>Main</h1>
    <CarouselWrapper>
        <Carousel/>
        <Carousel/>
        </CarouselWrapper>
    </>)
}
export default Main;