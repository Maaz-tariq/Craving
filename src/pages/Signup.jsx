import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:loginDetails.name, email:loginDetails.email,password:loginDetails.password, geolocation:loginDetails.geolocation })
    });

    const json = await response.json();
    console.log(json);
 
    if(!json.success) {
      alert("Invalid credentials");
    }

  }

  const onChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form
        style={{ height: "500px", width: "500px", display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >

        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={loginDetails.name}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={loginDetails.email}
            onChange={onChange}
          />
          <div className="form-text">We'll never share your email.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={loginDetails.password}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="geolocation" className="form-label fw-bold">Address</label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            value={loginDetails.geolocation}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-success mx-auto" style={{ width: "120px" }}>
          Submit
        </button>

        <Link to="/login" className="btn btn-dark mx-auto mt-3" style={{ width: "200px" }}>
          Already a user
        </Link>

      </form>
    </div>
  )
}
