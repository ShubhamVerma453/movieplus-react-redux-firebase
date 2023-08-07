import './SlidePage.css'

export default function ({ imgSrc }) {
    return (
        <div className="row slider-box">
            <div className="col-md-7 col-sm-7">
                <h1 className="slider-title">This is title</h1>
                <p className="slider-subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel totam et sint enim ipsa voluptatum ducimus, dolorum quae molestias aperiam quis quam tenetur omnis. ...</p>
                <div className="slider-btns">
                    <button className="play-btn">PLAY</button>
                    <button className="trailer-btn">TRAILER</button>
                </div>
            </div>
            <div className='col-md-5 col-sm-5 slider-img-box'>
                <img src={imgSrc} className="d-block w-100" alt="..." />
            </div>
        </div>
    )
}