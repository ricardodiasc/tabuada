import React, { Component } from 'react';
import Tabuada from './components/Tabuada';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Desafio Tabuada</h1>
        </header>
        <Tabuada />
      </div>
    );
  }
}

export default App;
