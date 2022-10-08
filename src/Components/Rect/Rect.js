import React from 'react'
import './rect.css'
import path from '../../Images/path.png'
function Rect() {
  return (
    <div className='Rectangle'>
     <div className='b-left'>
      <div className='imgbox'>
     <img className='img1' src={path} alt='/' />
     <img className='img2' src={path} alt='/' />
     <img className='img3' src={path} alt='/' />
     <img className='img4' src={path} alt='/' />
     </div>
     <p className='OMG-I-cannot-belie'>“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Everyone should try it!”</p>
     <p className='Jonathan-Taylor'>Jonathan Taylor</p>
     </div>

     <div className='b-right'>
      <div className='imgbox'>
     <img className='img1' src={path} alt='/' />
     <img className='img2' src={path} alt='/' />
     <img className='img3' src={path} alt='/' />
     <img className='img4' src={path} alt='/' />
     </div>
     <p className='You-made-it-so-simp'>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
     <p className='Lizzie-Rodgers'>Lizzie Rodgers</p>
     </div>
    </div>
  )
}

export default Rect