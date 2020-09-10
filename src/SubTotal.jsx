import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotalReducer } from "./reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = () => {
    const sum = basket.reduce((curr, x) => x.price + curr, 0);
    console.log("HERE THE SUM : " + sum);
    return sum;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {" "}
              SubTotal ({basket.length} items) : <strong>{`${value}`} </strong>{" "}
            </p>
            {/* <p>{basket.reduce((x, curr) => x.price + curr, 0)}</p> */}
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotalReducer(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
