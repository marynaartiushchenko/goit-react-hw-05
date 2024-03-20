import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TiArrowBackOutline } from "react-icons/ti";

export default function GoBackLink() {
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <div> 
      <Link to={goBack.current}>
        
        <TiArrowBackOutline /> Go back
      </Link>
    </div>
  );
}