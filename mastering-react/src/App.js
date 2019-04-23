import React, { Component } from 'react';
// import Days from './Exercises/Days';
//import Recipes from './Exercises/Recipes';
//import ColorPicker from './Exercises/ColorPicker'
//import StarRating  from './Exercises/StarRating'
import ColorRating from './Exercises/ColorRating'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="exercise">
        <ColorRating  />
      </div>
    );
  }
}

export default App;
