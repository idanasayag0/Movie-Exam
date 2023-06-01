import CardM from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Badge from "@mui/material/Badge";

import Movie from "../../types/Movie/Movie";

type GenericMovieCardProps = {
    item: Movie,
    component: React.ComponentType<{item: Movie}>
}

const GenericCard = ({ item, component: Component }: GenericMovieCardProps) => {
  return (
    <Badge color="error" badgeContent={item.adult ? "18+" : 0}>
      <CardM
        sx={{
          width: 500,
          minHeight: 160,
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "left",
          boxShadow: "0 0 0 0.1rem rgba(0,0,0,0.2)",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardContent sx={{ flex: "1 0 auto", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Typography
              component="div"
              variant="h5"
              sx={{ fontWeight: "bold", maxWidth: 300 }}
            >
              {item.title}
            </Typography>
            <Component item={item} />
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt={item.title}
        />
      </CardM>
    </Badge>
  );
};

export default GenericCard;
