// import React, { useState } from "react";

// export default function Card(props) {
//   const { foodItem, options, imgSrc } = props;

//   const priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0]);

//   const finalPrice = qty * parseInt(options[size]);

//   return (
//     <div>
//       <div
//         className="card"
//         style={{
//           width: "18rem",
//           height: "340px",
//           marginTop: "30px",
//         }}
//       >
//         {/* ✅ IMAGE FIX */}
//         <img
//           src={imgSrc}
//           className="card-img-top"
//           alt={foodItem}
//           style={{ height: "150px", objectFit: "cover" }}
//         />

//         <div className="card-body">
//           <h5 className="card-title">{foodItem}</h5>

//           <div className="container w-100 d-flex justify-content-between">
//             {/* ✅ QUANTITY */}
//             <select
//               className="m-1 rounded"
//               value={qty}
//               onChange={(e) => setQty(e.target.value)}
//             >
//               {Array.from({ length: 6 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>

//             {/* ✅ HALF / FULL */}
//             <select
//               className="m-1 rounded"
//               value={size}
//               onChange={(e) => setSize(e.target.value)}
//             >
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>
//                   {data}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <hr />

//           {/* ✅ PRICE */}
//           <div className="fs-5">
//             ₹ {finalPrice}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";


// export default function Card(props) {


//   let options = props.options;
//   let priceOptions = Object.keys(options);



//   return (
//     <div>
//       {" "}
//       <div
//         className="card"
//         style={{
//           width: "18rem",
//           height: "260px",
//           marginTop: "50px",
//           marginLeft: "50px",
//         }}
//       >
//         {" "}
//         <img src="..." className="card-img-top" alt="..." />{" "}
//         <div className="card-body">
//           {" "}
//           <h5 className="card-title">{props.foodItem}</h5>{" "}
//           <p className="card-text">This is a card.</p>{" "}
//           <div className="container w-100">
//             {" "}
//             <select
//               className="m-2 h-100 rounded"
//               style={{ backgroundColor: "rgb(174, 218, 204)" }}
//             >
//               {" "}
//               {Array.from({ length: 6 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {" "}
//                   {i + 1}{" "}
//                 </option>
//               ))}{" "}
//             </select>{" "}
//             <select
//               className="m-2 h-100 rounded"
//               style={{ backgroundColor: "rgb(174, 218, 204)" }}
//             >
//               {" "}
//               {/* <option value="half">Half</option> <option value="full">Full</option> */}{" "}
//               {priceOptions.map((data) => {
//                 return (
//                   <option key={data} value={data}>
//                     {data}
//                   </option>
//                 );
//               })}{" "}
//             </select>{" "}
//             <div className="d-inline h-100 fs-5" style={{ marginLeft: "20px" }}>
//               {" "}
//               Price{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>
//   );
// }


import React from "react";

export default function Card(props) {
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
          <h5 className="card-title">{props.foodItem}</h5>
          <p className="card-text">This is a card.</p>

          <div className="container w-100">
            {/* Quantity */}
            <select
              className="m-2 h-100 rounded"
              style={{ backgroundColor: "rgb(174, 218, 204)" }}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* ✅ Size: Small / Medium / Large */}
            <select
              className="m-2 h-100 rounded"
              style={{ backgroundColor: "rgb(174, 218, 204)" }}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>

            <div
              className="d-inline h-100 fs-5"
              style={{ marginLeft: "20px" }}
            >
              Price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
