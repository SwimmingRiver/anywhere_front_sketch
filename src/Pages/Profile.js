import { useSelector } from "react-redux";

function Profile() {
  const me = useSelector((state) => state.filter((v) => v.on === true));
  return (
    <>
      <h1>{`${me[0].nickname} profile`}</h1>
      <h2>{`${me[0].nickname} info`}</h2>
    </>
  );
}
export default Profile;
