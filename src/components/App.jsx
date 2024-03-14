import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage"
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "../pages/MovieDetailsPage/MovieDetailsPage"
import MovieReviews from "../pages/MovieDetailsPage/MovieDetailsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import Navigation from "./Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}


