import { FETCH_SONGS, FETCH_VIDEOS } from "./types";

import videos from "../apis/videos";
import songs from "../apis/songs";

export const fetchVideos = (term) => async (dispatch) => {
  const KEY = "AIzaSyCGPm14uBuAUYoBHN0XnjxsRPgBqTy3xMs";

  const res = await videos.get("/search", {
    params: {
      q: term,
      part: "snippet",
      maxResults: 3,
      type: "video",
      key: KEY,
    },
  });

  dispatch({ type: FETCH_VIDEOS, payload: res.data });
};

export const fetchSongs = (term) => async (dispatch) => {
  const res = await songs.get("/search", {
    params: {
      q: term,
      limit: 7,
    },
  });

  dispatch({ type: FETCH_SONGS, payload: res.data });
};
