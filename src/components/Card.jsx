import React from "react";

export default function Card() {
  return (
    <div>
      
      <div
        className="card"
        style={{
          width: "18rem",
          height: "260px",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a card.</p>
          <div className="container w-100">
            <select
              className="m-2 h-100  rounded"
              style={{ backgroundColor: "rgb(174, 218, 204)" }}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              className="m-2 h-100  rounded"
              style={{ backgroundColor: "rgb(174, 218, 204)" }}
            >
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5" style={{ marginLeft: "20px" }}>
              Price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
