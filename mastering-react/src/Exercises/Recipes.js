import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Recipes extends Component{
  render(){
    return(
      <Summary title= "Destroy the world"
      ingredients= "cat, water, owner, soap"
      steps= "search the cat, surprise her and caught her, get into the shower with her, wash the cat with soap and water, wait until the cat wants to destroy the world"/>
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
          <span>{ingredients.length}Ingredients</span>
          <span>{steps.length}Steps</span>
        </p>
      </div>
    )
  }
}

Summary.propTypes = {
  title:       PropTypes.string,
  ingredients: PropTypes.array.isRequired,
  steps:       PropTypes.array.isRequired
}

export default Recipes;