import React, {useEffect, useState, useContext} from "react";
import ReactPlayer from 'react-player';
import { useParams, useNavigate } from "react-router-dom";

import axios from 'axios'

import { CardContent, Input } from "@mui/joy";
import PeopleIcon from '@mui/icons-material/People';
import {Button, Container, Typography, CardMedia, Card as CardM} from '@mui/material';

import { MovieContext } from "../../components/MovieProvider";
import Loader from '../../components/common/Loader/Loader';
import css from './style.module.css';
import Movie from '../../types/Movie/Movie'
import Modal from "../../components/Modal";
import { SEARCH_PAGE_PATH, API_KEY, IMAGE_URL } from "../../constants";

const OrderPage = () => {
  const {id} = useParams<{id: string}>();
  const {addToHistory} = useContext(MovieContext);
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const navigateTo = () => {
    const currentDate = new Date().toLocaleString().split(',')[0].split('.');
    if(parseInt(currentDate[0]) < 10) currentDate[0] = '0' + currentDate[0];
    if(parseInt(currentDate[1]) < 10) currentDate[1] = '0' + currentDate[1];

    addToHistory(parseInt(id), currentDate.join('-'));
    setTimeout(() => {
      navigate(SEARCH_PAGE_PATH)
    },10000);
  }

  const openModal = ()=>{
    setModalOpen(true);
  }

  const handleClick = ()=>{
    openModal();
    navigateTo();
  }

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        );
        const fetchedMovie = response.data;
        setMovie(fetchedMovie);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, []);

  
  return (
    <>
      <Loader isLoading={isLoading}>
      {!isLoading && 
      <>
        <CardM sx={{display: "flex", maxWidth: 1800, margin: "0 auto", boxShadow: 0}}>
          <CardMedia
            sx={{ height: 300, width: 350, objectFit: "contain", aspectRatio: 3/2}}
            image={`${IMAGE_URL}${movie.poster_path}`}
            title={movie.title}
          />
           <CardContent sx={{padding: "0 2rem",display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <Typography variant="h4"  component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {movie.overview}
                  </Typography>
                  <p className={css["release_date"]}>Release date: {movie.release_date}</p>
                  <div className={css["icons"]}>
                    <PeopleIcon sx={{marginRight: "0.5rem"}} /> {movie.adult ? "18+" : "For all family"}
                  </div>
              <div className={css["buttons"]}>
              <Input sx={{width: "10%", marginRight: "1rem"}} defaultValue={1} slotProps={{input:{min:1}}}  placeholder="Type in here…" variant="outlined" color="primary" type="number" />         
                <Button onClick={handleClick} variant="outlined">Order</Button>
                <Modal modalOpen={modalOpen} modalTitle="Thank you for purchase" modalOverview="You will move to home page in few seconds..."/>
              </div>
          </CardContent>
        </CardM>
        <Container sx={{display: "flex", justifyContent: "center", marginTop: "5rem"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`} controls={true} />
          </Container>
        </>
      }
    </Loader>
    </>
  )
}

export default OrderPage;