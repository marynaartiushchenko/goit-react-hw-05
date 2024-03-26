import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieReviews = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const Navigation = lazy(() => import("./Navigation/Navigation"));

const App = () => {
  return (
    <div >
      <Navigation></Navigation>

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}> */}
            {/* <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} /> */}
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
  <Route path="cast" element={<MovieCast />} />
  <Route path="reviews" element={<MovieReviews />} />
</Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;


