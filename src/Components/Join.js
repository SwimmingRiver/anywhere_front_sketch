import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

function LodgeInfo() {
  const { id, room } = useParams();
  // const me = useSelector((state) =>
  //   state.user.map((v) => v).filter((v) => v.on === true)
  // );
  const me = useSelector((state) => state.user.filter((v) => v.on === true));

  return (
    <>
      <h1>{me[0]}</h1>
      <h1>{id}lodge info</h1>

      <Carousel />
      <h2>숙소 이름{room}</h2>
      <hr />
      <h2>호스트 정보</h2>
      <hr />
      <h2>특징 키워드</h2>
      <hr />
      <h2>상세 정보</h2>
      <hr />
      <h2>위치 정보</h2>
      <hr />
      <h2>예약 날짜</h2>
      <hr />
      <h2>후기</h2>
      <hr />
      <button></button>
    </>
  );
}
export default LodgeInfo;
