import React, { Component } from 'react'
import "./item.css"
export default class index extends Component {
  render(props) {
    return (
      <div className='item'>
        <img src={this.props.src}/>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

