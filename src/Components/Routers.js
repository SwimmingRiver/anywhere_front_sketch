import { Route, Routes } from "react-router-dom";

import Join from "../Components/Join";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Kakao from "../Util/Kakao";
import Search from "../Components/Search";
import LodgeInfo from "../Components/LodgeInfo";
import Planner from "../Components/Planner";
import Profile from "../Pages/Profile";
import Place from "../Components/Place";
import EditProfile from "./../Components/EditProfile";
import MyPlan from "../Components/MyPlan";
import Payment from "../Components/Payment";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/kakaologin" element={<Kakao />} />
      <Route path="/lodgeinfo/:id/:room" element={<LodgeInfo />} />
      <Route path="/search" element={<Search />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/place/:id" element={<Place />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/myplan" element={<MyPlan />} />
      <Route path="/payment/:room" element={<Payment />} />
    </Routes>
  );
}
export default Routers;
