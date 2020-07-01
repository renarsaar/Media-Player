import React from "react";

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
        <form onSubmit={this.onFormSubmit}>
          <label>Video Player</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Search..."
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
