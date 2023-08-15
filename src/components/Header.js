import './Header.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { Link } from 'react-router-dom';
import Search from './Serach';
import Profile from './Profile';

export default function Header() {
    let isUser = useSelector(selectUser);

    return (
        <nav className="navbar bg-dark navbar-expand-md" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="logo" src="images/logo.png" alt="logo" />
                    <span id="brandName">Movie+</span>
                </Link>
                {isUser &&
                    <div className='header-icons'>
                        <Search />
                        <Profile />
                        {/* <img onClick={handelLogout} className='userImg' src={isUser.photoURL} alt='userImg' /> */}
                    </div>
                }
            </div>
        </nav>
    )
}