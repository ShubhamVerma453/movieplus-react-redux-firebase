import { useSelector } from 'react-redux';
import { selectWatchlist } from '../features/counter/watchlistSlice';
import MovieBox from './MovieBox'
import './css/Watchlist.css'

export default function Watchlist() {
    let isWatchlist = useSelector(selectWatchlist);

    return (
        <div id='watchlist-home'>
            <h1 className='watchlist-title'>Watchlist</h1>
            {isWatchlist &&
                <div className='watchlist-content'>
                    {
                        Object.keys(isWatchlist).map(key => {
                            return (
                                <MovieBox
                                    key={isWatchlist[key].id}
                                    movieId={isWatchlist[key].id}
                                    poster={isWatchlist[key].poster}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}