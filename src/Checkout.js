import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
// import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue(); // Correctly call the useStateValue hook

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          className="checkout__ad" 
          alt="" 
        />

        <div>

          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket?.map((item) => (
            <CheckoutProduct
              key={item.id} // Add a unique key prop
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
