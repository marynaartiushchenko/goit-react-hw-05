import { useLocation } from 'react-router-dom';
import MovieListContent from '../MovieListContent/MovieListContent';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      <div>
        {movies.map(movie => (
          <MovieListContent key={movie.id} movie={movie} location={location} />
        ))}
      </div>
    </ul>
  );
};

export default MovieList;