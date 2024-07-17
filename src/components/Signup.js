import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Signup.css';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    signup(email, password, username);
  };

  return (
    <div className="signup-container">
      <h2>Create your new account</h2>
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
      <input 
        type="text" 
        placeholder="User Name" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={handleSignup}>Register</button>
      <p>Already have an account? <a href="/login">Sign in</a></p>
    </div>
  );
};

export default Signup;
