import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar-logo">
        <img src="https://en.wikipedia.org/wiki/YouTube#/media/File:YouTube_Logo_2017.svg" />
        <div className="search-bar">
          <input
            className="search-bar-input"
            value={this.state.term}
            placeholder="Search"
            onChange={event => this.onInputChange(event.target.value)}
          />
          <button className="search-bar-button">
            <icon className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    console.log("onInputChange Run");
  }
}
export { SearchBar };
