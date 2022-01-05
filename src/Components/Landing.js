import React from "react";
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing container">
            <div className="landing-nav">
                <div className="logo">GQ</div>
                <div className="landing-nav-btns">
                    <Link className="login-btn" to="/login">Login</Link>
                    <Link className="signup-btn" to="/signup">Sign Up</Link>
                </div>
            </div>
            <div className="landing-hero">
                <div className="landing-left">
                    <div className="title">
                        <h1 className="landing-title">Welcome to your</h1>
                        <h1 className="landing-title-2">Goal Quest</h1>
                    </div>
                    <p className="landing-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <Link className="join-btn" to="/signup">Join now</Link>
                </div>
                <div className="landing-right">
                    <img src="https://user-images.githubusercontent.com/57569861/139555473-ec178d03-b166-457f-9060-013b9dd092cb.png" alt="svg"/>
                </div>
            </div>

        </div>
    )
}

export default Landing; 