import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// import DeleteIcon from "@mui/icons-material/Delete";

import { useCart, useDispatchCart } from "../components/CartContext";

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>;
  }

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");

    const response = await fetch("http://localhost:5000/api/auth/orderData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  const totalPrice = data.reduce(
    (total, food) => total + food.price * food.qty,
    0,
  );

  return (
    <div className="container m-auto mt-5 table-responsive">
      <table className="table table-hover">
        <thead className="text-success fs-4">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Option</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>₹{food.price}</td>
              <td>
                <button
                  className="btn p-0"
                  onClick={() => dispatch({ type: "REMOVE", index })}
                >
<FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total Price: ₹{totalPrice}/-</h2>

      <button className="btn bg-success mt-4" onClick={handleCheckOut}>
        Check Out
      </button>
    </div>
  );
}
