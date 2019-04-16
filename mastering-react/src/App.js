import React, { Component } from 'react';
import Days from './Days';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weekdays">
        <Days />
      </div>
    );
  }
}

export default App;
