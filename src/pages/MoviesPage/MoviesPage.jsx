import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesByTitle } from '../../movies-api';
import MoviesFilter from '../../components/MoviesFilter/MoviesFilter';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();


  const movieTitle = params.get('query') ?? '';

  useEffect(() => {
    async function refreshMovies() {
      await fetchMovies(movieTitle);
    }

    refreshMovies();
  }, [movieTitle, params]); 

  const fetchMovies = async movieTitle => {
    try {
      setMovies([]);
      setIsLoading(true);
      setError(null);
      const data = await fetchMoviesByTitle(movieTitle);
      setMovies(data);
    } catch (error) {
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = query => {
    setParams({ query });
    fetchMovies(query);
  };

  return (
    <>
      <MoviesFilter onSubmit={handleSubmit} />
      <div>
        {error && <p>{error}</p>}
        {movies.length === 0 && !isLoading && !error && !movieTitle && (
          <p>No movies found for the given query</p>
        )}
      </div>

      <MovieList movies={movies} />
    </>
  );
}