import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="container-fluid p-0">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active banner">
            <img
              src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp"
              class="d-block w-100"
              alt="..."
            />
            <h1 className="text-center banner-heading">Get your <span>Education</span> today!</h1>
          </div>
          <div class="carousel-item banner">
            <img
              src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp"
              class="d-block w-100"
              alt="..."
            />
            <h1 className="text-center banner-heading">Get your <span>Education</span> today!</h1>
          </div>
          <div class="carousel-item banner">
            <img
              src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp"
              class="d-block w-100"
              alt="..."
            />
            <h1 className="text-center banner-heading">Get your <span>Education</span> today!</h1>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
