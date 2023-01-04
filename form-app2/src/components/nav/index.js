import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import imgLogo from '../../img/Game-two.png'

import img1 from "../../img/Like.png"
import img2 from "../../img/Setting-two.png"
import img3 from "../../img/Puzzle (拼图).png"
import moon from "../../img/Moon (月亮).png"
import sun from "../../img/Sun-one (太阳1).png"
import "./nav.css"

export default class index extends Component {
  render() {
    return (
        <nav>
        <Logo src={imgLogo}/>
        <ul>
           <li><a href="#"><img src={img1} alt=""/></a></li>
           <li><a href="#"><img src={img2} alt=""/></a></li>
           <li><a href="#"><img src={img3} alt=""/></a></li>
        </ul>
        <div>
          <div><button><img src={moon} alt="" /></button> </div>
          <div><button><img src={sun} alt="" /></button> </div>
        </div>
       </nav>
    )
  }
}
