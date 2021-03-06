import React from "react";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import { fetchSongs } from "../actions";

class MusicPlayer extends React.Component {
  state = { music: [], curSong: "", play: false, progressWidth: null };

  constructor(props) {
    super(props);

    // Ref of all audio tag's
    this.refCollection = [];
  }

  // Default Music
  componentDidMount() {
    this.props.fetchSongs("AC DC");
  }

  onTermSubmit = (term) => {
    if (term !== "") this.props.fetchSongs(term);
  };

  // Stop/Play song
  playSong = (i) => {
    const musicContainer = this.refCollection[i].parentElement;

    // If click on the same song
    if (this.refCollection[i] === this.state.curSong) {
      this.setState({ play: false, curSong: "" });

      // Pause song
      this.refCollection[i].pause();

      // Change all icons to "play"
      for (let j = 0; j < this.refCollection.length; j++) {
        this.refCollection[j].nextSibling.nextSibling.firstChild.className =
          "fas fa-play";

        musicContainer.className = "music-container";
      }
    } else {
      // Pause all songs && Change all icons to "play" before playing a new song
      for (let j = 0; j < this.refCollection.length; j++) {
        this.refCollection[j].pause();

        this.refCollection[j].nextSibling.nextSibling.firstChild.className =
          "fas fa-play";

        musicContainer.className = "music-container";
      }

      // Play selected song
      this.refCollection[i].play();

      // Spin record
      musicContainer.className = "music-container play";

      this.setState({ play: true, curSong: this.refCollection[i] });

      // Change icon to "pause" when song is clicked the first time
      this.refCollection[i].nextSibling.nextSibling.firstChild.className =
        "fas fa-pause";
    }
  };

  // Update progress time
  updateProgress = (i) => {
    const duration = this.refCollection[i].duration;
    const currentTime = this.refCollection[i].currentTime;
    const proggressEl = this.refCollection[i].previousSibling.lastChild
      .children[0];

    const progressPercent = (currentTime / duration) * 100;

    this.setState({ progressWidth: progressPercent });

    proggressEl.style.width = this.state.progressWidth + "%";
  };

  // Render Music list to DOM
  renderMusic() {
    return this.props.songs.map((song, i) => {
      return (
        <div className="music-container" key={song.id}>
          <div className="music-info">
            <h4>
              {song.artist.name} - {song.title}
            </h4>
            <h4>Album: {song.album.title}</h4>

            <div className="progress-container">
              <div className="progress"></div>
            </div>
          </div>

          <audio
            ref={(ref) => (this.refCollection[i] = ref)}
            src={song.preview}
            onTimeUpdate={() => this.updateProgress(i)}
          ></audio>

          <div className="img-container">
            <img src={song.album.cover} alt={song.album.title} />
          </div>

          <button onClick={() => this.playSong(i)} className="action-btn">
            <i className="fas fa-play"></i>
          </button>
        </div>
      );
    });
  }

  render() {
    document.body.style.background =
      "linear-gradient(0deg,rgb(247, 247, 247) 23.8%,rgb(221, 233, 252) 92%)";

    // If store data not loaded
    if (!this.props.songs) {
      return (
        <div className="music-player">
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
        <div className="music-player">{this.renderMusic()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs.songs,
  };
};

export default connect(mapStateToProps, { fetchSongs })(MusicPlayer);
