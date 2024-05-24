import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center subs-left">
          <h1>Register now and get a discount <span>50%</span> discount until 1 January</h1>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
          <button className="btn btn-dark ">REGISTER NOW</button>
        </div>
        <div className="col-lg-6 col-md-12 subs-right">
            <h1>Search for your course</h1>
            <form action="" className="form">
                <input type="text" placeholder="Course Name" />
                <input type="text" placeholder="Category" />
                <input type="text" placeholder="Degree" />
                <button type="sumbit" className="btn btn-warning">Search Course</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
