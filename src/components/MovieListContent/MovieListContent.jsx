import { Link } from 'react-router-dom';

const MovieListContent = ({ movie }) => {
  if (!movie.poster_path) {
    return null;
  }

  return (
    <li>
      <Link to={`/movies/${movie.id}`}>
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieListContent;