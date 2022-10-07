import React from 'react'
import img2 from '../../Images/img2.png'
import email from '../../Images/email.png'
import './top.css'
function Top() {
  return (
     <div className="a">
      <div className="a-left">
       
          <img
            src={img2}
            alt=""
            className="a-img"
          />
      </div>
       <div className="a-right">
       <div className='Travel-the-world-m'>
        <h4>Travel the world & meet new friends.</h4>
       </div>
       <div className='Create-custom-landin'>
        <p>create costuml pages with ogema that convert more visitors than any rebsite, with lots of unique blocks, u can built pages without codeing</p>
       </div>
       <div className='Rectangle'>
        <img className='email' src={email} alt =''/>
       <p className='Email-address'>Email address</p>
       <button className='BG'>I want to join</button>
       </div>
      </div> 
    </div>
  )
}

export default Top