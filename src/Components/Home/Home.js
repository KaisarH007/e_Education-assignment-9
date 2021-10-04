import React from "react";
import Courses from "../Courses/Courses";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <div className="container">
        <Courses></Courses>
      </div>
    </div>
  );
};

export default Home;
