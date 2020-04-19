import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Row, Col } from "@the-simple/web-components";
import { withRouter } from "react-router-dom";
import { tFetchInitialTracks } from "./actionCreators";
import TrackBox from "../TrackBox";

const LOADING = "LOADING";
const ERROR = "ERROR";
const READY = "READY";

const InitialTracks = ({ dispatch, genre, reducerData }) => {
  const fetchApi = useCallback(() => dispatch(tFetchInitialTracks(genre)), [
    genre
  ]);

  useEffect(() => {
    console.log("@@@@");
    fetchApi();
  }, [fetchApi]);

  return (
    <Row position="center">
      {(() => {
        switch (reducerData.stage) {
          default:
          case LOADING:
            return <div>LOADING</div>;
          case ERROR:
            return <div>ERROR</div>;
          case READY:
            return reducerData[genre].map(
              ({ trackImageUrl, title, userAvatarUrl, username, id }) => (
                <Col lg={3}>
                  <TrackBox
                    key={id}
                    trackImageUrl={trackImageUrl}
                    title={title}
                    userAvatarUrl={userAvatarUrl}
                    username={username}
                  />
                </Col>
              )
            );
        }
      })()}
    </Row>
  );
};

const mapStateToProps = ({ initialTracksReducer }) => {
  return { reducerData: initialTracksReducer };
};

export default withRouter(connect(mapStateToProps)(InitialTracks));
