import React, { useState } from 'react';
import './LoginPage.css';
import Account from './Accounts';

const LoginPage = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let loggedin = false;

  const handleLogin = () => {
    if (username==='' || password==='') {
      alert("Please fill the input");
    }
    else {
      Account.forEach((acc, index) => {
        if (username === `${acc.Username}` && password === `${acc.Password}`) {
          onLogin();
          loggedin = true;
        }
      })
      if (loggedin === false) {
        alert("Incorrect username or password");
      }
    }}
  

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="login-button" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;