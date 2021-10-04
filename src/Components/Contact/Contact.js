import React from "react";
import logo from "../../images/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";

const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;
const locationIcon = <FontAwesomeIcon icon={faSearchLocation} />;
const Contact = () => {
  return (
    <div>
      <div className="text-center">
        <img style={{ width: "400px" }} src={logo} alt="" />
      </div>
      <div className="text-center">
        <h5>{mailIcon} Email: e_education@gmail.com</h5>
        <h5>{phoneIcon} Phone: +9714 3453033</h5>
        <address>
          <p>
            {locationIcon}Al Maktab Building, Barsha PO Box 211156, Dubai, UAE
            Google Map location
          </p>
        </address>
      </div>
    </div>
  );
};

export default Contact;
