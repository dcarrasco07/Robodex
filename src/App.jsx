import React, { Component } from "react";
import BrowseRobots from "./pages/browse.jsx";
import "./styles/App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="browse-robots-container">
          <BrowseRobots></BrowseRobots>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
