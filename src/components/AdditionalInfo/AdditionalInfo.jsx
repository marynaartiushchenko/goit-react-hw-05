import { useParams, Link} from "react-router-dom";

export default function AdditionalInfo() {
  const { movieId } = useParams();
  return (
    <div>
            <h2>Additional information:</h2>
            <nav>
              <ul>
                <li>
                  <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                </li>
              </ul>
            </nav>
          </div>
  );
}