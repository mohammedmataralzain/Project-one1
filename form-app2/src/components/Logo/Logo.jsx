import React, { Component } from "react";
// import "../left/left.css";

export default class Logo extends Component {
  render(props) {
    return (
      <div className="logo">
        <img src={this.props.src} alt="fwg" />
      </div>
    );
  }
}
