import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <div className="login-container">
      <h2>Login to your account</h2>
      <input 
        type="email" 
        placeholder="Enter Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Sign In</button>
      <button onClick={() => loginWithGoogle()}>Sign in with Google</button>
      <p>Don't have an account? <a href="/signup">Register</a></p>
    </div>
  );
};

export default Login;
