import { useDispatch, useSelector } from "react-redux";
import ReservationSlice from "../Reducer/reservationSllice";

function Payment() {
  const me = useSelector((state) => state.user).filter((v) => v.on === true);
  const myPlan = useSelector((state) => state.plan).filter(
    (v) => v.id === me[0].id
  );

  return (
    <>
      <h1>Payment</h1>
      <h1>{me[0]?.nickname}</h1>
      <h1>{myPlan[0].city}</h1>
      <form>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            required
          />
        </div>
        <div>
          <label htmlFor="securityCode">Security Code</label>
          <input type="text" id="securityCode" name="securityCode" required />
        </div>
        <button>Submit Payment</button>
      </form>
    </>
  );
}
export default Payment;
