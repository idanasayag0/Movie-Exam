import { useNavigate } from "react-router-dom";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import GenericCard from "../GenericCard";


const FavoriteCard = ({ item }) => {
  const navigate = useNavigate();
  const navitateTo = () => {
      navigate("/order/" + item.id);
  };

  return (
    <GenericCard
      item={item}
      component={() => (
        <CardActions>
          <Button size="small">{<BookmarkRemoveIcon />}</Button>
          <Button onClick={navitateTo} size="small">
            <ShoppingCartIcon />
          </Button>
        </CardActions>
      )}
    />
  );
};

export default FavoriteCard;
