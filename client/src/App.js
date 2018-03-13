import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Player from "./Pages/Player";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Nav />
        <Player/>
      </div>
    );
  }
}

export default App;
