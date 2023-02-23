import './App.css';
import MovieList from './Components/MovieList'
import bride from './Components/br.png'
import tom from './Components/t.png'

function App() {
  const movie_details =[
    {
    image: "https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_FMjpg_UX1000_.jpg",
    movie_name: "Bright",
    movie_year: "2017",
    movie_director: "David Ayer",
    movie_length: "117 min",
    movie_type: "Action, Crime, Fantasy",
    movie_bg: bride
  },
  {
    image: "https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
    movie_name: "Tom Raider",
    movie_year: "2018",
    movie_director: "Roar Uthaug",
    movie_length: "125 min",
    movie_type: "Action, Fantasy",
    movie_bg: tom
  }
  ]
  return (
    <div className="App">
      <MovieList 
      image={movie_details[0].image} 
      movie_name={movie_details[0].movie_name}
      year={movie_details[0].movie_year}
      director_name={movie_details[0].movie_director}
      time={movie_details[0].movie_length}
      movie_type={movie_details[0].movie_type}
      bg_image={movie_details[0].movie_bg}
      />
      <MovieList 
      image={movie_details[1].image} 
      movie_name={movie_details[1].movie_name}
      year={movie_details[1].movie_year}
      director_name={movie_details[1].movie_director}
      time={movie_details[1].movie_length}
      movie_type={movie_details[1].movie_type}
      bg_image={movie_details[1].movie_bg}
      />
    </div>
  );
}

export default App;
