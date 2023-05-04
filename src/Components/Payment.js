import { useDispatch, useSelector } from "react-redux";
import ReservationSlice from "../Reducer/reservationSllice";
import { useNavigate } from "react-router-dom";

function Payment() {
  const me = useSelector((state) => state.user).filter((v) => v.on === true);
  const myPlan = useSelector((state) => state.plan).filter(
    (v) => v.member_no === me[0].member_no
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(
      ReservationSlice.actions.ADD_RESERVATION({
        user: me[0].member_no,
        location: myPlan[0].city_no,
      })
    );
    navigate("/");
  };
  return (
    <>
      <h1>Payment</h1>
      <h1>{me[0]?.member_name}</h1>
      <h1>{myPlan[0]?.city_no}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input type="text" id="expirationDate" name="expirationDate" />
        </div>
        <div>
          <label htmlFor="securityCode">Security Code</label>
          <input type="text" id="securityCode" name="securityCode" />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
      <h2>
        <button>계좌이체</button>
        <button>네이버페이</button>
        <button>카카오페이</button>
        <button>토스페이</button>
      </h2>
    </>
  );
}
export default Payment;
