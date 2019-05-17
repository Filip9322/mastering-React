import React, { Component } from 'react';
import DegradeBox from './Exercises/DegradeBox';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="exercise">
        <DegradeBox />
      </div>
    );
  }
}

export default App;
