import React from 'react'
import './card.css'

export default function Card(props) {
    let {data,name,time,image} = props
  return (
    <>
    <div className="col">
    <div className="card" >
    <img src={require(`../../images/upcoming-${image}.png`)} className="card-img-top" alt="..."/>
    <div className="card-body">
      <div>
        <p className="name_movie">{name}</p>
        <p className="data_movie"> {data}</p>
      </div>
      <div>
        <p className="hd">HD</p>
        <p className="time">{time} min</p>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
