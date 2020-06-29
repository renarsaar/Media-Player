import { FETCH_VIDEOS } from "./types";

import videos from "../apis/videos";

export const fetchVideos = () => async (dispatch) => {
  const KEY = "AIzaSyDD_SavzNOGaXHSZuTEimpkiFMNkD9Ucsc";

  const res = await videos.get("/search", {
    params: {
      q: "chess",
      part: "snippet",
      maxResults: 5,
      type: "video",
      key: KEY,
    },
  });

  dispatch({ type: FETCH_VIDEOS, payload: res.data });
};
