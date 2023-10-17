import React, { useState } from 'react'
import './movies.css'
import Nabar from './camponeses/nabar/Navbar'
import Footer from './camponeses/footer/Footer'
import Card from './camponeses/card/Card'

export default function Movies() {
  const [search,setsearch] =useState('')
  return (
    <>
    <div className='Base'>
    <Nabar showsign={true}/>
    <div className='movies'>
      <div className='Cont-serch pt-5 d-flex justify-content-center align-items-center'>
        <input className='search' placeholder='Search' type="search" name='search' value={search} onChange={(e)=>setsearch(e.target.value)}/>
        <button className='Btn-serch'>Search</button>
      </div>
      <div className='container'>
        <div className='row'>
        <Card name="The Nothman"  data='2022' time="137" image="1" />
        <Card name="Doctor Strange in the Multiverseof Madness"  data='2022' time="137" image="2" />
        <Card name="Memory"  data='2022' time="N/A" image="3" />
        <Card name="The Unbearable Weight of Massive Talent"  data='2022' time="107" image="4" />
        <Card name="Memory"  data='2022' time="N/A" image="3" />
        <Card name="The Unbearable Weight of Massive Talent"  data='2022' time="107" image="4" />
        <Card name="The Nothman"  data='2022' time="137" image="1" />
        <Card name="Memory"  data='2022' time="N/A" image="3" />
      </div>
      </div>
    </div>
    <Footer/>    
    </div>
    </>
  )

}
