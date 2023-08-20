import { useNavigate } from 'react-router-dom';
import './css/MovieBox.css'

export default function MovieBox({ movieId, poster }) {

    const imgBase = "https://image.tmdb.org/t/p/w780";
    const navigator = useNavigate();
    function handleClick(id) {
        navigator(`/detail/${id}`);
    }

    return (
        <div onClick={() => handleClick(movieId)} className="wrap">
            <img src={`${imgBase}${poster}`} alt="box ref" />
        </div>
    )
}