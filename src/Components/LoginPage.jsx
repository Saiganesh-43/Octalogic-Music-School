import React, { useState, useEffect } from 'react';
import '../Styles/LoginPage.css';
import '@fontsource/nunito-sans';
import Dashboard from '../Components/Dasdboard';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    if (storedLoggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'Admin' && password === 'Octalogic_43') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (isLoggedIn) {
    return <Dashboard handleLogout={handleLogout} />;
  }

  return (
    <div className='LoginPage'>
      <div className='Instruction'>
        <h1>Administrator</h1>
        <p>
          As the administrator of a music school, I will need to be able to create courses, view enrollments, and review analytics for the entire school. I should also be able to see a cumulative view of all students in the school regardless of the course. Only I should be able to access this data through a username and password.
        </p>
      </div>
      <div className='Login-Form'>
        <h1>Login To Dashboard</h1>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Login</button>
        {loginError && <p className="error-message">{loginError}</p>}
      </div>
      <div className='Author'>
        <p>Author : Saiganesh</p>
        <p>Last Update : 20-04-2024</p>
      </div>
    </div>
  );
};

export default LoginPage;
