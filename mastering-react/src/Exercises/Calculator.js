import React, { Component } from 'react'
//import PropTypes            from 'prop-types'
import './Calculator.css'

class Calculator extends Component {
  constructor(props){
    super(props)
    this.concatNumber    = this.concatNumber.bind(this)
    this.concatOperator  = this.concatOperator.bind(this)
    this.state = {
      operation: ''
    }
  }
  concatNumber(digit){
    const operation = this.state.operation+digit
    this.setState({operation});
  }
  concatOperator(digit){
    const operation = this.state.operation+digit
    this.setState({operation});
  }
  render(){
  const btNumbers   = ['0','1','2','3','4','5','6','7','8','9','.']
  const btOperator  = ['AC','±','%','÷','x','-','+','=']
  const {operation} = this.state
  const {concatNumber,concatOperator} = this
    return(
      <article>
        <section>
          <p>{operation}</p>
          <h1>Total Value</h1>
        </section>
        <section>
          {btNumbers.map((character,i)=>
            <NumButton key={i}  digit = {character}
                       onConcatenate= {(digit) =>concatNumber(character)}/>
          )}
        </section>
        <section>
          {btOperator.map((character,i)=>
            <OpeButton key={i}  digit = {character}
                       onConcatenate= {(digit) =>concatOperator(character)}/>
          )}
        </section>
      </article>
    )
  }
}
const NumButton = ({digit = '', onConcatenate=f=>f}) => {
  return(
    <button onClick={onConcatenate} >{digit}</button>
  )
}
const OpeButton = ({digit = '', onConcatenate=f=>f}) => {
  return(
    <button onClick={onConcatenate} >{digit}</button>
  )
}

export default Calculator