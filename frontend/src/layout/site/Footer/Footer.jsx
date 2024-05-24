import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer py-5">
      <div className="container">
        <div className="row justify-content-center my-5 border-bottom footer-subs">
          <div className="section-heading text-center mb-5 pb-5">
            <div className="section-item"></div>
            <h2>Subscribe to newsletter</h2>
            <form action="">
              <input type="text" placeholder="Email Address" />
              <button className="btn btn-warning">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="row justify-content-between border-bottom pb-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className=" d-flex align-items-center gap-2">
              <img
                src="https://preview.colorlib.com/theme/course/images/logo.png.webp"
                alt=""
                className="img-fluid"
              />
              <h2 className="header-heading">COURSE</h2>
            </div>

            <ul className="nav flex-column ">
              <li className="nav-items">
                <p className="footer-p">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum, tempor lacus.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Menu</h4>
            <ul className="nav flex-column gap-2 mt-3 ">
              <li className="nav-items">
                <Link to="#">Home</Link>
              </li>
              <li className="nav-items">
                <Link to="#">About Us</Link>
              </li>
              <li className="nav-items">
                <Link to="#">Courses</Link>
              </li>
              <li className="nav-items">
                <Link to="#">News</Link>
              </li>
              <li className="nav-items">
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Usefull Links</h4>
            <ul className="nav flex-column gap-2 mt-3 ">
              <li className="nav-items">
                <Link to="#">Testimonials</Link>
              </li>
              <li className="nav-items">
                <Link to="#">FAQ</Link>
              </li>
              <li className="nav-items">
                <Link to="#">Community</Link>
              </li>
              <li className="nav-items">
                <Link to="#">Campus Pictures</Link>
              </li>
              <li className="nav-items">
                <Link to="#">Tuitions</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Contact</h4>
            <ul className="nav flex-column gap-2 mt-3 ">
              <li className="nav-items">
                <p to="#">
                  <i className="fa-solid fa-location-dot"></i>
                  <span> Blvd Libertad, 34 m05200 Arévalo</span>
                </p>
              </li>
              <li className="nav-items">
                <p to="#">
                  <i className="fa-solid fa-mobile"></i>
                  <span>0034 37483 2445 322</span>
                </p>
              </li>
              <li className="nav-items">
                <p to="#">
                  <i className="fa-solid fa-envelope"></i>
                  <span>hello@company.com</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-between ">
          <span>
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <i className="fa-solid fa-heart"></i> by{" "}
            <Link to="#">Colorlib</Link>
          </span>
          <ul className="nav align-items-center gap-4 copy">
            <li className="nav-items">
              <Link to="#">
                <i className="fa-brands fa-pinterest"></i>
              </Link>
            </li>
            <li className="nav-items">
              <Link to="#">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li className="nav-items">
              <Link to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="nav-items">
              <Link to="#">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li className="nav-items">
              <Link to="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
