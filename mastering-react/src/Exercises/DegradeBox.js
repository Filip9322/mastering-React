import React, { Component } from 'react';
import CanvasComponent from './CanvasComponent';
import './DegradeBox.css';

class DegradeBox extends Component {
  render(){
    return(
      <div className="degrader">
        {/*  <div className="degrade degBox1" />
          <div className="degrade degBox2" />
          <div className="degrade degBox3" />
          <div className="degrade degBox4" />*/}
          <CanvasComponent text="hey Filip" />
      </div>
    )
  }
}

export default DegradeBox;