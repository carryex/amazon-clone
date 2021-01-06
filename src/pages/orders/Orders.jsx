import React, { useState, useEffect } from "react";

import { db } from "../../firebase/firebase";
import { useStateValue } from "../../redux/StateProvider";

import Order from "../../components/order/Order";

import "./Orders.styles.scss";

const Orders = () => {
  const [{ bakset, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      {orders?.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
};
export default Orders;
