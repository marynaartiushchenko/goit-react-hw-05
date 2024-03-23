const MovieListContent = ({ movie }) => {
  if (!movie.poster_path) {
    return null;
  }

  return (
    <li>
      <a href={`/movies/${movie.id}`}>
        <p>{movie.title}</p>
      </a>
    </li>
  );
};

export default MovieListContent;