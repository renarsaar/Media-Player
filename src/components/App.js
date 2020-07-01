import React from "react";
import youtube from "./apis/videos";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    // Default videos
    this.onTermSubmit("chessable masters");
  }

  onTermSubmit = async (term) => {
    const KEY = "AIzaSyCGPm14uBuAUYoBHN0XnjxsRPgBqTy3xMs";

    const res = await youtube.get("/search", {
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
    return (
      <>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="video-player">
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

export default App;
