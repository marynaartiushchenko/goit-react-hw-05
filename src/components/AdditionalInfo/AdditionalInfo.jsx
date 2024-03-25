import { NavLink } from "react-router-dom";

export default function AdditionalInfo({ movieId }) {
  return (
    <div>
      <h2>Additional information:</h2>
      <nav>
        <ul>       
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}