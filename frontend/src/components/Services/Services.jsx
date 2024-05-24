import React from "react";
import "./Services.scss"

const Services = () => {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="section-heading text-center ">
          <div className="section-item"></div>
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="row justify-content-between services">
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <img
          className="mb-2"
            style={{ width: "50px", height: "50px" }}
            src="https://preview.colorlib.com/theme/course/images/earth-globe.svg"
            alt=""
          />
          <h6>Online Courses</h6>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <img
          className="mb-2"
            style={{ width: "50px", height: "50px" }}
            src="https://preview.colorlib.com/theme/course/images/exam.svg"
            alt=""
          />
          <h6>Online Courses</h6>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <img
          className="mb-2"
            style={{ width: "50px", height: "50px" }}
            src="https://preview.colorlib.com/theme/course/images/books.svg"
            alt=""
          />
          <h6>Online Courses</h6>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <img
          className="mb-2"
            style={{ width: "50px", height: "50px" }}
            src="https://preview.colorlib.com/theme/course/images/professor.svg"
            alt=""
          />
          <h6>Online Courses</h6>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <img
          className="mb-2"
            style={{ width: "50px", height: "50px" }}
            src="https://preview.colorlib.com/theme/course/images/blackboard.svg"
            alt=""
          />
          <h6>Online Courses</h6>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <img
          className="mb-2"
            style={{ width: "50px", height: "50px" }}
            src="https://preview.colorlib.com/theme/course/images/mortarboard.svg"
            alt=""
          />
          <h6>Online Courses</h6>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
