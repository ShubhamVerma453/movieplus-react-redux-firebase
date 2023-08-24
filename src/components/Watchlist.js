import { useSelector } from 'react-redux';
import { selectWatchlist } from '../features/counter/watchlistSlice';
import MovieBox from './MovieBox'
import './css/Watchlist.css'
import { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

export default function Watchlist() {
    let list = useSelector(selectWatchlist);
    function getWatchlist() {
        return Object.keys(list).map((key) => {
            return list[key];
        })
    }
    const orginalWatchlist = getWatchlist();
    const [watchlist, setWatchlist] = useState(orginalWatchlist);
    const [selectedGenra, setSelectedGenra] = useState([]);

    const availableGenra = watchlist.reduce((total, curr) => {
        return [...new Set([...total, ...curr.genres])];
    }, [])


    // console.log(availableGenra);

    const changeSort = (event) => {
        let sort = event.target.value;
        if (sort === "all") return setWatchlist(orginalWatchlist);
        let sorted = [...watchlist].sort((a, b) => {
            if (sort === "dec")
                return a.name > b.name ? -1 : 1;
            if (sort === "inc")
                return a.name > b.name ? 1 : -1;
            return 0;
        })
        setWatchlist(sorted);
    };

    useEffect(() => {
        if (selectedGenra.length === 0) return setWatchlist(orginalWatchlist);

        const filteredList = orginalWatchlist.filter(movie => selectedGenra.every(genre => movie.genres.includes(genre)))
        setWatchlist(filteredList);
    }, [selectedGenra])

    return (
        <div id='watchlist-home'>
            <div className='watchlist-header'>
                <h1 className='watchlist-title'>Watchlist</h1>
                <div className='watchlist-controls'>
                    <div className='sort-dropdown'>
                        <select name="dropdown" id="state" onChange={changeSort}>
                            <option value="all">Sort movies</option>
                            <option value="inc">A to Z</option>
                            <option value="dec">Z to A</option>
                        </select>
                    </div>

                    <div className='filter-dropdown'>
                        <Multiselect
                            isObject={false}
                            options={availableGenra}
                            showCheckbox={true}
                            hideSelectedList
                            placeholder={selectedGenra.length !== 0 ? selectedGenra.length + " selected" : "Filter genra"}
                            onSelect={(e) => { setSelectedGenra([...e]) }}
                            onRemove={(e) => { setSelectedGenra([...e]) }}
                        />
                    </div>
                </div>
            </div>
            {watchlist &&
                <div className='watchlist-content'>
                    {
                        watchlist.map(movie => {
                            return (
                                <MovieBox
                                    key={movie.id}
                                    movieId={movie.id}
                                    poster={movie.poster}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}