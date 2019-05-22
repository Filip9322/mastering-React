import React, { Component } from 'react';
import Histogram from './Histogram'
import image0 from './0.png';

class CanvasComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      RedDataImage:[],
      GreenDataImage:[],
      BlueDataImage:[],
      imgWidth:0,
      imgHeight:0
    }
  }
  componentDidMount(){
    this.updateCanvas()
  }
  componentDidUpdate(){
    this.updateCanvas()
  }
  updateCanvas(){
    const canvas = this.refs.canvas
    const ctx    = canvas.getContext('2d')
    const img    = this.refs.image

    img.onload = () => {
      canvas.width  = img.width
      canvas.height = img.height
      ctx.drawImage(img,0,0)
      this.updateImageData(ctx.getImageData(0,0,canvas.width,canvas.height))
    }
  }
  updateImageData(imgData){
    const imageData  = imgData.data
    const imgWidth   = imgData.width
    const imgHeight  = imgData.height


    const RGB = Object.values(imageData).filter((n,index)=>{
      return (index %4 !== 3)
    })
    const RedDataImage = RGB.filter((n,index)=>{
      return (index %3 === 0)
    })
    const BG = RGB.filter((n,index)=>{
      return (index %3 !== 0)
    })
    const BlueDataImage = BG.filter((n,index)=>{
      return (index %2 !== 0)
    })
    const GreenDataImage = BG.filter((n,index)=>{
      return (index %2 === 0)
    })

    this.setState({RedDataImage,GreenDataImage,BlueDataImage,imgWidth,imgHeight})
  }
  render(){
    const {RedDataImage,GreenDataImage } = this.state
    const {imgWidth,imgHeight} = this.state
    return(
      <section>
        <h1>Total {imgWidth*imgHeight} Pixels</h1>
        <canvas ref="canvas" width={300} height={300} />
        <img    ref="image" src={image0} alt="0" className="hidden" />
        <Histogram data={RedDataImage}   color="#FF0000"/>
        <Histogram data={GreenDataImage} color="#00FF00"/>
        <Histogram data={GreenDataImage} color="#0000FF"/>
      </section>
    )
  }
}

export default CanvasComponent;