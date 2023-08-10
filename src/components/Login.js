import './Login.css';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';

export default function Login() {
    let isUser = useSelector(selectUser);

    function handelSignin() {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div id="login">
            <div className="login-content">
                <img className="CTAone" src='images/cta-logo-one.svg' alt='catalog' />
                <button onClick={handelSignin} className="sing-up">GET ALL THESE</button>
                <div className="login-discription">
                    Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited.
                </div>
                <img className="CTAtwo" src='images/cta-logo-two.png' alt='catalog' />
            </div>
        </div>
    )
}