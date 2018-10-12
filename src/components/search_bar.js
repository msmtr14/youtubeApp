import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar-logo">
        <div className="search-bar">
          <img className="search-bar-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" height="26" width="100"
          />
          <input
            className="search-bar-input"
            value={this.state.term}
            placeholder="Search"
            onChange={event => this.onInputChange(event.target.value)}
          />
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
