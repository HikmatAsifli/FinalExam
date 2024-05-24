import React, { useContext, useState } from "react";
import "./Courses.scss";
import MainContext from "../../context/context";
import { Link } from "react-router-dom";

const Courses = () => {
  const { data, addToBasket, addToWishlist } = useContext(MainContext);
  const [inpVal, setInpVal] = useState("");
  const [sort, setSort] = useState(null);
  return (
    <div className="container mb-5 courses">
      <div className="row justify-content-center my-5">
        <div className="section-heading text-center ">
          <div className="section-item"></div>
          <h2>Popular Courses</h2>
        </div>
      </div>
      <div className="row justify-content-between mb-5">
        <div className="col-lg-10">
          <input
            type="text"
            value={inpVal}
            onChange={(e) => {
              setInpVal(e.target.value);
            }}
            placeholder="search"
          />
          <button
            className="btn btn-success mx-3"
            onClick={() => setSort(null)}
          >
            Default
          </button>
          <button
            className="btn btn-primary mx-3"
            onClick={() => setSort({ field: "title", asc: true })}
          >
            A-Z
          </button>
          <button
            className="btn btn-primary mx-3"
            onClick={() => setSort({ field: "title", asc: false })}
          >
            Z-A
          </button>
          <button
            className="btn btn-warning mx-3"
            onClick={() => setSort({ field: "price", asc: false })}
          >
            High to Low
          </button>
          <button
            className="btn btn-warning mx-3"
            onClick={() => setSort({ field: "price", asc: true })}
          >
            Low to High
          </button>
        </div>
      </div>
      <div className="row justif y-content-between">
        {data
          .filter((x) =>
            x.title.toLowerCase().includes(inpVal.toLocaleLowerCase())
          )
          .sort((a, b) => {
            if (!sort) {
              return 0;
            } else if (sort.asc == true) {
              return a[sort.field] > b[sort.field]
                ? 1
                : b[sort.field] > a[sort.field]
                ? -1
                : 0;
            } else if (sort.asc == false) {
              return a[sort.field] < b[sort.field]
                ? 1
                : b[sort.field] <a[sort.field]
                ? -1
                : 0;
            }
          })
          .map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 cart mb-3">
              <img className="cart-img" src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  addToBasket(item._id);
                }}
              >
                Add To Basket
              </button>
              <button
                className="btn btn-primary mx-3"
                onClick={() => {
                  addToWishlist(item._id);
                }}
              >
                WishList
              </button>
              <Link to={`/detail/${item._id}`} className="btn btn-primary ">
                Detail Page
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Courses;
