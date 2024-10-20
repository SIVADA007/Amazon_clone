import React from "react";
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";
import { FormattedNumber } from 'react-intl'; // Correct usage of FormattedNumber
import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory

function Subtotal() {
  const navigate = useNavigate(); // Update to useNavigate from react-router-dom v6
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): 
        <strong>
          <FormattedNumber
            value={getBasketTotal(basket)}
            style="currency"
            currency="USD"
            minimumFractionDigits={2}
          />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={() => navigate('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
