import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
          <form className="d-flex mx-auto w-50">
            <input
              className="form-control me-2"
              placeholder="Enter food name"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>

          <Link className="nav-link me-3" to="/">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
