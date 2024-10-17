import React from "react";
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer.js";
import CurrencyFormat from "react-currency-format";
import { FormattedNumber } from 'react-intl'; // Import FormattedNumber

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
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
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"} 
        thousandSeparator={true} 
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
