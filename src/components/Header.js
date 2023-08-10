import './Header.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Header() {
    let isUser =  useSelector(selectUser);

    function handelLogout(){
        signOut(auth).then(() => {
            console.log("signOut");
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <nav className="navbar bg-dark navbar-expand-md" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="images/logo.png" alt="logo" />
                    <span id="brandName">Movie+</span>
                </a>
                {isUser &&
                    <img onClick={handelLogout} className='userImg' src={isUser.photoURL} alt='userImg' />
                    }
            </div>
        </nav>
    )
}