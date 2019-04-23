import React, { Component } from 'react';
import {v4}           from 'uuid';
import PropTypes      from 'prop-types'
import {Star}         from './StarRating'
import {AddColorForm} from './ColorPicker'
import './ColorRating.css';

class ColorRating extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: [
      {
        color: "#000000",
        id: "4443b013-2d79-41a9-8f10-d8294da35aa7",
        rating: 5,
        title: "pitch black"
        },{
        color: "#ffffff",
        id: "b1e00ae2-e2e5-46c2-a8c9-c72ac8a3999d",
        rating: 3,
        title: "blind white"
        },{
        color: "#ff3410",
        id: "2d0fa8f4-3589-4bfa-90a7-683c320c2ad9",
        rating: 5,
        title: "red"
        },{
        color: "#fff613",
        id: "ed801e44-1763-491b-b3e1-fb69dc602968",
        rating: 1,
        title: "yellow"
        },{
        color: "#07ff0e",
        id: "3a5f3273-5aaf-4c6e-aafb-47c58b86265f",
        rating: 1,
        title: "green"
        },{
        color: "#ff12c0",
        id: "484fa096-c1ad-4c19-8c2a-21bc8b2fecd7",
        rating: 0,
        title: "purple"
        },{
        color: "#141fff",
        id: "f7995231-0fba-4d4b-98af-6231778482ba",
        rating: 0,
        title: "blue"
        }
      ]
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