import React from "react";

import { useStateValue } from "../../redux/StateProvider";

import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import Subtotal from "../../components/subtotal/Subtotal";

import "./Checkout.styles.scss";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="left">
        <img
          className="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="title">Your shopping Basket</h2>

          {basket.map((item) => (
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

      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
