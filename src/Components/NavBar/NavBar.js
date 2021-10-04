import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bacground">
      <div className="container ">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div>
              <ul className="d-flex align-items-end justify-content-end mt-3">
                <Link to="/home" className="nav-items">
                  <li>Home</li>
                </Link>
                <Link to="/service" className="nav-items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="nav-items">
                  <li>About us</li>
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
