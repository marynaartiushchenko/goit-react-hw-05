import { Link, useLocation } from 'react-router-dom';

const MovieListContent = ({ movie }) => {
  const location = useLocation();
  if (!movie.poster_path) {
    return null;
  }

  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={location}>
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieListContent;