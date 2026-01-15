// import React from "react";

// export default function Card(props) {
//   return (
//     <div>
//       <div
//         className="card"
//         style={{
//           height: "260px",
//           marginTop: "50px",
//           marginLeft: "50px",
//         }}
//       >
//         <img
//           src={imgSrc}
//           className="card-img-top"
//           alt="food"
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.foodItem}</h5>
//           <p className="card-text">This is a card.</p>

//           <div className="container w-100">
//             {/* Quantity */}
//             <select
//               className="m-2 h-100 rounded"
//               style={{ backgroundColor: "rgb(174, 218, 204)" }}
//             >
//               {Array.from({ length: 6 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>

//             <select
//               className="m-2 h-100 rounded"
//               style={{ backgroundColor: "rgb(174, 218, 204)" }}
//             >
//               <option value="small">Small</option>
//               <option value="medium">Medium</option>
//               <option value="large">Large</option>
//             </select>

//             <div className="d-inline h-100 fs-5" style={{ marginLeft: "20px" }}>
//               Price
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function Card(props) {
  return (
    <div className="card h-100">
      <img
        src={props.imgSrc}
        className="card-img-top"
        alt="food"
        style={{
          height: "200px",
          objectFit: "cover"
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.foodItem}</h5>
        <p className="card-text">This is a card.</p>

        <div className="mt-auto">
          <select
            className="me-2 rounded"
            style={{ backgroundColor: "rgb(174, 218, 204)" }}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="me-2 rounded"
            style={{ backgroundColor: "rgb(174, 218, 204)" }}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          <span className="fw-bold">Price</span>
        </div>
      </div>
    </div>
  );
}
