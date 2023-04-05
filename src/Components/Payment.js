import { useDispatch, useSelector } from "react-redux";
import ReservationSlice from "../Reducer/reservationSllice";
import { useNavigate } from "react-router-dom";


function Payment() {
  const me = useSelector((state) => state.user).filter((v) => v.on === true);
  const myPlan = useSelector((state) => state.plan).filter(
    (v) => v.id === me[0].id
  );

  const dispatch = useDispatch();

  const navigate =useNavigate();

  const onSubmit=()=>{
    dispatch(ReservationSlice.actions.ADD_RESERVATION({
      user:me[0].nickname,
      location:myPlan[0].city,
    }))
    navigate("/");
  } 
  return (
    <>
      <h1>Payment</h1>
      <h1>{me[0]?.nickname}</h1>
      <h1>{myPlan[0].city}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber"  />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
          />
        </div>
        <div>
          <label htmlFor="securityCode">Security Code</label>
          <input type="text" id="securityCode" name="securityCode"  />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </>
  );
}
export default Payment;
