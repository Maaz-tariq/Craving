import { Link , useNavigate} from "react-router-dom";
import React from "react";
import Badge from 'react-bootstrap/Badge';
import { useState } from "react";
import Modal from "../Modal.jsx";
import { useCart } from "../components/CartContext";
import Cart from "../pages/Cart.jsx";


export default function Navbar() {
  const [cartView, setcartView] =  useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  const cart = useCart();


  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      style={{ backgroundClip: "rgba(212, 249, 237, 1)" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fs-1 fw-bold fst-italic"
          style={{ marginLeft: "40px" }}
          to="/"
        >
          Kraving
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" 
         style={{
          width:"700px"
         }}
        >
          <form className="d-flex mx-auto" 
          style={{
            width:"600px",
            border:"2px solid black"
          }}
          >
            <input
              style={{ borderRadius: "8px 8px 8px 8px" }}
              className="form-control "
              placeholder="Enter food name"
            />

            <button
              className="btn btn-success ml-25"
              style={{ marginLeft: "10px" }}
            >
              Search
            </button>
          </form>

          <Link
            className="nav-link me-3 bg-success text-white"
            style={{
              marginRight: "20px",
              width: "72.6px",
              height: "37.6px",
              borderRadius: "7px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "25px",
              border:"2px solid black"
            }}
            to="/home"
          >
            Home
          </Link>

          {localStorage.getItem("token") ? (
            <Link
              className="nav-link me-3 bg-success text-white"
              style={{
                marginRight: "20px",
                width: "77.6px",
                height: "37.6px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "50px",
              }}
              to="/"
            >
              My orders
            </Link>
          ) : (
            " "
          )}
        </div>

        <div className="ls d-flex">
          {!localStorage.getItem("token") ? (
            <>
              <Link
                className="nav-link me-3 bg-success text-white"
                style={{
                  marginLeft: "20px",
                  width: "72.6px",
                  height: "37.6px",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                to="/login"
              >
                Login
              </Link>

              <Link
                className="nav-link me-3 bg-success text-white"
                style={{
                  marginLeft: "20px",
                  width: "72.6px",
                  height: "37.6px",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                to="/signup"
              >
                Signup
              </Link>
            </>
          ) : (
            <div className="d-flex align-items-center">
              <div
                className="btn nav-link me-3 bg-success text-white"
                style={{
                  marginLeft: "20px",
                  width: "72.6px",
                  height: "39.6px",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={()=>{setcartView(true)}}
              >
                My Cart {" "}
                <Badge pill bg="light" text="dark">
  {cart.length}
</Badge>

              </div>
              {cartView && (
  <Modal onClose={() => setcartView(false)}>
    <Cart />
  </Modal>
)}

              <div
              onClick={handleLogout}
                className="btn nav-link me-3 bg-success text-white"
                style={{
                  marginLeft: "20px",
                  width: "72.6px",
                  height: "37.6px",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
