/*
  Application that allows users to save and manage specific
  hexadecimal color values. The color Organizer allows User
  to add colors to a list, once in the list it can be rated
  or removed by the user.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types'

export const AddColorForm = ({onNewColor = f => f}) =>{
  let _title, _color
  const submit = e =>{
    e.preventDefault();
    onNewColor(_title.value,_color.value)
    _title.value = "";
    _color.value = '#ffffff';
    _title.focus();
  }
  return(
    <form onSubmit={ submit}>
      <input ref ={input =>_title = input} type="text"  placeholder="EvilColor Name" required />
      <input ref ={input =>_color = input} type="color" required />
      <button>STAB</button>
    </form>
  )
}
AddColorForm.propTypes = {
  onNewColor: PropTypes.func
}
AddColorForm.defaultProps = {
  onNewColor: f=>f
}

class ColorPicker extends Component{
  render(){
    return(
      <AddColorForm onNewColor={(title,color) => {
        console.log(`TODO: add new ${title} and ${color} to the list. `)
        console.log(`TODO: render UI with the new color`)
      } }/>
    )
  }
}

export default ColorPicker;