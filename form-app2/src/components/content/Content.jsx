import React, { Component } from "react";
import "./content.css"

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <img src={this.props.comma} alt="" />
        <p className={this.props.classNameColor}>
         {this.props.body}
        </p>
        <h4 className={this.props.classNameColor}>{this.props.h4} </h4>
        <div className="img-flex">
          <img src={this.props.imgFlex} alt="" />
        </div>
      </div>
    );
  }
}
