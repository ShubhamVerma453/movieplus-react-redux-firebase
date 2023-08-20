import { useEffect, useState } from 'react';
import './css/Search.css'
import TMDB from '../api/TMDB';
import { useNavigate } from 'react-router-dom';

export default function Search() {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const navigator = useNavigate();

    function handleClick(id) {
        navigator(`detail/${id}`);
    }

    useEffect(() => {
        // this setTimeout helps to achive debouncing
        let timer = setTimeout(() => {
            const fetchData = async () => {
                try {
                    let searchTerm = search.replace(" ", "+");
                    const response = await TMDB.get("/search/movie", {
                        params: {
                            query: searchTerm
                        }
                    })
                    setResult(response.data.results);
                } catch (error) {
                    console.log(error);
                }
            }
            if (search.length === 0) {
                setResult([]);
            }
            fetchData();
        }, 800)
        return () => clearTimeout(timer);
    }, [search]);

    return (
        <>
            <span className="search-icon" data-bs-toggle="modal" data-bs-target="#searchModal" title='Search'>
                <i className="fas fa-search fa-lg" style={{ color: "#ffffff" }}></i>
            </span>

            <div className="modal fade" id="searchModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="form-floating ">
                            <input type="text" autoComplete='off' className="form-control search-input" id="search" placeholder="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            <label htmlFor="search">Search</label>

                            <ul className={`${result.length === 0 ? "dropdown-menu" : "dropdown-menu show"}`}>
                                {
                                    result.map(movie => {
                                        return (
                                            <li key={movie.id} data-bs-dismiss="modal" onClick={() => {
                                                setSearch("");
                                                handleClick(movie.id)
                                            }} className="dropdown-item">
                                                {movie.title} - {movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 