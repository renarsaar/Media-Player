import { FETCH_SONGS, FETCH_VIDEOS, SELECT_VIDEO } from "./types";

import videos from "../apis/videos";
import songs from "../apis/songs";

// Fetch all videos
export const fetchVideos = (term) => async (dispatch) => {
  const KEY = "AIzaSyCvK7TxuUPsyOD83Xk5SXHt9vjnE3Ar64k";

  const res = await videos.get("/search", {
    params: {
      q: term,
      part: "snippet",
      maxResults: 3,
      type: "video",
      key: KEY,
    },
  });

  dispatch({ type: FETCH_VIDEOS, payload: res.data.items });
};

// Change the selected video
export const selectVideo = (selectedVideo) => {
  return { type: SELECT_VIDEO, payload: selectedVideo };
};

// Fetch all songs
export const fetchSongs = (term) => async (dispatch) => {
  const res = await songs.get("/search", {
    params: {
      q: term,
      limit: 7,
    },
  });

  dispatch({ type: FETCH_SONGS, payload: res.data.data });
};
