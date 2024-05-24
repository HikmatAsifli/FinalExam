import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container header">
      <div className="logo my-4 d-flex gap-2 align-items-center">
        <img
          src="https://preview.colorlib.com/theme/course/images/logo.png.webp"
          alt=""
          className="img-fluid"
        />
        <h2 className="header-heading">COURSE</h2>
      </div>
      <ul className="nav gap-2">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/basket">BASKET</Link>
        </li>
        <li className="nav-item">
          <Link to="/wishlist"> WISHLIST</Link>
        </li>
        <li className="nav-item">
          <Link to="#"> ELEMENTS</Link>
        </li>
        <li className="nav-item">
          <Link to="#"> NEWS</Link>
        </li>
        <li className="nav-item">
          <Link to="#"> CONTACT</Link>
        </li>
      </ul>
      <div className="header-contact">
        <i className="fa-solid fa-phone"></i>
        <span>+43 4566 7788 2457</span>
      </div>
    </div>
  );
};

export default Header;
