import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyPlan() {
  const user = useSelector((state) => state.user);
  const me = user.filter((v) => v.on === true);

  const plans = useSelector((state) => state.plan);
  const myPlans = plans.filter((v) => v.id === me[0]?.id);


  return (
    <>
      <h1>{`${me[0].nickname}`} 님의 여행</h1>
      <h2>
        {myPlans[0]?.cities ? 
          myPlans.map((v,i) =>( <li key={i}>
            {v.cities}/{v.dates[0].year}/{v.dates[0].month}/{v.dates[0].day}~
          /{v.dates[v.dates.length-1].year}/{v.dates[v.dates.length-1].month}/{v.dates[v.dates.length-1].day}
          <button>reserve</button>
          <button>memo</button>
          </li>
          )
          )
         : (
          <Link to="/planner"> 여행 플랜을 만들어 보세요!</Link>
        )}
        
      </h2>
    </>
  );
}
export default MyPlan;