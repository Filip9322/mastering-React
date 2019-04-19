/*
  Application that allows users to save and manage specific
  hexadecimal color values. The color Organizer allows User
  to add colors to a list, once in the list it can be rated
  or removed by the user.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddColorForm extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e){
    const { _title,_color} = this.refs
    e.preventDefault();
    alert(`Muajaja we have a new color: ${_title.value}${_color.value}`);
    _title.value = "";
    _color.value = '#000000';
    _title.focus();
  }
  render(){
    return(
      <form onSubmit={this.submit}>
        <input ref ="_title" type="text"  placeholder="EvilColor Name" required />
        <input ref ="_color" type="color" required />
        <button>STAB</button>
      </form>
    )
  }
}

class ColorPicker extends Component{
  render(){
    return(
      <AddColorForm />
    )
  }
}
export default ColorPicker;