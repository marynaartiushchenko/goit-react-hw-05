import { Suspense, useEffect, useState } from "react";
import {useParams, Outlet } from "react-router-dom";
import { fetchMovie } from "../../movies-api";
import MovieItem from "../../components/MovieItem/MovieItem"
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo"

export default function MovieDetailsPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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
          <MovieItem movie={movie} />
          <div >
            <h2 >Additional information:</h2>
          </div>
          <AdditionalInfo />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}