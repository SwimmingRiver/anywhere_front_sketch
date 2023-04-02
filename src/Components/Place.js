import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import styled from "styled-components";
import { useState } from "react";
const Nav = styled.div`
  display: flex;
`;

function Place() {
  const { id } = useParams();
  const navigate = useNavigate();

  const me = useSelector((state) => state.user)
    .filter((v) => v.on === true)
    .map((v) => v);
  const myPlan = useSelector((state) => state.plan)
    .filter((v) => v.id === me[0].id)
    .map((v) => v);
  const loadPlan = myPlan.filter((v) => v.city === id);

  const [room, setRoom] = useState(0);

  const OnClick = () => {
    navigate(`/lodgeinfo/${loadPlan[0].city}/${room}`);
  };
  return (
    <>
      <h1>Place</h1>
      <Nav>
        (<h1>{loadPlan[0].city}</h1>/
        <h1>{`${loadPlan[0].reservationNumber}명`}</h1>/
        <h1>{`${loadPlan[0].dates[0].year}`}</h1>/
        <h1>{`${loadPlan[0].dates[0].month}`}</h1>/
        <h1>{`${loadPlan[0].dates[0].day}`}</h1>~
        <h1>{`${loadPlan[0].dates[loadPlan[0].dates.length - 1].year}`}</h1>/
        <h1>{`${loadPlan[0].dates[loadPlan[0].dates.length - 1].month}`}</h1>/
        <h1>{`${loadPlan[0].dates[loadPlan[0].dates.length - 1].day}`}</h1>)
      </Nav>
      <div onClick={OnClick}>
        <Carousel onClick={OnClick} place={`${id}/ 1번 숙소명`} />
        <Carousel place={`${id}/ 2번 숙소명`} />
        <Carousel place={`${id}/ 3번 숙소명`} />
      </div>
    </>
  );
}
export default Place;
