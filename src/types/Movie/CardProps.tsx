import Movie from './Movie';

interface CardProps{
    movie: Movie;
    openModal: (title: string, overview: string, modalPoster: string) => void;
}

export default CardProps;