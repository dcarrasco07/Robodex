import React, { Component } from "react";
import Avatar from "./components/avatar.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        <Avatar></Avatar>
      </React.Fragment>
    );
  }
}

export default App;
