import React from "react";
import { Row, Col } from "@the-simple/web-components";
import { Link } from "react-router-dom";

const GenreNavigation = () => {
  return (
    <Row style={{ borderBottom: "1px solid #f3f3f3" }}>
      <Col lg={2}>
        <Link to="/jazz">Jazz</Link>
      </Col>
      <Col lg={2}>
        <Link to="/rock">Rock</Link>
      </Col>
      <Col lg={2}>
        <Link to="/house">House</Link>
      </Col>
    </Row>
  );
};

export default GenreNavigation;
