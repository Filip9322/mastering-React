/*
- Create TWO new components: UserInput and UserOutput
- UserInput should hold an input element, UserOutput two paragraphs
- Output multiple UserOutput components in the App component (any paragraph texts of your choice)
- Pass a username (of your choice) to UserOutput via props and display it there
- Add state to the App component (=> the username) and pass the username to the UserOutput component
- Add a method to manipulate the state (=> an event-handler method)
- Pass the event-handler method reference to the UserInput component and bind it to the input-change event
- Ensure that the new input entered by the user overwrites the old username passed to UserOutput
- Add two-way-binding to your input (in UserInput) to also display the starting username
- Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

*/
import React, { Component } from 'react';
import './Assigment_1.css';

class Assigment1 extends Component {
  constructor(){
    super()
    this.state = {
      username: '...'
    }
    this.usernameHandler = this.usernameHandler.bind(this)
  }
  usernameHandler(event){
    const username = event.target.value
    this.setState({username})
  }
  render(){
    const {username}        = this.state
    const {usernameHandler} = this
    return(
      <div className="Assigment1">
        <UserOutput username = {username}/>
        <UserInput  updateUsername= {usernameHandler} />
      </div>
    )
  }
}

const UserInput = ({updateUsername=f=>f})=> {
  return(
    <form >
      <label>Decoding ...</label>
      <input name ='inputUsername' onChange={(event) => updateUsername(event)}></input>
    </form>
  )
}
const UserOutput = ({username =''})=> {
  return(
    <div>
      <h2>Session being spied by {username}</h2>
    </div>
  )
}

export default Assigment1;