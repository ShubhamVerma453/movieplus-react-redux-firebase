import './css/Header.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Serach';
import Profile from './Profile';

export default function Header() {
    let isUser = useSelector(selectUser);
    const navigator = useNavigate();

    function handleClick() {
        navigator(`watchlist`);
    }

    return (
        <nav className="navbar bg-dark navbar-expand-md" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="logo" src="images/logo.png" alt="logo" />
                    <span id="brandName">Movie+</span>
                </Link>
                {isUser &&
                    <div className='header-icons'>
                        <span className='watchlist' title="Watchlist" onClick={handleClick}>
                            <i className="fa-regular fa-bookmark fa-xl" style={{ color: "#ffffff" }}></i>
                        </span>
                        <Search />
                        <Profile />
                    </div>
                }
            </div>
        </nav>
    )
}