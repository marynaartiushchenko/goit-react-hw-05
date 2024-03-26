import { Suspense, useEffect, useState, useRef } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMovie } from "../../movies-api";
import MovieItem from "../../components/MovieItem/MovieItem";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import { NavLink } from "react-router-dom";

export default function MovieDetailsPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state || '/');

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

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <p>Something wrong...</p>}
      {movie && (
        <>
          <MovieItem movie={movie} />
          <Suspense fallback={null}>
            <AdditionalInfo goBack={goBack} />
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
