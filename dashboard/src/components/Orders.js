import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:8080/allOrders").then((res) => {
    //   setOrders(res.data);
    // });
    axios .get("https://zerodha-clone-backend-tawny.vercel.app/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">
        Orders ({orders.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>

                <td>{order.qty}</td>

                <td>
                  ₹
                  {Number(order.price).toFixed(
                    2
                  )}
                </td>

                <td>
                  <span
                    className={`order-type ${
                      order.mode === "BUY"
                        ? "buy"
                        : "sell"
                    }`}
                  >
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;