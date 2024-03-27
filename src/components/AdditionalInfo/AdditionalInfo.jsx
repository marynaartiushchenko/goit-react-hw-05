import { NavLink } from "react-router-dom";

export default function AdditionalInfo() {
  return (
    <div>
      <h2>Additional information:</h2>
      <nav>  
        <ul>
         <li>
        <NavLink to="cast">Cast info</NavLink>
      </li>
      <li>
        <NavLink to="reviews">Reviews</NavLink>
      </li>
        </ul>
        

      </nav>
    </div>
  );
}
