import React, { Component } from 'react';
// import Days from './Exercises/Days';
//import Recipes from './Exercises/Recipes';
import ColorPicker from './Exercises/ColorPicker'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="exercise">
        <ColorPicker />
      </div>
    );
  }
}

export default App;
