import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <i class="bi bi-youtube"></i>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-twitter"></i>
      <i class="bi bi-facebook"></i>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Contact</li>
      </ul>
      <p className='copyright-text'>@1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer