import React, { Component } from 'react';
// import Days from './Exercises/Days';
import Recipes from './Exercises/Recipes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="exercise">
        <Recipes />
      </div>
    );
  }
}

export default App;
