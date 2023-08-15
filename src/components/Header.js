import './Header.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import Search from './Serach';

export default function Header() {
    let isUser = useSelector(selectUser);

    function handelLogout() {
        signOut(auth).then(() => {
            console.log("signOut");
        }).catch((error) => {
            console.log(error);
        });
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
                        <Search />
                        <img onClick={handelLogout} className='userImg' src={isUser.photoURL} alt='userImg' />
                    </div>
                }
            </div>
        </nav>
    )
}