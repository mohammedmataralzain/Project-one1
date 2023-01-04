import React, { Component } from 'react'
import "./button.css"

export default class Button extends Component {
  render(props) {
    return (
      <button type={this.props.type}  className={this.props.style}>{this.props.children}</button>
    )
  }
}
