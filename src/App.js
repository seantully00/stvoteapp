import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {

  function login() {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Votejere</h2>
          </div>
          <p className="App-intro">
            Votejere!
          </p>
          <br></br>
          <button onClick={findpoll}>Find a Poll</button>
        </div>
      );
    }
  },
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Votejere</h2>
        </div>
        <p className="App-intro">
          Votejere!
        </p>
        <br></br>
        <button onClick={login}>Login</button>
        <button onClick={findpoll}>Find a Poll</button>
      </div>
    );
  }
}

export default App;
