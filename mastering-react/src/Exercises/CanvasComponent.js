import React, { Component } from 'react';
import image0 from './0.png';

class CanvasComponent extends Component {
  constructor(props){
    super(props)
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
      const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
      console.log(imageData)
    }
  }
  render(){
    return(
      <section>
        <canvas ref="canvas" width={300} height={300} />
        <img    ref="image" src={image0} alt="0" className="hidden" />
      </section>
    )
  }
}
//getPixel('./bg.png', 10, 10);
export default CanvasComponent;