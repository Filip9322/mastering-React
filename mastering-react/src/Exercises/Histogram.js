import React, { Component } from 'react';
import './DegradeBox.css'

class Histogram extends Component{
  constructor(props){
    super(props)
    //this.dataColor = this.props.data
  }
  componentDidMount(){
    this.updateWidth()
  }
  getTimesValue(n,dataColor){
    const timesValue  = dataColor.filter((number)=>number==n)
    return timesValue
  }
  updateWidth(maxValue,n){
    const canvas = this.refs.canvas
    const ctx    = canvas.getContext('2d')

    const maxWidth     = 400
    const itemWidth    = Math.ceil((n*maxWidth)/maxValue)

    ctx.fillRect(0,0,1,maxWidth);

  }
  render(){

    const maxHeight     = 100
    const timesTable    = Array(256).fill(0)
    const maxValue      = Math.max.apply(null,timesTable)
    const {data}   = this.props
    const {updateWidth,getTimesValue} = this
    console.log(data)
    /*this.props.data.map((n,index)=>{
      timesTable[n]++
    })*/

    return(
      <div className="histogramCanvas">
        <h2>Histograma</h2>
        <canvas ref="canvas" width={256} height={maxHeight} />
        {timesTable.map((n,i)=><p key ={i}>{i} #{getTimesValue(i,data).length}</p>)}
      </div>
    )
  }
}




export default Histogram