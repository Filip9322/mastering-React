import React, { Component } from 'react';
import ColorRating from './Exercises/ColorRating';
import Assigment1 from './Assigments/Assigment_1';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="exercise">
        <Assigment1  />
        <ColorRating  />
      </div>
    );
  }
}

export default App;
