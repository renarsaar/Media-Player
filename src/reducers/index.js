import { combineReducers } from "redux";

import videoReducer from "./videosReducer.js";
import songsReducer from "./songsReducer.js";

export default combineReducers({
  videos: videoReducer,
  songs: songsReducer,
});
