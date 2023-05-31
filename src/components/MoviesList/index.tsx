import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../types/Movie/Movie';
import Card from '../Card';
import Grid from '@mui/material/Grid';
import Modal from '../Modal';
import Loader from '../common/Loader/Loader';

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalOverview, setModalOverview] = useState("")
  const [modalPoster, setModalPoster] = useState("")
  const openModal =  (title: string, overview: string, poster_path: string) => {
        setModalOpen(true)
        setModalTitle(title)
        setModalOverview(overview)
        setModalPoster(poster_path)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

useEffect(() => {
    fetchMovies();
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

}, [page]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=d668792fe63acf6c75fbdbee01b8ee19&page=${page}`
      );
      const fetchedMovies = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      movies.length-2
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (page > 1) {
      fetchMovies();
    }
  }, [page]);


  return (
    <>
    <Loader isLoading={isLoading} > 
      {modalOpen && ( <Modal modalOpen={modalOpen} closeModal={closeModal} modalTitle={modalTitle} modalOverview={modalOverview} modalPoster={modalPoster} /> )}
      <Grid container spacing={2} sx={{padding: "0 2rem"}}>
          {movies.map((movie) => <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><Card key={movie.id} movie={movie}  openModal={openModal}/></Grid>)}
      </Grid>
    </Loader>
    </>
  );
};

export default MoviesList;
