import React from 'react'
import './trip.css'
import img1 from '../../Images/img1.jpg'
import one from '../../Images/one.png'
import two from '../../Images/two.png'
function Trip() {
  return (
    <div className='b'>
        <div className='c-left'>
            <h4 className='Making-trip-is-fun' >Making trip is fun. Travel with friends.</h4>
            <p className='Create-custom-landin' >Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
          <div className='Oval'>
            <img className='one' src={one} alt ='/'/>
          </div>
             <p className='Find-your-trip-partn'>Find your trip partner</p>
             <p className='With-lots-of-unique '>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>

          <div className='Oval'>
            <img className='one' src={two} alt ='/'/>
          </div>
             <p className='Find-your-trip-partn'>Plan trip with easy steps</p>
             <p className='With-lots-of-unique '>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>

        </div>
        
        
         <div className='c-right'>
        <img className='Img1' src={img1} alt ='/'/>
        </div>

    </div>
  )
}

export default Trip