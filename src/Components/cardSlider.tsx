import Image from 'next/image'
import React from 'react'
import slider from '../assets/img/slider.png';

function CardSlider() {
  return (
    <div 
    className='w-80 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center'
     style={{backgroundColor:"#0F4392",borderRadius:10}}>
       <Image
             className="w-20"
            src={slider}
            alt="Next.js Logo"
            width={150}
            height={100}
            priority
          />
              <div className='d-flex justify-content-start align-items-start flex-column' style={{backgroundColor:"#0F4392"}}>

          <h3 className='text-white'>Lorem ipsum dolor sit amet.</h3>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur labore officiis id, eaque accusamus neque? Dolores natus ipsa voluptate!</p>
    </div>
    </div>

  )
}

export default CardSlider