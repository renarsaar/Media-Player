import { FETCH_SONGS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return { ...state, songs: action.payload };

    default:
      return state;
  }
};
