import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix-navbar-logo.svg'
import profile from '../../assets/profile.png'
import { Button, Container } from 'react-bootstrap';
import { logout } from '../../firebase';
const Navbar = () => {
  const navRef=useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>=80?navRef.current.classList.add('bg-dark'):navRef.current.classList.remove('bg-dark')
    })
  })
  return (
    <div ref={navRef} className='navbar'>
      <div className="nav-left">
        <img src={logo} alt="netflix-logo" className='logo'/>
        <ul>
          <a><li>Home</li></a>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New</li>
          <li>popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <i className="bi bi-search icons" ></i>
        <p>Children</p>
        <i class="bi bi-bell-fill icons"></i>
        <div className="navbar-profile">
          <img src={profile} alt="netflix-logo" className='profile'/>
          <i class="bi bi-caret-down-fill icons"></i>
          <div className="dropdown">
            <p onClick={()=>logout()}>Sign-out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar