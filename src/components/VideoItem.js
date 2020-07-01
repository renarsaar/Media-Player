import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item"
      key={video.id.videoId}
    >
      <div className="video-content">
        <img
          className="video-image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="video-title">
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
