import { FETCH_VIDEOS, SELECT_VIDEO } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        firstVideo: action.payload[0],
      };

    case SELECT_VIDEO:
      return {
        ...state,
        firstVideo: action.payload,
      };

    default:
      return state;
  }
};
