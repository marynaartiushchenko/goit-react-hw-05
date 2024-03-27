import { useEffect, useState } from 'react';
import { getMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <b>Loading movies...</b>}
      {error && <b>Failed to fetch movies. Please try again later.</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
