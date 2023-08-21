import './css/Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { emptyWatchlist } from '../features/counter/watchlistSlice';

export default function Profile() {
    let isUser = useSelector(selectUser);
    const dispatch = useDispatch();

    function handelLogout() {
        dispatch(emptyWatchlist());
        signOut(auth).then(() => {
            console.log("signOut");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <span className="profile-icon" data-bs-toggle="modal" data-bs-target="#profileModal">
                <img className='userImg' src={isUser.photoURL} alt='userImg' />
            </span>

            <div className="modal fade" id="profileModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content profile-content">
                        <div className='profile-img'>
                            <img className='' src={isUser.photoURL} alt='userImg' />
                        </div>
                        <div className='profile-detail'>
                            <div className='detail'>
                                <span className='lable'>Name :</span>
                                <span>&nbsp;{isUser.name}</span>
                            </div>
                            <div className='detail'>
                                <span className='lable'>Email :</span>
                                <span>&nbsp;{isUser.email}</span>
                            </div>
                            <button className="logout-btn" onClick={handelLogout} data-bs-dismiss="modal">
                                <i className="fas fa-sign-out-alt fa-lg" style={{ color: "#ffffff" }}></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}