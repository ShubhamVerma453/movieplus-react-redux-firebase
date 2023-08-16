import { useSelector } from 'react-redux';
import SlidePage from './SlidePage';
import './css/Slider.css';
import { selectSlides } from '../features/counter/sliderSlice';

export default function Slider() {
    let isSlides = useSelector(selectSlides);
    // console.log(isSlides);
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {isSlides &&
                    Object.keys(isSlides).map((key, index) => {
                        return (
                            <button key={key} type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        )
                    })
                }
            </div>
            <div className="carousel-inner">
                {isSlides &&
                    Object.keys(isSlides).map((key, index) => {
                        return (
                            <div key={key} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                <SlidePage
                                    imgSrc={isSlides[key].backdrop_path}
                                    id={key}
                                    dis={isSlides[key].overview}
                                    title={isSlides[key].title}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}



