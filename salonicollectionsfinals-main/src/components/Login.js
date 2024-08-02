import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.result || 'Login failed');
      }

      const user = await response.json();
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
      
      if (user.isAdmin) {
        window.location.href = 'http://localhost:3001'; // Redirect to the admin dashboard app
      } else {
        navigate('/'); // Redirect to home page for regular users
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
