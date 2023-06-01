import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import {Badge, CardActions, CardContent, CardMedia, Button, Typography, Card as CardM} from '@mui/material';
import {ShoppingCart, BookmarkAdd, BookmarkRemove} from '@mui/icons-material';

import CardProps from '../../types/Movie/CardProps';
import { MovieContext } from '../MovieProvider';
import { ORDER_PAGE_PATH, IMAGE_URL } from '../../constants';

const Card = ({movie, openModal} :CardProps) =>{
    const {toggleFavorite, favorite} = useContext(MovieContext)
    const navigate = useNavigate()

    const goNavigate = ()=>{
        navigate(ORDER_PAGE_PATH + movie.id)
    }

  return (
    <Badge color="error" badgeContent={movie.adult ? "18+" : 0}>
    <CardM sx={{width: "100%", height:430, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)"}}>
      <CardMedia
        sx={{ height: 200, width: "100%", objectFit: "contain", aspectRatio: 3/2}}
        image={`${IMAGE_URL}${movie.backdrop_path}`}
        title={movie.title}
      />
      <CardContent sx={{flex: "1"}}>
        <Typography sx={{fontWeight: "bold"}} gutterBottom variant="h5" component="div">
        {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {movie.overview.length > 80 ? ( <>{movie.overview.slice(0, 80) + '...' } <Button onClick={()=>{openModal(movie.title, movie.overview, movie.poster_path)}}>Read More</Button></> ) : movie.overview}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={()=>{toggleFavorite(movie.id)}} size="small">{favorite.includes(movie.id)? <BookmarkRemove/> : <BookmarkAdd/>}</Button>
        <Button onClick={goNavigate} size="small"><ShoppingCart /></Button>
      </CardActions>
    </CardM>
    </Badge>
  );
}

export default Card;