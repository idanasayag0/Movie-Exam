import Data from "../../data/data";
import GenericGrid from "../common/GenericGrid";
import FavoriteCard from "../FavoriteCard";

const FavoriteList = () => {
  
  const data2 = [...Data].splice(3, 11);

  return (
    <>
      <h1>Favorite</h1>
      <GenericGrid items={data2} component={FavoriteCard} />
    </>
  );
};

export default FavoriteList;
