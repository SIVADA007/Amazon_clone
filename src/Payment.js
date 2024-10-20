import React from "react";
import "./Paymant.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from  "react-router-dom";

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">

            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items </Link>
                )
            </h1>



        {/*payment section - delevery address */}



        <div className="payment__section">
                <div className="payment__title">

                    <h3>Delivery adress</h3>
                </div>

                <div className="payment__address">
                    <p>
                        {user?.email}
                    </p>

                    <p> eluthanikara street</p>
                    <p>madurai</p>
                </div>

        </div>

        {/*payment section - Reviewing items */}

        <div className="payment__section">

            <div className="payment__title">
                <h3>Review items and delivery  </h3>
            </div>

            <div className="payment__item">
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}                    
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    
                    />
                ))}
            </div>
        </div>

        {/*payment section - payment method */}

        <div className="payment__section">


            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">

                {/*Stripe magic*/}

            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
