import './Detail.css'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import TMDB from '../api/TMDB';

export default function Detail() {
    const imgBase = "https://image.tmdb.org/t/p/w1280";
    const { id } = useParams();
    const [lst, setLst] = useState({});
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await TMDB.get(`/movie/${id}`);
                if (response) {
                    setLst(response.data);
                    setGenres(response.data.genres);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        return;
    }, [id])

    return (
        <>
            {lst !== {} &&
                <div className="container">
                    <div className="backgroung">
                        {lst.backdrop_path &&
                        <img src={`${imgBase}${lst.backdrop_path}`} alt='background' />}
                    </div>
                    <h1 className="title">{lst.title}</h1>
                    <div className="controls">
                        <button className="btns play-btn">
                            <span>PLAY</span>
                        </button>
                        <button className="btns trailer-btn">
                            <span>TRAILER</span>
                        </button>
                    </div>
                    <div className="sub-title">
                        <span>
                            {lst.release_date ? new Date(lst.release_date).getFullYear() : "N/A"}
                        </span>
                        <span> | {lst.runtime}m | </span>
                        {genres !== [] && <span>
                            {genres.map((genre, index) => (
                                <span key={genre.name}>
                                    {genre.name}
                                    {index !== lst.genres.length - 1 && ", "}
                                </span>
                            ))}
                        </span>}
                    </div>
                    <div className="discription">{lst.overview}</div>
                </div>
            }
        </>
    )
}