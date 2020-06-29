import { combineReducers } from "redux";
import videoReducer from "./videoReducer.js";

export default combineReducers({
  videos: videoReducer,
});
