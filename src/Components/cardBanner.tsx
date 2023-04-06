import Image from 'next/image'
import React from 'react'
import banner from '../assets/img/banner.png';

function CardBanner() {
  return (
    <div 
    className='w-80 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-around align-items-center'
     style={{backgroundColor:"white",borderRadius:10}}>
       
              <div className='d-flex ml-2 justify-content-start align-items-start flex-column' style={{backgroundColor:"white"}}>

          <p className='text-primary'>Lorem ipsum dolor sit, !</p>
          <p className='text-dark'>Lorem ipsum dolor sit amet.</p>

          <button type="submit" className="btn btn-primary mb-3 mt-3">Get The Offer</button>

              </div>
    <Image
             className="w-30"
            src={banner}
            alt="Next.js Logo"
            width={150}
            height={100}
            priority
          />
    </div>

  )
}

export default CardBanner