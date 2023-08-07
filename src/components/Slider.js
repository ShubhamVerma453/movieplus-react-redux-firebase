import SlidePage from './SlidePage';
import './Slider.css';

export default function Slider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <SlidePage
                        imgSrc="https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg" />
                </div>
                <div className="carousel-item">
                    <SlidePage
                        imgSrc="https://image.tmdb.org/t/p/w1280/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg" classNameName="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <SlidePage
                        imgSrc="https://image.tmdb.org/t/p/w1280/aJn9XeesqsrSLKcHfHP4u5985hn.jpg" classNameName="d-block w-100" alt="..." />
                </div>
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



