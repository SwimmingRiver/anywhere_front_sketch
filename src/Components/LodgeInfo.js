import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReservationSlice from "../Reducer/reservationSllice";
import Carousel from "./Carousel";

function LodgeInfo() {
  const { id, room } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const me = useSelector((state) => state.user.filter((v) => v.on === true));
  const plan = useSelector((state) =>
    state.plan.filter((v) => v.id === me[0].id)
  );

  const onClick = () => {
    navigate("/payment");
    dispatch(
      ReservationSlice.actions.ADD_RESERVATION({
        room_name: room,
        city: plan[0].city,
      })
    );
  };
  return (
    <>
      <h1>{me[0].nickname}</h1>
      <h1>{id}lodge info</h1>

      <Carousel />
      <h2>숙소 이름{room}</h2>
      <h2>호스트 정보</h2>
      <h2>특징 키워드</h2>
      <h2>상세 정보</h2>
      <h2>위치 정보</h2>
      <h2>예약 날짜</h2>
      <h2>후기</h2>
      <button onClick={onClick}>결제하기</button>
    </>
  );
}
export default LodgeInfo;
