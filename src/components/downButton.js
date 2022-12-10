import React, { Component } from "react";
import HOC from "./hoc";

class DownCount extends Component {
  render() {
    return (
      <div id="btn">
        <button id="down" onClick={this.props.handleCLick}>
          You hovered {this.props.CountNumber} times
        </button>
      </div>
    );
  }
}

const HocDown = HOC(DownCount, 0);

export default HocDown;
