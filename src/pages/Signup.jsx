import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [loginDetails, setloginDetails] = useState({ name: "", password: "", email: "", geolocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })

  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <form style={{ height: "500px", width: "500px", display: "flex", justifyContent: "center", flexDirection: "column" }} onSubmit={handleSubmit}>

          <div className="mb-3">
            <label for="name" className="form-label" style={{ fontWeight: "bold" }}>Name</label>
            <input type="text" className="form-control" name='name' value={loginDetails.name} />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" style={{ fontWeight: "bold" }}>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={loginDetails.email} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label" style={{ fontWeight: "bold" }}>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={loginDetails.password} />
          </div>

          <div className="mb-3">
            <label for="name" className="form-label" style={{ fontWeight: "bold" }}>Address</label>
            <input type="text" className="form-control" name='address' value={loginDetails.geolocation} />
          </div>

          <div className="button" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button type="submit" className="btn btn-success" style={{ width: "100px" }}>Submit</button>
          </div>

          <div className="button" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link to="/login" className="mg-3 mt-3 btn btn-dark" style={{ width: "200px" }}>Already a user</Link>
          </div>

        </form>
      </div>
    </>
  )
}
