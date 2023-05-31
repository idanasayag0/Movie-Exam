import React, { useEffect, useState, useContext } from 'react';
import Card from '../Card';
import Grid from '@mui/material/Grid';
import Modal from '../Modal';
import Loader from '../common/Loader/Loader';
import { MovieContext } from '../MovieProvider';


const MoviesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalOverview, setModalOverview] = useState("")
  const [modalPoster, setModalPoster] = useState("")
  const { movies, page, setPage } = useContext(MovieContext);

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
      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };

  }, [page]);

  useEffect(() => {
    if(isLoading && movies.length > 0){
      setIsLoading(false)
    }
  }, [movies]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      movies.length-2
    ) {
      setPage(page + 1);
    }
  };

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
