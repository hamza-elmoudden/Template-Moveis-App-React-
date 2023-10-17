import "./APP.css"
import { Routes,Route } from "react-router-dom";
import Home from './Home'
import Movie_details from "./Movie_details";
import Movies from "./Movies"
import SignIN from "./SignIN";
import Register from "./Register";

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Moives/details" element={<Movie_details/>}/>
    <Route path="MOVIES" element={<Movies/>}/>
    <Route path="SIGNIN" element={<SignIN/>}/>
    <Route path="REGISTER" element={<Register/>}/>
    <Route path="TV/SHOW" element={<Movies/>}/>
  </Routes>
  </>
  );
}

export default App;
