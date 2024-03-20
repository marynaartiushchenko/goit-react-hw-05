import {NavLink, useLocation} from "react-router-dom"

export default function MovieList({ movies }) {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, title, original_title, poster_path }) => (
                <li key={id}>
                    <NavLink to={`/movies/${id}`} state={{ from: location }}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width={100} alt={title || original_title} />
                            <h2>{title || original_title}</h2>
                        </div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}