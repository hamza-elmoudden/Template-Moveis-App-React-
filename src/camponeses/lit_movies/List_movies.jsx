import "./list_movies.css"
import Card from "../card/Card"
export default function List_movies() {
  return (<>
  <div className="Bas_two" id="2">
    <div className="containers">
    <div className="bar" >
      <p>ONLINE WHATCHING MOVIES</p>
      <div className="upcom_bar">
        <h1>Upcoming Movies</h1>
        <div>
          <a href="">Movies</a>
          <a href="">TV Shows</a>
          <a href="">Anime</a>
        </div>
      </div>
    </div>
    <div className="row">
    <Card name="The Nothman"  data='2022' time="137" image="1" />
    <Card name="Doctor Strange in the Multiverseof Madness"  data='2022' time="137" image="2" />
    <Card name="Memory"  data='2022' time="N/A" image="3" />
    <Card name="The Unbearable Weight of Massive Talent"  data='2022' time="107" image="4" />
    </div>
  </div>
  </div>

  
  </>
  )
}