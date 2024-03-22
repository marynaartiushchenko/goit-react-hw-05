import { Link } from 'react-router-dom';

const MovieListContent = ({ movie, state }) => {
  if (!movie.poster_path) {
    return null;
  }
  return (
    <li >
      <Link to={`/movies/${movie.id}`}  state={state}>
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};
export default MovieListContent;