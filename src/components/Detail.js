import './css/Detail.css'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import TMDB from '../api/TMDB';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, showAlert } from '../features/counter/alertSlice';
import { addWatchlist, removeWatchlist, selectWatchlist } from '../features/counter/watchlistSlice';

export default function Detail() {
    const dispatch = useDispatch();
    const imgBase = "https://image.tmdb.org/t/p/w1280";
    const { id } = useParams();
    const [lst, setLst] = useState({});
    const [genres, setGenres] = useState([]);
    let isWatchlist = useSelector(selectWatchlist);
    const [shake, setShake] = useState(false);

    const animate = () => {
        setShake(true);
        setTimeout(() => setShake(false), 1000);
    }

    function addToWatchlist() {
        // alert("add")
        let genreNames = genres.map(genre => genre.name)
        dispatch(addWatchlist({
            [lst.id]: { "id": lst.id, "name": lst.title, "poster": lst.poster_path, "genres": genreNames, "duration": lst.runtime }
        }))
    }

    function removeFromWatchlist() {
        // alert("remove")
        dispatch(removeWatchlist(id))
    }

    function handelTrailerClick() {
        dispatch(showAlert());
        setTimeout(() => {
            dispatch(closeAlert());
        }, 2000)
    }

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
                            <span onClick={handelTrailerClick}>PLAY</span>
                        </button>
                        <button className="btns trailer-btn">
                            <span onClick={handelTrailerClick}>TRAILER</span>
                        </button>
                        <span className={shake ? `shake watchlist-btn` : "watchlist-btn"} onClick={animate}>
                            {
                                isWatchlist[id] !== undefined ?
                                    <i className="fa-solid fa-bookmark fa-2xl" style={{ color: "#ffffff" }} onClick={() => { removeFromWatchlist() }}></i> :
                                    <i className="fa-regular fa-bookmark fa-2xl" style={{ color: "#ffffff" }} onClick={() => { addToWatchlist() }}></i>
                            }
                        </span>
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