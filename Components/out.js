// src/Login.js
import React from 'react';
import './Login.css'; // Import the CSS file for styling

const SignInBox = () => {
  return (
    <div className="login-container" style={styles.signInBox}>
      <div className="login-options">
        <button className="social-login facebook">Login with Facebook</button>
        <button className="social-login twitter">Login with Twitter</button>
        <button className="social-login google">Login with Google+</button>
      </div>
      <div className="divider">OR</div>
      <div className="manual-login">
        <input type="text" placeholder="Username or email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <div className="remember-me">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="login-button">LOGIN</button>
        <div className="login-links">
          <a href="#">Register now</a> | <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
const styles = {
  
  signInBox: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    height: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex:1,
      },
};

export default SignInBox;
