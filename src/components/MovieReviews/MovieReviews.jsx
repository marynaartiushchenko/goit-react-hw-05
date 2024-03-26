import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../../movies-api';
import ReviewsGallery from '../ReviewsGallery/ReviewsGallery';
import { Audio } from 'react-loader-spinner'

export default function MovieReviews() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovieReview(movieId);
        setReviews(data);
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
      {isLoading && <Audio />}
      {error && <p>Something wrong...</p>}
      {reviews && <ReviewsGallery reviews={reviews} />}
    </>
  );
}
