import React from "react";
import SearchBar from "./SearchBar";

import deezer from "./apis/deezer";

class MusicPlayer extends React.Component {
  state = { music: [], curSong: "", play: false };

  constructor(props) {
    super(props);

    // Ref of all audio tag's
    this.refCollection = [];
  }

  // Default Music
  componentDidMount() {
    this.onTermSubmit("AC DC");
  }

  // Axios request to deezer API
  onTermSubmit = async (term) => {
    if (term !== "") {
      const res = await deezer.get("/search", {
        params: {
          q: term,
          limit: 7,
        },
      });

      this.setState({ music: res.data.data });
    }
  };

  // Stop/Play song
  playSong = (i) => {
    console.log(this.refCollection);
    // If click on the same song
    if (this.refCollection[i] === this.state.curSong) {
      this.setState({ play: false, curSong: "" });

      // Pause song
      this.refCollection[i].pause();

      // Change all icons to "play"
      for (let j = 0; j < this.refCollection.length; j++) {
        this.refCollection[j].nextSibling.nextSibling.firstChild.className =
          "fas fa-play";

        this.refCollection[j].parentElement.className = "music-container";
      }
    } else {
      // Pause all songs && Change all icons to "play" before playing a new song
      for (let j = 0; j < this.refCollection.length; j++) {
        this.refCollection[j].pause();

        this.refCollection[j].nextSibling.nextSibling.firstChild.className =
          "fas fa-play";

        this.refCollection[j].parentElement.className = "music-container";
      }

      // Play selected song
      this.refCollection[i].play();

      // Spin record
      this.refCollection[i].parentElement.className = "music-container play";

      this.setState({ play: true, curSong: this.refCollection[i] });

      // Change icon to "pause" when song is clicked the first time
      this.refCollection[i].nextSibling.nextSibling.firstChild.className =
        "fas fa-pause";
    }
  };

  renderMusic() {
    return this.state.music.map((song, i) => {
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

export default MusicPlayer;
