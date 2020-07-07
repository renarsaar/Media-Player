import { FETCH_VIDEOS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        firstVideo: action.payload[0],
      };

    default:
      return state;
  }
};
