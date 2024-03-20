import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../movies-api';
import ActorsGallery from '../ActorsGallery/ActorsGallery';

export default function MovieCast() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovieCredits(movieId);
        setActors(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      {<div>{isLoading}</div>}
      {error && <p>Something wrong...</p>}
      {actors.length === 0 && !isLoading && !error && (
        <p>No information available about the movie cast</p>
      )}
      <ActorsGallery data={actors} />
    </>
  );
}