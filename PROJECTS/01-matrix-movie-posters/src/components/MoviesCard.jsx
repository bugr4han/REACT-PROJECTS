function MoviesCard({ movie }) {
  const {
    movieImage,
    movieName,
    movieDirector,
    movieDesc,
    movieYear,
    movieRating,
    movieTrailer,
  } = movie;

  return (
    <div className="card-container">
      <img className="card-image" src={movieImage} />
      <h2 className="card-title">{movieName}</h2>
      <p className="card-desc">{movieDesc}</p>
      <h4 className="card-director">{movieDirector}</h4>
      <h4 className="card-year">{movieYear}</h4>
      <h5 className="card-rating">{movieRating}</h5>
      <button
        className="card-button"
        onClick={() => window.open(movieTrailer, "_blank")}
      >
        Watch Trailer
      </button>
    </div>
  );
}

export default MoviesCard;
