import React from "react";

const VideoDetail = ({ video }) => {
  // Loading Spinner
  if (!video) {
    return <div className="video-loading ld-dual-ring"></div>;
  }

  // Return video, title, desc
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-detail">
      <div className="video-embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="video-header">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
