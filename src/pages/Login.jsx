import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginDetails.email,
        password: loginDetails.password
      })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      // store token (temporary) because of JWT
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form
        style={{ height: "300px", width: "400px", display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-4">Login</h3>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={loginDetails.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={loginDetails.password}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success mx-auto" style={{ width: "120px" }}>
          Login
        </button>

        <Link to="/signup" className="btn btn-dark mx-auto mt-3" style={{ width: "200px" }}>
          I am a new user
        </Link>
      </form>
    </div>
  );
}