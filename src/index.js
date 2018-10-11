import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// import SearchBar from "./components/search_bar";
// import VideoList from "./components/video_list";
// import VideoDetail from "./components/video_detail";
// import Footer from "./components/footer";

import { SearchBar, VideoList, VideoDetail, Footer } from "./components"

const API_KEY = "AIzaSyDzFa-lZN3AqogAa_EndIXWg6CNSR7Agyo";
const version = "1.0.1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("punjabi trending");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
      //console.log(data);
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 400);
    return (
      <div>
        <fieldset>
          <SearchBar placeholder="Search" onSearchTermChange={videoSearch} />
        </fieldset>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
        <br />
        <hr />
        <br />
        <Footer />
      </div>
    );
  }
}

/* tslint:disable */
console.info(`%cApp version: ${version}`, 'background: #EBF5F8; color: gray; font-size: x-medium; border-radius: 5px; padding: 5px;');
/* tslint:enable */

ReactDOM.render(<App />, document.querySelector(".container"));
