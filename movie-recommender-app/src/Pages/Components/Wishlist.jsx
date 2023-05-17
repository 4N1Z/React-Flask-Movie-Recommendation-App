import React from "react";
import "./styles/Wishlist.css";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

function Wishlist(props) {
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/search/${props.searchedMovie}`);
    window.location.reload();
  };
  const img_path = "https://image.tmdb.org/t/p/w342";

  return (
    <div className="wishListMainContainer">
      <h1>WISHLIST</h1>
      <div className="cards">

        {props.searchedMovie.map((item) =>{
             <MovieCard
             key={item.id + item.original_title}
             movie={item}
           />
   
        }
  
        )}                    
     


      </div>
    </div>
  );
}

export default Wishlist;
