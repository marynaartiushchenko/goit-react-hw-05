import GoBackLink from '../GoBackLink/GoBackLink';

export default function MovieItem({ movie }) {
  return (
    <>
      <GoBackLink />
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div>
          <h2>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <p>{movie.overview}</p>
          <div>
            <p>
              <b>Rating:</b> {movie.vote_average}
            </p>
            <p>
              <b>Genres:</b>{' '}
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p>
              <b>Budget:</b> $ {movie.budget}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}