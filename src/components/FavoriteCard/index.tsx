import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";

import {CardActions, Button} from "@mui/material";
import {BookmarkRemove, ShoppingCart} from "@mui/icons-material";

import GenericCard from "../GenericCard";
import { MovieContext } from "../MovieProvider";
import { ORDER_PAGE_PATH } from "../../constants";


const FavoriteCard = ({ item }) => {
  const navigate = useNavigate();
  const { toggleFavorite } = useContext(MovieContext);
  const navitateTo = () => {
      navigate(`${ORDER_PAGE_PATH}${item.id}`);
  };

  return (
    <GenericCard
      item={item}
      component={() => (
        <CardActions>
          <Button onClick={()=>toggleFavorite(item.id)} size="small">{<BookmarkRemove />}</Button>
          <Button onClick={navitateTo} size="small">
            <ShoppingCart />
          </Button>
        </CardActions>
      )}
    />
  );
};

export default FavoriteCard;
