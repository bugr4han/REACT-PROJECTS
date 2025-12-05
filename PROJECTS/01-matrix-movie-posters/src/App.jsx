import "./css/App.css";
import MoviesCard from "./components/MoviesCard";
import MoviesHeader from "./components/MoviesHeader";
import { moviesData } from "./movies-data/Data";

function App() {
  return (
    <>
      <MoviesHeader />
      <div className="container">
        {moviesData.map((movie) => {
          return <MoviesCard key={movie.movieId} movie={movie} />;
        })}
      </div>
    </>
  );
}

export default App;
