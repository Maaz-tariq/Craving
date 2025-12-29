import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            className="d-flex mx-auto w-50"
          >
            <input
              style={{ borderRadius: "8px 8px 8px 8px" }}
              className="form-control "
              placeholder="Enter food name"
            />
            <button
              className="btn btn-success ml-25"
              style={{marginLeft:"10px"}}
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
            }}
            to="/home"
          >
            Home
          </Link>
        </div>
        <Link
          className="nav-link me-3 bg-success text-white"
          style={{
            marginLeft: " 20px",
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
      </div>
    </nav>
  );
}
