import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlanSlice from "../Reducer/planSlice";
import Search from "./Search";

const StyledCalendar = styled(Calendar)`
  & .react-calendar {
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  & .react-calendar__month-view__days__day {
    font-size: 16px;
    font-weight: bold;
  }

  & .react-calendar__tile--now {
    background-color: #b3d9ff;
  }
`;

function Planner() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [selectedDates, setSelectedDates] = useState([]);

  // const [cities, setCities] = useState({
  //   서울: false,
  //   부산: false,
  //   제주: false,
  //   대구: false,
  //   경주: false,
  // });
  const [cities, setCities] = useState("");
  const visitedCities = Object.keys(cities).filter((key) => cities[key]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    // 선택한 기간의 모든 날짜 구하기
    const dates = [];
    let currentDate = new Date(date[0]);

    while (currentDate <= date[date.length - 1]) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setSelectedDates(dates);
    setDateRange(date);
  };
  const toggleCityVisited = (city) => {
    setCities((prevCities) => {
      const newCities = { ...prevCities };
      newCities[city] = !prevCities[city];
      return newCities;
    });
  };

  const user = useSelector((state) => state.user);
  const me = user.filter((v) => v.on === true);

  const [peopleNum, setPeopleNum] = useState(1);

  const onMakePlan = () => {
    //reducer  날짜+지역
    const plan = {
      member_no: me[0].member_no,
      city_no: cities,
      reservationNumber: peopleNum,
      dates: selectedDates.map((date) => ({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      })),
    };

    dispatch(PlanSlice.actions.ADD_PLAN(
      {
        member_no: me[0].member_no,
        city_no: cities,
        reservationNumber: peopleNum,
        dates: selectedDates.map((date) => ({
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate(),
        })),
      }
    ));
    navigate(`/place/${cities}`);
  };
  return (
    <>
      planner
      <h3>인원</h3>
      <input
        onChange={(e) => {
          setPeopleNum(e.target.value);
        }}
        placeholder="예약 인원"
        value={peopleNum}
      />
      <div>
        <button
          onClick={() => {
            peopleNum > 1 ? setPeopleNum(peopleNum - 1) : setPeopleNum(1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setPeopleNum(peopleNum + 1);
          }}
        >
          +
        </button>
      </div>
      <Search setCities={setCities} />
      <StyledCalendar
        value={dateRange}
        onChange={handleDateChange}
        selectRange={true}
      />
      {selectedDates.length === 0 || cities === "" ? (
        <h2>시작/끝 날짜를 선택하세요</h2>
      ) : (
        <button onClick={onMakePlan}>
          {peopleNum}명,
          {cities},{selectedDates[0]?.getFullYear()}.
          {selectedDates[0]?.getMonth()}.{selectedDates[0]?.getDate()}~
          {selectedDates[selectedDates.length - 1]?.getFullYear()}.
          {selectedDates[selectedDates.length - 1]?.getMonth()}.
          {selectedDates[selectedDates.length - 1]?.getDate()}
        </button>
      )}
    </>
  );
}
export default Planner;
