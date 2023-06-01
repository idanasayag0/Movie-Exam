import React, { useContext } from "react";

import GenericGrid from "../common/GenericGrid";
import FavoriteCard from "../FavoriteCard";
import { MovieContext } from "../MovieProvider";


const FavoriteList = () => {
  const { favorite, movies } = useContext(MovieContext);
  const favoriteMovies = movies.filter((movie) => favorite.includes(movie.id));

  return (
    <>
      <h1>Favorite</h1>
      <GenericGrid items={favoriteMovies} component={FavoriteCard} />
    </>
  );
};

export default FavoriteList;
