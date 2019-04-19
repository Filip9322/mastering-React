import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Recipe1 = {
  "title": "Destroy the world",
  "ingredients":["cat","water","owner","soap"],
  "steps":["search the cat","surprise her and caught her", "get into the shower with her",
           "wash the cat with soap and water", "wait until the cat wants to destroy the world"]
}

class Recipes extends Component{
  render(){
    return(
      <Summary />
    )
  }
}

class Summary extends Component {
  constructor(props){super(props)}
  render(){
    const {ingredients,steps,title} = this.props
    return (
      <div className="">
        <h1>{title}</h1>
        <p>
          <span>{ingredients} Ingredients </span>
          <span>{steps} Steps</span>
        </p>
      </div>
    )
  }
}
Summary.defaultProps = {
  title: "[Here Title]",
  ingredients: 0,
  steps:0
}
Summary.propTypes = {
  title:       PropTypes.string,
  ingredients: PropTypes.number.isRequired,
  steps:       PropTypes.number.isRequired
}

export default Recipes;