import theAction from "../infrastructure/dispatch";
import * as actions from "./actions";

export const tFetchInitialTracks = genre => {
  return async dispatch => {
    try {
      const { REACT_APP_API_URL, REACT_APP_API_CLIENT_ID } = process.env;
      dispatch(theAction(actions.FETCH_INITIAL_TRACKS));
      const response = await fetch(
        `${REACT_APP_API_URL}/tracks?limit=50&offset=0&tags=${genre}&client_id=${REACT_APP_API_CLIENT_ID}`
      );
      const data = await response.json();

      const trimmedData = data.map(
        ({
          artwork_url: trackImageUrl,
          title,
          user: { avatar_url: userAvatarUrl, username },
          id
        }) => ({
          trackImageUrl,
          title,
          userAvatarUrl,
          username,
          id
        })
      );

      dispatch(
        theAction(actions.FETCH_INITIAL_TRACKS_SUCCESS, {
          trimmedData,
          genre
        })
      );
    } catch (e) {
      dispatch(theAction(actions.FETCH_INITIAL_TRACKS_ERROR));
    }
  };
};
