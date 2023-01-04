import React, { Component } from 'react'
import "./card.css"
export default class index extends Component {
  render(props) {
    return (
      <div className='card'>
        <img src={this.props.src}/>
        <div className='caption'>
        <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}
