import React, { useContext } from "react";

import GenericGrid from "../common/GenericGrid";
import HistoryCard from "../HistoryCard";
import { MovieContext } from "../MovieProvider";


const HisotryList = () => {
  const { history,movies } = useContext(MovieContext);
  const historyMovies = movies.filter((movie) => history.includes(movie.id));

  return (
    <>
      <h1>History</h1>
      <GenericGrid items={historyMovies} component={HistoryCard} />
    </>
  );
};

export default HisotryList;
