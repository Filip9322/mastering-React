import React, { Component } from 'react';
import {v4}           from 'uuid';
import PropTypes      from 'prop-types'
import {Star}         from './StarRating'
import {AddColorForm} from './ColorPicker'
import './ColorRating.scss';

class ColorRating extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: []
    }
    this.addColor    = this.addColor.bind(this)
    this.rateColor   = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }
  addColor(title,color){
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating:0
      }
    ]
    this.setState({colors})
  }
  rateColor(id,rating){
    const colors = this.state.colors.map(color =>
      (color.id !== id)?
        color:
        {
          ...color,
          rating
        }
    )
    this.setState({colors})
  }
  removeColor(id){
    const colors = this.state.colors.filter( color => color.id !==id )
    this.setState({colors})
  }
  render (){
    const {addColor, rateColor, removeColor} = this
    const {colors}   = this.state
    return(
      <div className="appColorRating">
        <div className="colorForm">
          <h1>App Color Rating</h1>
          <AddColorForm onNewColor = {addColor} />
        </div>
        <ColorList colors = {colors}
                   onRate = {rateColor}
                   onRemove = {removeColor}
        />
      </div>
    )
  }
}

const StarRating = ({starsSelected = 0, totalStars = 5, onRate = f => f})=>
{
  return(
    <div className = "star-rating">
      {[...Array(totalStars)].map((n,i)=>
        <Star key={i}
              selected = {i< starsSelected}
              onClick  = {() => onRate(i+1)} />
      )}
      <p>{starsSelected} of {totalStars}</p>
    </div>
  )
}
const ColorList = ({ colors=[],onRate =f=>f, onRemove=f=>f }) => {
  return(
    <div className="color-list">
      {(colors.length === 0)?
        <p>No Colors to List. Add a Color...</p>:
        colors.map(color =>
          <Color key={color.id}
                     {...color}
                     onRate   = {(rating) => onRate(color.id,rating)}
                     onRemove = {()       => onRemove(color.id)}
          />
        )
      }
    </div>
  )
}

const Color = ({ title, color, rating = 0, onRemove=f=>f, onRate=f=>f}) => {
  return(
    <section className="color">
      <h2>{title}</h2>
      <button onClick={onRemove}>X</button>
      <div className= "colorContainer" style = {{backgroundColor:color}} />
      <div>
        <StarRating starsSelected = {rating} onRate={onRate} />
      </div>
    </section>
  )
}

export default ColorRating