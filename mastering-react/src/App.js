import React, { Component } from 'react';
import ColorRating from './Exercises/ColorRating'
import './App.scss';

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
