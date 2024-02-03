import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-feilds">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Log In</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id=""/>
          <p>by creating an account, I agree to the Privacy Policy andTerms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup