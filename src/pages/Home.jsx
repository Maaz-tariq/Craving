import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

import BG1 from "../Images/bg1.jpeg";
import BG2 from "../Images/bg2.jpeg";
import BG3 from "../Images/bg3.jpeg";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setFoodItem(data.foodItems);
      setFoodCat(data.foodCategories);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div>
        <div
          id="carouselExample"
          className="carousel slide position-relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={BG1}
                className="d-block w-100"
                style={{ height: "450px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={BG2}
                className="d-block w-100"
                style={{ height: "450px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={BG3}
                className="d-block w-100"
                style={{ height: "450px", objectFit: "cover" }}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>

      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((cat) => (
            <div key={cat._id} className="mb-4">
              {" "}
              <h3>{cat.CategoryName}</h3> <hr />{" "}
              <div className="row">
                {" "}
                {foodItem.length > 0 ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === cat.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                      <div key={item._id} className="col-12 col-md-6 col-lg-3">
                        <Card
                          foodItem={item.name}
                          options={item.options}
                          imgSrc={item.img}
                        />
                      </div>
                    ))
                ) : (
                  <div>No such data found</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No categories found</div>
        )}
      </div>
      <Footer />
    </>
  );
}
