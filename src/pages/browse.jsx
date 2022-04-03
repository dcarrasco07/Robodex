import React, { Component } from "react";
import Avatar from "../components/avatar.jsx";
import { defaultBotList } from "../data/defaultBots.js";
import "../styles/browse.css";

class BrowseRobots extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="banner">BROWSE ROBOTS</div>
        {this.renderDefaultBotList()}
      </React.Fragment>
    );
  }

  /*
    Checks if there is data in local storage otherwise create default browsing list.
    */
  renderDefaultBotList() {
    const myBots = defaultBotList.map((bot) => {
      return (
        <div className="avatar-container" key={bot.seed}>
          <Avatar
            className="avatar"
            key={bot.seed}
            seed={bot.seed}
            colors={bot.colors}
            primaryColorLevel={bot.primaryColorLevel}
            secondaryColorLevel={bot.secondaryColorLevel}
          ></Avatar>
          <div key={bot.seed + "1"} className="name-container">
            <span>{bot.seed}</span>
          </div>
          <div key={bot.seed + "2"} className="description-container">
            <span>{bot.description}</span>
          </div>
        </div>
      );
    });

    return myBots;
  }
}

export default BrowseRobots;
