import React, { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isCorrect, setIsCorrect] = useState(false)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


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

    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    );
}

export default Login;