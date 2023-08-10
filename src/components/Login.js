import './Login.css'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState(null);
    const navigator = useNavigate();

    function handelSignin() {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
            setUser(result.user);
            navigator(`/`);
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