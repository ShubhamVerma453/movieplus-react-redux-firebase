import { useNavigate } from 'react-router-dom';
import './css/SlidePage.css'
import { useDispatch } from 'react-redux';
import { showAlert } from '../features/counter/alertSlice';

export default function SlidePage({ imgSrc, id, dis, title }) {
    const baseImgUrl = "https://image.tmdb.org/t/p/w1280";
    const dispatch = useDispatch();
    const navigator = useNavigate();

    function handleClick(id) {
        navigator(`detail/${id}`);
    }
    function handelTrailerClick() {
        dispatch(showAlert());

    }

    return (
        <div className="row slider-box">
            <div className="col-md-7 col-sm-7">
                <h1 className="slider-title">{title}</h1>
                <p className="slider-subtitle">{dis.slice(0, 100) + "...."}</p>
                <div className="slider-btns">
                    <button className="play-btn" onClick={() => handleClick(id)}>PLAY</button>
                    <button className="trailer-btn" onClick={handelTrailerClick}>TRAILER</button>
                </div>
            </div>
            <div className='col-md-5 col-sm-5 slider-img-box'>
                <img src={baseImgUrl + imgSrc} className="d-block w-100" alt="..." />
            </div>
        </div>
    )
}