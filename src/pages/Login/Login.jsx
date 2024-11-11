import React, { useState } from 'react'
import './Login.css'
import background from '../../assets/login_background.jpg'
import logo from '../../assets/netflix-navbar-logo.svg'
import { login,signup } from '../../firebase'


const Login = () => {
  const [signState, setsignState]=useState("Sign In")
  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const user_auth=async(event)=>{
    event.preventDefault()
    signState==="Sign In"?await login(email,password):await signup(name,email,password)
  }
  
  return (
    <div className='login'>
      <img src={logo} alt="netflix-logo" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?
          <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>:<></>}
          <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Passsword' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button className='btn btn-danger' onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">{signState==="Sign In"?<p>New to Netflix?<span onClick={()=>setsignState("Sign Up")}>Sign up Now</span></p>:<p>Already have account? <span onClick={()=>setsignState("Sign In")}>Sign in Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login