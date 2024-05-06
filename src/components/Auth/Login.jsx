import React, { useState } from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
const navigateTo=useNavigate();
const loginfxn=()=>{
    toast.success("Login Successfully!")
navigateTo('/');
}

const signupfxn=()=>{
navigateTo('/');
toast.success("Register Successfully!")
}

  return (
    <div className='main-container'>
    <div className={`container ${isSignUp ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" onClick={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" onClick={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onClick={(e) => setPassword(e.target.value)} />
          <button onClick={signupfxn}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email"  onClick={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onClick={(e)=>setPassword(e.target.value)} />
          <a href="#">Forget Your Password?</a>
          <button onClick={loginfxn}>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="bg-blue-600" onClick={toggleForm}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="bg-blue-600" onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
