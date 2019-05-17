import React from 'react';
import './DegradeBox.css'

export const Histogram = ({data = []}) => {

  const timesTable    = Array(256).fill(0)
  const valuesTable   = Array.from(Array(256).keys())

  data.map((n,index)=>{
    timesTable[n]++
  })

  //console.log(dataHistogram)
  return(
    <div className="histogramCanvas">
      <h2>Histograma</h2>
      <ul>
        {timesTable.map((n,i)=><li className="histogramBar" key={i} width="50%">{i} #{n}</li>)}
      </ul>
    </div>
  )
}

const getSum = (total,num) => total+num