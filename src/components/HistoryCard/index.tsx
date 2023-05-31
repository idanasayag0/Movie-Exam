import Typography from "@mui/material/Typography";

import GenericCard from "../GenericCard";

const HistoryCard = ({ item }) => {
  return (
    <GenericCard
      item={item}
      component={({item}) => (
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {item.purchase_date}
        </Typography>
      )}
    />
  );
};

export default HistoryCard;
