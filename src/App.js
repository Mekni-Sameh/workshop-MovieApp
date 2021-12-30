import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Add from './Components/Add';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import {movies} from './Components/Movies';
import {useState} from 'react'

function App() {
  const [films,setMovie]=useState(movies)
  //  
  //function for adding a new movie
  const addHandler = (newMovie) => {
    setMovie([...films,newMovie]);
  }
  return (
    <div className="App">
      <NavBar/>
      <Add addHandler={addHandler}/>
      <Filter/>
      
      
      <MovieList movieList={films}/>
     
    </div>
  );
}

export default App;
