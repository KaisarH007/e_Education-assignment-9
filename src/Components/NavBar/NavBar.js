import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bacground">
      <div className=" ">
        <div className="row">
          <div className="col-md-2">
            <div className="d-flex">
              <img className="w-75 pb-2" src={logo} alt="" />
              <div>
                <h3 className="mt-4 pt-4 fw-bold">E_Education</h3>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div>
              <ul className="d-flex align-items-end justify-content-end mt-4 pt-2">
                <Link to="/home" className="nav-items">
                  <li>Home</li>
                </Link>
                <Link to="/service" className="nav-items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="nav-items">
                  <li>About courses</li>
                </Link>
                <Link to="contact" className="nav-items">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
