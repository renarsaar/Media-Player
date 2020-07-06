import React from "react";
import { Link } from "react-router-dom";

let musicStyles = {
  border: "2px solid #6b9dec",
  background: "#fff",
};

let videoStyles = {
  border: "2px solid #e2812e",
  backgroundColor: "#fff",
};

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="searchbar">
        <div className="navbar">
          <Link className="link" to="/player/">
            <div>Video Player</div>
          </Link>
          <Link className="link" to="/player/music">
            <div>Music Player</div>
          </Link>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Search..."
            style={this.props.page === "/videos" ? videoStyles : musicStyles}
          />
          <button
            style={this.props.page === "/videos" ? videoStyles : musicStyles}
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
