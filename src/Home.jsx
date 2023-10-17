import Nabar from './camponeses/nabar/Navbar'
import F_page from './camponeses/f-page/f-page'
import List_movies from './camponeses/lit_movies/List_movies'
import Footer from './camponeses/footer/Footer'
import './Home.css'

export default function Home() {
  return (
    <>
    <div className='f-show'>
      <Nabar showsign={true}/>
      <F_page/>
    </div>
    <div className='t-show'>
    <List_movies/>
    </div>
    <footer>
        <Footer/>
    </footer>
    </>
    
  )
}
