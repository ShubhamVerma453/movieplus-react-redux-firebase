import MovieBox from './MovieBox'
import './css/Watchlist.css'

export default function Watchlist() {

    const tempList = [
        {
            "id": 1,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 2,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 3,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 4,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 5,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 6,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 7,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 8,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 9,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 10,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 11,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 12,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            "id": 13,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
    ]

    return (
        <div id='watchlist-home'>
            <h1 className='watchlist-title'>Watchlist</h1>
            <div className='watchlist-content'>
                {tempList &&
                    tempList.map(movie => {
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
    )
}