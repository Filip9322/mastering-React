import React, { Component } from 'react';
import CanvasComponent from './Exercises/CanvasComponent';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="exercise">
        <CanvasComponent text="hey Filip"/>
      </div>
    );
  }
}

export default App;
