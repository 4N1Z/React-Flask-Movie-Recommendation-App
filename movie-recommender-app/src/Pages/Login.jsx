import React, { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Components/styles/Login.css'

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSignUp, setShowSignUp] = useState(true);
    // const [isCorrect, setIsCorrect] = useState(false)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUpToggle = () => {
        setShowSignUp(!showSignUp);
    };

    const handleSignUp = () => {

        setIsLoggedIn(true);
        // alert('Success');
        navigate('/Home');


    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ITS ON");

        // Perform login validation here
        // For simplicity, let's assume username: "admin" and password: "password" are valid
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
            // alert('Success');
            navigate('/Home'); // Redirect to the home page
        } else {
            alert('Invalid credentials: Retry');
            console.log('Invalid credentials'); // Display an error message or perform appropriate action
        }
    };

    if (showSignUp) {
        return (
            <div className='loginPage'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} >
                    <div className="formContainer">
                        <div className='form login'>
                            <label htmlFor="username"></label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder='Username'
                            />
                        </div>
                        <div className='form login'>
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder='Password'
                            />
                        </div>
                    </div>
                    <div className="btnsBar">
                        <button type="button" onClick={handleSubmit}>
                            Login
                        </button>
                        <button type="button" onClick={handleSignUpToggle}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
    return (
        <div className='loginPage'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} >
                <div className="formContainer">


                    <div className='form login'>
                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            placeholder='Create a User'
                        // onChange={handleUsernameChange}
                        />
                    </div>
                    <div className='form login'>
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder='Enter Password'
                        // onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <div className="btnsBar">
                    <button type="button" onClick={handleSignUp}>
                        Create Your Account
                    </button>
                    <button type="button" onClick={handleSignUpToggle}>
                        Back to login.
                    </button>
                </div>
            </form>
        </div>


    );
}

export default Login;