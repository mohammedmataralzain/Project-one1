import React, { Component } from "react";


import Nav from "../../components/nav";
import Card from "../../components/card";
import Item from "../../components/item";


import avatar from "../../img/Rectangle 1 (1).png";
import imgCard1 from "../../img/GOD OF WAR-2.png";
import imgCard2 from "../../img/SUPERMAN-2.png";
import imgCard3 from "../../img/SPIDERMAN.png";
import imgItem1 from "../../img/Ellipse 2.png";
import imgItem2 from "../../img/Ellipse 3.png";
import imgItem3 from "../../img/Ellipse 4.png";
import imgItem4 from "../../img/Ellipse 5.png";
import Frends from "../../img/FRIENDS (1).png";
import Rectangle from "../../img/Rectangle 11.png";
import clipart from "../../img/png-clipart-disgaea-3-playstation-3-playstation-4-xbox-360-trophy-golden-cup-game-medal 1 (1).png";


import "./game.css";
export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <Nav />
        <main>
          <div className="avatar">
            <h2>Welcome back, Jenny!</h2>
            <img src={avatar} alt="" />
          </div>
          <h3>NEW GAMES </h3>
          <div className="cards has-scrollbar">
            <Card
              src={imgCard1}
              body="Join in the new DLC with Kratos to learn more about him and his future."
            />
            <Card
              src={imgCard2}
              body="Be part of the Suicide Squad and kill the Justice League!
              -Amanda Waller"
            />
            <Card
              src={imgCard3}
              body="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
            />
          </div>

          <div className="section">
            <div className="items">
              <h3>last played</h3>
              <Item src={imgItem1} body="Hogwarts Legacy 50%" />
              <Item src={imgItem2} body="God Of War: Ragnarök 72.5%" />
              <Item src={imgItem3} body="Crash Bandicoot N. Sane Trilogy 34%" />
              <Item src={imgItem4} body="Dying Light 2 Stay Human 100%" />
            </div>

            <div className="Rectangle">
              <h3>most recent trophy</h3>
              <img src={Rectangle} alt="" />
              <div className="clipart">
                <img src={clipart} alt="" />
              </div>
              <div className="text-top">
                <p>perfect KILL streak</p>
                <p>You are in the 0.5% </p>
              </div>
              <div className="caption-rectangle">
                <p>assassin's creed odyssey</p>
                <p>last played: 34 hours ago</p>
              </div>
            </div>
            <div className="Frends">
              <img src={Frends} alt="" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
