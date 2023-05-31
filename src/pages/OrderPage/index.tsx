import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import Movie from '../../types/Movie/Movie'
import axios from 'axios'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardM from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Loader from '../../components/common/Loader/Loader';
import Style from './style.module.css';
import { MovieContext } from "../../components/MovieProvider";

const OrderPage = () => {
  const {id} = useParams<{id: string}>();
  const {addToHistory} = useContext(MovieContext);
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // const fetchMovie = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=d668792fe63acf6c75fbdbee01b8ee19&append_to_response=videos`
  //     );
  //     const fetchedMovie = response.data;
  //     setMovie(fetchedMovie);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching movie:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovie();
  // }, []);

  
/*
1.	תמונת כרזה 
2.	תיאור הסרט
3.	שנת יציאה
4.	מגבלת גיל (מעל 18)
5.	טריילר של הסרט (במידה ויש)
6.	כמות כרטיסים להזמנה
7.	כפתור הזמנה – לאחר לחיצה על הכפתור ישתנה המסך ל: תודה שהזמנת אצלנו ולאחר כ10 ש' יועבר אוטומטית לדף הראשון
*/
  return (
      <CardM sx={{display: "flex", padding: 0}}>
        <CardMedia
          sx={{ height: 300, width: "100%", objectFit: "contain", aspectRatio: 3/2}}
          image="https://picsum.photos/200"
          title="title"
        />
        <CardContent sx={{padding: "0 2rem",display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
              <Typography variant="h4"  component="div">
                  movie title
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quod sed eligendi provident et, sint nostrum, rerum hic unde mollitia ipsam, qui commodi? Harum quam cum hic quidem qui molestias.
                  Veritatis dolor nostrum expedita, esse, odio rem di
                </Typography>
                <p className="release_date">Release date: 00-00-00</p>
            <div className={Style.icons}>
                <PeopleIcon sx={{marginRight: "0.5rem"}} /> {false ? "18+" : "For all family"}
            </div>
            <div className="buttons">
              <Button onClick={()=>addToHistory(parseInt(id))} variant="outlined">Order</Button>
            </div>
        </CardContent>
      </CardM>
  )
}

export default OrderPage;


/*

    <Loader isLoading={isLoading}>
      <CardM sx={{display: "flex"}}>
        <CardMedia
          sx={{ height: 200, width: "100%", objectFit: "contain", aspectRatio: 3/2}}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent>
              <Typography variant="h4"  component="div">
                  {movie.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {movie.overview}
                </Typography>
                <p className="release_date">Release date: {movie.release_date}</p>
            <div className="icons">
                <p><PeopleIcon /> {movie.adult ? "18+" : "For all family"} </p>
            </div>
            <div className="buttons">
              <Button variant="outlined">Order</Button>
            </div>
        </CardContent>
          <video>
            <source src={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`} type="video/mp4" />
          </video>
      </CardM>
    </Loader>

    */