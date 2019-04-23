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
      <Summary {...Recipe1}/>
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
          <span>{ingredients.length} Ingredients </span>
          <span>{steps.length} Steps</span>
        </p>
      </div>
    )
  }
}
Summary.defaultProps = {
  title: "[Destroy Title]",
  ingredients: 0,
  steps:0
}
Summary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  steps:       PropTypes.array.isRequired,
  title:       (props, propName) =>
    (typeof props[propName] !== 'string')?
      new Error("A title must be an string"):
      (!props[propName].includes('Destroy'))?
        new Error("You should destroy something >:D"):
        null
}

export default Recipes;