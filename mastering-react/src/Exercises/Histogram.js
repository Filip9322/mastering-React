import React, { Component } from 'react';
import './DegradeBox.css'

class Histogram extends Component{
  constructor(){
    super()
    this.dataHistogram = []
    this.dataScaled    = []
    this.timesTable    = Array(256).fill(0)
    this.canvase       = React.createRef()
  }
  componentDidUpdate(){
    this.updateHistogram()
  }
  getTimesValue(n,dataColor){
    const timesValue  = dataColor.filter((number)=>number===n)
    return timesValue.length
  }
  updateHistogram(i,n){

    const canvas  = this.canvase.current
    const ctx     = canvas.getContext('2d')

    /*-Context Configuration-*/
    ctx.fillStyle = this.props.color;
    ctx.translate(0, canvas.height);
    ctx.scale(1,-1)

    const {dataHistogram,timesTable} = this
    const maxValue = Math.max.apply(null,dataHistogram)

    const dataScale = timesTable.map((n,i) => {
      const itemWidth    = Math.ceil((i*dataHistogram[i])/maxValue)
      ctx.fillRect(i,0,1,itemWidth);
      return itemWidth
    })
    this.dataScaled  = dataScale
  }
  render(){

    const {timesTable}     = this
    const {data,colorName} = this.props
    const {getTimesValue}  = this

    const dataHistogram = timesTable.map((n,i) => getTimesValue(i,data))
    this.dataHistogram  = dataHistogram

    return(
      <div className="histogramCanvas">
        <h2>{colorName} Histogram</h2>
        <canvas ref={this.canvase}  />
      </div>
    )
  }
}




export default Histogram