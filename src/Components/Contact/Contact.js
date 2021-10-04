import React from "react";
import logo from "../../images/contact.jpg";
const Contact = () => {
  return (
    <div>
      <div className="text-center">
        <img style={{ width: "400px" }} src={logo} alt="" />
      </div>
      <div className="text-center">
        <h5>Email: e_education@gmail.com</h5>
        <h5>Phone: +9714 3453033</h5>
        <address>
          <p>
            Al Maktab Building, Barsha PO Box 211156, Dubai, UAE Google Map
            location
          </p>
        </address>
      </div>
    </div>
  );
};

export default Contact;
