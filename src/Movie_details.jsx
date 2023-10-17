import Nabar from './camponeses/nabar/Navbar'
import Footer from './camponeses/footer/Footer'
import List_movies from './camponeses/lit_movies/List_movies'
import "./movie_details.css"
export default function Movie_details() {
  return (
    <>
    <div className='setction'>
      <nav>
      <Nabar showsign={true}/>
      </nav>
      <div className='movies_details'>
        <div className='container'>
          <div className='row  pb-5 moves_hi'>
              <div className='col-4 ms-col-12 right'>
                <div className='cont_moves'>
                  <img className='image_moves' src={require('./images/movie-4.png')} alt="" />
                </div>
              </div>
              <div className='col ms-col-12  lefth'>
                <p>New Episodes</p>
                <h1><span>Free</span> Guy</h1>
                <div className='liste'>
                  <p className='pg'>PG 13</p>
                  <p className='hd'> HD </p>
                  <p className='list_para'> Comedy, Action, Adventure, Science Fiction </p>
                  <p className='data'>2021</p>
                  <p className='time'>115 min</p>
                </div>
                <div>
                  <p>A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.</p>
                </div>
                <div>
                  <p className='watche'>WATCH NOW</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='movies_back'>
      <List_movies/>
      </div>
      <footer>
      <Footer/>
      </footer>
      </div>
    </>
  )
}
