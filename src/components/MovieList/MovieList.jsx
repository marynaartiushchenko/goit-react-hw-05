import {NavLink, useLocation} from "react-router-dom"

export default function MovieList = ({movies}) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map (({id, title, original_title, poster_path}) => () )}
            <li>
            </li></ul>
    )
}