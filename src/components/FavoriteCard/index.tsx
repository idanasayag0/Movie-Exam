import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import GenericCard from "../GenericCard";
import { MovieContext } from "../MovieProvider";


const FavoriteCard = ({ item }) => {
  const navigate = useNavigate();
  const { toggleFavorite } = useContext(MovieContext);
  const navitateTo = () => {
      navigate("/order/" + item.id);
  };

  return (
    <GenericCard
      item={item}
      component={() => (
        <CardActions>
          <Button onClick={()=>toggleFavorite(item.id)} size="small">{<BookmarkRemoveIcon />}</Button>
          <Button onClick={navitateTo} size="small">
            <ShoppingCartIcon />
          </Button>
        </CardActions>
      )}
    />
  );
};

export default FavoriteCard;
