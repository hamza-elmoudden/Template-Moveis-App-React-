import { useRef } from 'react'
import '../f-page/f-page.css'
import { Link } from 'react-router-dom'
import List_movies from '../lit_movies/List_movies'

export default function F_page() {
  return (
  <>
  <div className='Base_1'>
  <div className='container'>
    <div className='content'>
      <p>Filmane</p>
      <h1>Unlimited <span>Movie</span> TVs Shows,&More</h1>
      <div className='meta'>
        <div className='meta'>
          <p className='PG'>PG 18</p>
          <p className='HD'>HD</p>
        </div>
        <div className='meta'>
          <p>Romance,</p>
          <p>Drama</p>
        </div>
      </div>
      <div className='watch'>
        <Link type="button" to="/MOVIES" className="watch-btn">Watch Now</Link>
        </div>
    </div>
    <div>
    </div>
  </div>
  </div>
  </>
  )
}

