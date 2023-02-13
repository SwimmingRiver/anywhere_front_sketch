import React from 'react';
import Slider from 'react-slick';
import styled  from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
    border: solid 1px black;
    width: 25vw;
    height: 25vh;
`;
const Box = styled.div`
    border: solid 1px black;
    width: 25vw;
    height: 25vh;
    border-radius: 5px;
    background-color: aquamarine;
`;

function Carousel(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <SliderWrapper>
        <h2> 여행지 이름</h2>
        <Slider {...settings}>
          <div>
            <Box>1</Box>
          </div>
          <div>
            <Box>2</Box>
          </div>
          <div>
            <Box>3</Box>
          </div>
          <div>
            <Box>4</Box>
          </div>
          <div>
            <Box>5</Box>
          </div>
          <div>
            <Box>6</Box>
          </div>
        </Slider>
      </SliderWrapper>
    )
}
export default Carousel;