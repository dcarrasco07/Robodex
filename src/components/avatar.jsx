import React, { Component } from "react";
import { createMyAvatar } from "../utils/creator.js";

class Avatar extends Component {
  render() {
    const svg = createMyAvatar(
      this.props.seed,
      this.props.colors,
      this.props.primaryColorLevel,
      this.props.secondaryColorLevel
    );
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    return <img src={url} alt="avatar"></img>;
  }
}

export default Avatar;
