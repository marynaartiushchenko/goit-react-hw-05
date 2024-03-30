import { Suspense, useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMovie } from "../../movies-api";
import MovieItem from "../../components/MovieItem/MovieItem";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";

export default function MovieDetailsPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [goBack, setGoBack] = useState('/');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

 useEffect(() => {
  if (movieId !== null && movieId !== undefined) {
    setGoBack(location.state || '/');
  }
}, [location, movieId]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <p>Something wrong...</p>}
      {movie && (
        <>
          <MovieItem movie={movie} />
          <AdditionalInfo goBack={goBack} />
          <Suspense fallback={null}>           
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
