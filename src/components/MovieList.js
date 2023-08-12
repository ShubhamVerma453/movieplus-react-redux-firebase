import './MovieList.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import TMDB from '../api/TMDB';
import { useDispatch } from 'react-redux';
import { addSlide } from '../features/counter/sliderSlice';

export default function MovieList(props) {
    const [movieList, setMovieList] = useState([]);
    const imgBase = "https://image.tmdb.org/t/p/w780";
    const dispatch = useDispatch();

    const navigator = useNavigate();
    function handleClick(id) {
        navigator(`detail/${id}`);
    }
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
                                    <div key={movie.id} onClick={() => handleClick(movie.id)} className="wrap">
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