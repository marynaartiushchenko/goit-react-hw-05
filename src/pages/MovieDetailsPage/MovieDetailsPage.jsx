import { Suspense, useEffect, useState } from "react";
import {useParams, Outlet } from "react-router-dom";
import { fetchMovie } from "../../movies-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
      {<div>{isLoading}</div>}

      {error && <p>Something wrong...</p>}

      {movie && (
        <>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}