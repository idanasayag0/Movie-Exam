import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Movie from '../../types/Movie/Movie'
import axios from 'axios'

const OrderPage = () => {
  const {id} = useParams<{id: string}>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d668792fe63acf6c75fbdbee01b8ee19&append_to_response=videos,images`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  },[]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);
  

  return <p>Order</p>;
}

export default OrderPage;
