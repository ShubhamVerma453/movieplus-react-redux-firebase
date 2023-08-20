import './css/MovieList.css'
import { useState, useEffect } from 'react'
import TMDB from '../api/TMDB';
import { useDispatch } from 'react-redux';
import { addSlide } from '../features/counter/sliderSlice';
import MovieBox from './MovieBox';

export default function MovieList(props) {
    const [movieList, setMovieList] = useState([]);
    const dispatch = useDispatch();

    // console.log(props.isSlider);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await TMDB.get(props.url);
                if (response) {
                    setMovieList(response.data.results);
                    if (props.isSlider) {
                        let key = response.data.results[0].id;
                        let value = response.data.results[0];
                        dispatch(addSlide({
                            [key]: value
                        }))
                    }
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
                                    <MovieBox
                                        key={movie.id}
                                        movieId={movie.id}
                                        poster={movie.poster_path}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}