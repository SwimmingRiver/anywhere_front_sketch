import { useParams } from "react-router-dom";

function Place(props) {
  const trips = [
    {
      id: 0,
      title: "서울 여행",
      description: "서울의 명소를 둘러보세요",
    },
    {
      id: 1,
      title: "부산 여행",
      description: "해변과 음식을 즐기세요",
    },
    {
      id: 2,
      title: "제주도 여행",
      description: "바다와 자연을 즐기세요",
    },
  ];

  const { id } = useParams();
  const getTrips = trips.map((v) => v.id);
  return (
    <>
      <h1>Place</h1>
      <h1>{trips[id].title}</h1>
      <h3>{trips[id].description}</h3>
    </>
  );
}
export default Place;
