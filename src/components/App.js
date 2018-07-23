import React, { Component } from 'react';

import Header from './header';
import Game from './game';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
