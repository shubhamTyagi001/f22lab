import React from 'react'
import img2 from '../../Images/img2.png'
import email from '../../Images/email.png'
import './top.css'
function Top() {
  return (
    
     <div className="a">
      <div className="a-left">
          <img src={img2}
            alt="/"
            className="a-img"
          />
      </div>
      
       <div className="a-right">
        <h4 className='Travel-the-world-m'>Travel the world & meet new friends.</h4>
        <p className='Create'>create costuml pages with ogema that convert more visitors than any rebsite, with lots of unique blocks, u can built pages without codeing</p>
       <div className='Rectang'>
        <img className='email' src={email} alt =''/>
       <p className='Email-address'>Email address</p>
       <button className='BG'>I want to join</button>
       </div>
      </div>  
    </div>
    
  )
}

export default Top