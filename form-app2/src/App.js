import "./App.css";
import Signup from "./pages/Register/Signup";
import Login from "./pages/Login/Login";
import Game from "./pages/game/Game";
import { Routes, Route } from "react-router-dom";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
      </div>
    );
  }
}
