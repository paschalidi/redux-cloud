import React from "react";
import styled from "styled-components";
import { Row, Col } from "@the-simple/web-components";
import Avatar from "../Avatar";

const Styles = styled.div`
  border: 1px solid #f3f3f3;
  margin: 12px 8px;
  height: 186px;
`;

const SmallTitle = styled.div`
  font-size: 12px;
`;

const TrackBox = ({ trackImageUrl, title, username, userAvatarUrl }) => {
  return (
    <Styles>
      <div>
        <img src={trackImageUrl} alt="image of album" />
      </div>
      <Row>
        <Col lg={3}>
          <Avatar type="small" url={userAvatarUrl} alt="the usr image" />
        </Col>
        <Col lg={9}>
          <SmallTitle>{title}</SmallTitle>
          <SmallTitle>{username}</SmallTitle>
        </Col>
      </Row>
    </Styles>
  );
};

export default TrackBox;
