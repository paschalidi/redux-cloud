import * as actions from "./actions";

const initialState = {
  stage: "",
  jazz: [],
  house: [],
  rock: []
};

const initialTracksReducer = (
  state = initialState,
  { type = null, data = null }
) => {
  switch (type) {
    case actions.FETCH_INITIAL_TRACKS: {
      return { ...state, stage: "LOADING" };
    }
    case actions.FETCH_INITIAL_TRACKS_ERROR: {
      return { ...state, stage: "ERROR" };
    }
    case actions.FETCH_INITIAL_TRACKS_SUCCESS: {
      return { ...state, [data.genre]: data.trimmedData, stage: "READY" };
    }
    default:
      return state;
  }
};

export default initialTracksReducer;
