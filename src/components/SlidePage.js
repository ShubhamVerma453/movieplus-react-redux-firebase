import { useNavigate } from 'react-router-dom';
import './SlidePage.css'

export default function ({ imgSrc, id, dis, title }) {
    const baseImgUrl = "https://image.tmdb.org/t/p/w1280";

    const navigator = useNavigate();
    function handleClick(id) {
        navigator(`detail/${id}`);
    }

    return (
        <div className="row slider-box">
            <div className="col-md-7 col-sm-7">
                <h1 className="slider-title">{title}</h1>
                <p className="slider-subtitle">{dis.slice(0, 100) + "...."}</p>
                <div className="slider-btns">
                    <button className="play-btn" onClick={() => handleClick(id)}>PLAY</button>
                    <button className="trailer-btn">TRAILER</button>
                </div>
            </div>
            <div className='col-md-5 col-sm-5 slider-img-box'>
                <img src={baseImgUrl + imgSrc} className="d-block w-100" alt="..." />
            </div>
        </div>
    )
}