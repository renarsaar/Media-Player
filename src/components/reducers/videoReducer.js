import { FETCH_VIDEOS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload;

    default:
      return state;
  }
};
