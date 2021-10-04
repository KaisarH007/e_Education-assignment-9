import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const Services = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./fakeDataService.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-4 mt-4">
        {courses.map((course) => (
          <Col>
            <Card className="h-100  shadow">
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={course.img}
              />
              <Card.Body>
                <Card.Title>{course.titel}</Card.Title>
                <Card.Text>{course.description}</Card.Text>

                <h4 className="">Price ${course.price}</h4>

                <div className=" d-flex align-items-end justify-content-end">
                  <Button className="">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
