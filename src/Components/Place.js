import { useParams } from "react-router-dom";

function Place(props) {
  const { id } = useParams();
  return (
    <>
      <h1>Place</h1>
      <h1>{id}</h1>
    </>
  );
}
export default Place;
