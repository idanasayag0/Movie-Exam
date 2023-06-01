import React, {useState, createContext, useEffect} from 'react'

import Movie from '../../types/Movie/Movie'
import axios from 'axios'
type GlobalContent = {
  movies: Movie[],
  history: number[],
  favorite: number[],
  page: number,
  setPage: (p: number) => void,
  addToHistory: (id: number, purchase_date:string) => void,
  toggleFavorite: (id: number) => void
}

const MovieContext = createContext<GlobalContent>({
  movies: [],
  history: [],
  favorite: [],
  page: 1,
  setPage: () => {},
  addToHistory: () => {},
  toggleFavorite: () => {}
})

const MovieProvider = ({children}) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [history, setHistory] = useState<number[]>([])
  const [favorite, setFavorite] = useState<number[]>([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=d668792fe63acf6c75fbdbee01b8ee19&page=${page}`
      );
      const fetchedMovies = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const addToHistory = (id: number, purchase_date:string) => {
    const updatedMovie = movies.find((movie) => movie.id === id)
    updatedMovie.purchase_date = purchase_date;
    setMovies((prevMovie)=> {
      return prevMovie.map((movie) => {
        if(movie.id === id){
          return updatedMovie;
        } else {
          return movie;
        }
      })
    });
    setHistory((prevHistory) => [...prevHistory, id]);
  };

  const toggleFavorite = (id: number) => {
    if(favorite.includes(id)){
      setFavorite((prevFavorite) => prevFavorite.filter((movieId) => movieId !== id));
    } else {
      setFavorite((prevFavorite) => [...prevFavorite, id]);
    }
  };

  const value = {movies, history, favorite, page, setPage, addToHistory, toggleFavorite}
  return (
    <MovieContext.Provider value={value}> {children}</MovieContext.Provider>
  )
}

export {MovieProvider, MovieContext}
