import React from "react";
import "./Events.scss";

const Events = () => {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="section-heading text-center ">
          <div className="section-item"></div>
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="row justify-content-between ">
        <div className="col-lg-2 mb-4">
          <div className="box d-flex flex-column justify-content-center align-items-center ">
            <h2>07</h2>
            <span>January</span>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <h2>Student Festival</h2>
          <span>Grand Central Park</span>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus
            tortor.
          </p>
        </div>
        <div className="col-lg-4 mb-4">
          <img
            className="img-fluid"
            src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp"
            alt=""
          />
        </div>
        <div className="col-lg-2 mb-4">
          <div className="box d-flex flex-column justify-content-center align-items-center ">
            <h2>07</h2>
            <span>January</span>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <h2>Open day in the Univesrsity campus</h2>
          <span>Grand Central Park</span>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus
            tortor.
          </p>
        </div>
        <div className="col-lg-4 mb-4">
          <img
            className="img-fluid"
            src="https://preview.colorlib.com/theme/course/images/event_2.jpg.webp"
            alt=""
          />
        </div>
        <div className="col-lg-2 mb-4">
          <div className="box d-flex flex-column justify-content-center align-items-center ">
            <h2>07</h2>
            <span>January</span>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <h2>Student Graduation Ceremony</h2>
          <span>Grand Central Park</span>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus
            tortor.
          </p>
        </div>
        <div className="col-lg-4 mb-4">
          <img
            className="img-fluid"
            src="https://preview.colorlib.com/theme/course/images/event_3.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
