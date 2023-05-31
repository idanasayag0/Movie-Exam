import CardM from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardProps from '../../types/Movie/CardProps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';

const Card = ({movie, openModal} :CardProps) =>{
    const navigate = useNavigate()

    const goNavigate = ()=>{
        navigate(`/order`)
    }

  return (
    <Badge color="error" badgeContent={movie.adult ? "18+" : 0}>
    <CardM sx={{maxWidth: 350, height:430, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)" }}>
      <CardMedia
        sx={{ height: 200, width: "100%", objectFit: "contain", aspectRatio: 3/2}}
        image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        title={movie.title}
      />
      <CardContent sx={{flex: "1"}}>
        <Typography gutterBottom variant="h5" component="div">
        {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {movie.overview.length > 80 ? ( <>{movie.overview.slice(0, 80) + '...' } <Button onClick={()=>{openModal(movie.title, movie.overview, movie.poster_path)}}>Read More</Button></> ) : movie.overview}
        </Typography>
      </CardContent>
      <CardActions >
        <Button  size="small">{<BookmarkAddIcon/>}</Button>
        <Button onClick={goNavigate} size="small"><ShoppingCartIcon /></Button>
      </CardActions>
    </CardM>
    </Badge>
  );
}

export default Card;