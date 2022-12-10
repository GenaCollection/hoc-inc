import React, { Component } from "react";
import HOC from "./hoc";

class UpperCount extends Component {
  render() {
    return (
      <div id="btn">
        <button id="upper" onClick={this.props.handleCLick}>
          You clicked {this.props.CountNumber} times
        </button>
      </div>
    );
  }
}

const HocUpper = HOC(UpperCount, 0);

export default HocUpper;
