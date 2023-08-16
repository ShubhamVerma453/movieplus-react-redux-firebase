import './css/Login.css';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {

    function handelSignin() {
        signInWithPopup(auth, provider).then((result) => {
            console.log("Authenticated");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div id="login">
            <div className="login-content">
                <h1 className='CTA'>Discover, Stream, Enjoy</h1>
                <button onClick={handelSignin} className="sing-up">GET ALL THESE</button>
                <div className="login-discription">
                    Unlock a world of cinematic wonders. Dive into unlimited entertainment on our movie streaming platform. Your journey begins here.
                </div>
                <img className="CTAtwo" src='images/cta-logo-two.png' alt='catalog' />
            </div>
        </div>
    )
}