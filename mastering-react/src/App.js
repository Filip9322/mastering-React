import React, { Component } from 'react';
import Calculator from './Exercises/Calculator'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="exercise">
        <Calculator  />
      </div>
    );
  }
}

export default App;
