import React, { Component } from 'react';
import './DegradeBox.css'

class Histogram extends Component{
  constructor(){
    super()
    this.dataHistogram = []
    this.timesTable    = Array(256).fill(0)
    this.canvase       = React.createRef()
  }
  componentDidMount(){
    //this.updateWidth()
  }
  componentDidUpdate(){
    this.updateWidth()
    this.mapValuesHistogram()
  }
  getTimesValue(n,dataColor){
    const timesValue  = dataColor.filter((number)=>number===n)
    return timesValue.length
  }
  mapValuesHistogram(){

    //console.log(timesTable)
  }
  updateWidth(i,n){

    const canvas  = this.canvase.current
    const ctx     = canvas.getContext('2d')
    ctx.fillStyle = this.props.color;

    const maxWidth     = 400

    const {dataHistogram,timesTable} = this
    //const {updateWidth} = this
    const maxValue      = Math.max.apply(null,dataHistogram)

    timesTable.map((n,i) => {
      const itemWidth    = Math.ceil((i*dataHistogram[i])/maxValue)
      //console.log(itemWidth)
      ctx.fillRect(i,0,1,itemWidth);
    })
    console.log(this.props.color)

  }
  render(){

    const maxHeight     = 400
    const {timesTable}  = this
    const {data}        = this.props
    const {getTimesValue} = this

    const dataHistogram = timesTable.map((n,i) => getTimesValue(i,data))
    this.dataHistogram  = dataHistogram

    return(
      <div className="histogramCanvas">
        <h2>Histograma</h2>
        <canvas ref={this.canvase}  />
        {/*timesTable.map((n,i)=><p key ={i}>{i} #{getTimesValue(i,data)}</p>)*/}
      </div>
    )
  }
}




export default Histogram