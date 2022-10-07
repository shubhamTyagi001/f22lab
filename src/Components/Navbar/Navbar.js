import React from 'react'
import './navbar.css'
import omega from '../../Images/omega.png'
function Navbar() {
  return (
     <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
            <img src={omega} alt='/' />
        </div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
             <a href="#">Demos</a>
            </li>
            <li>
             <a  href="#">Pages</a>
            </li>
            <li>
             <a  href="#">Support</a>
            </li>
          </ul>
        </div>
        
        <button className="button n-button">Get this app</button>
      </div>
    </div>
  )
}

export default Navbar