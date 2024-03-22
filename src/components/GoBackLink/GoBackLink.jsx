import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SlActionUndo } from "react-icons/sl";

export default function GoBackLink() {
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <div> 
      <Link to={goBack.current}>
        
        <SlActionUndo /> Go back
      </Link>
    </div>
  );
}