import './MovieList.css'
import { useState, useEffect } from 'react'
import TMDB from '../api/TMDB';

export default function MovieList(props) {
    const [movieList, setMovieList] = useState([]);
    const imgBase = "https://image.tmdb.org/t/p/w780";

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await TMDB.get(props.url);
                if (response) {
                    setMovieList(response.data.results);
                    // console.log(movieList);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        return;
    }, [])


    return (
        <>
            {movieList !== [] &&
                <div className='movie-list'>
                    <h4 className='movie-list-title'>{props.heading}</h4>
                    <div className="movie-list-box">
                        {
                            movieList.map(movie => {
                                return (
                                    <div className="wrap">
                                        <img src={`${imgBase}${movie.poster_path}`} alt="box ref" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}