type Movie = {
    id:number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    adult: boolean;
    video?: string | boolean;
    [key: string]: any;
    purchase_date?: string;
}

export default Movie;