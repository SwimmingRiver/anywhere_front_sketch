import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

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
  return (
    <>
      planner
      <h2>where?</h2>
      <StyledCalendar
        value={dateRange}
        onChange={handleDateChange}
        selectRange={true}
      />
      {selectedDates.length === 0 ? (
        <h2>시작/끝 날짜를 선택하세요</h2>
      ) : (
        <button>
          {selectedDates[0]?.getFullYear()}.{selectedDates[0]?.getMonth()}.
          {selectedDates[0]?.getDate()}~
          {selectedDates[selectedDates.length - 1]?.getFullYear()}.
          {selectedDates[selectedDates.length - 1]?.getMonth()}.
          {selectedDates[selectedDates.length - 1]?.getDate()}
        </button>
      )}
    </>
  );
}
export default Planner;
