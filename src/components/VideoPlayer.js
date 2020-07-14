import React from "react";
import { connect } from "react-redux";
import { fetchVideos, selectVideo } from "./actions";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class VideoPlayer extends React.Component {
  state = { videos: [], selectedVideo: null };

  // Default videos
  componentDidMount = () => {
    this.onTermSubmit("chessable masters");
  };

  // Fetch videos from store
  onTermSubmit = (term) => {
    this.props.fetchVideos(term);
  };

  // Change the selected video
  onVideoSelect = (video) => {
    this.props.selectVideo(video);
  };

  render() {
    document.body.style.background =
      "linear-gradient(90deg, rgba(226, 129, 46, 1) 0%, rgba(226, 162, 33, 1) 100%)";

    // If Store data has not loaded yet
    if (!this.props.videos.videos) {
      return (
        <div className="player">
          <div className="loading ld-dual-ring"></div>
        </div>
      );
    }

    return (
      <>
        <SearchBar
          page={this.props.location.pathname}
          onFormSubmit={this.onTermSubmit}
        />
        <div className="player">
          <VideoDetail video={this.props.videos.firstVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.props.videos.videos}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToProps, { fetchVideos, selectVideo })(
  VideoPlayer
);
