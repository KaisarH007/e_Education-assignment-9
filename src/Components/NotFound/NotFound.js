import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="text-center">
      <div className="text-center">
        <img style={{ width: "400px" }} src={image} alt="" />
      </div>
      <Link to="/home">
        <Button className="px-4 fw-bold">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
