import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="background-banner text-white">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mt-4 ">
            <div>
              <h1 className="title">
                Find The Right <br />
                Course For You
              </h1>
              <p>
                You don't have to struggle alone, you've got our assistance and
                help.
              </p>
              <Link to="/contact">
                <Button className="px-4 py-2 fw-bold">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
