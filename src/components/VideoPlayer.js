import React from "react";
import videos from "./apis/videos";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class VideoPlayer extends React.Component {
  state = { videos: [], selectedVideo: null };

  // Default videos
  componentDidMount() {
    this.onTermSubmit("chessable masters");
  }

  onTermSubmit = async (term) => {
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

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    document.body.style.background =
      "linear-gradient(90deg, rgba(226, 129, 46, 1) 0%, rgba(226, 162, 33, 1) 100%)";

    return (
      <>
        <SearchBar
          page={this.props.location.pathname}
          onFormSubmit={this.onTermSubmit}
        />
        <div className="player">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </>
    );
  }
}

export default VideoPlayer;
