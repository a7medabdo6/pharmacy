import Image from 'next/image'
import React from 'react'
import slider from '../assets/img/slider.png';

function CardSlider() {
  return (
    <div 
    className='w-80 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center'
     style={{backgroundColor:"#0F4392",borderRadius:10}}>
       <Image
            //  className="w-20"
            src={slider}
            alt="Next.js Logo"
            width={150}
            height={100}
            priority
          />
              <div className='d-flex m-2 justify-content-start align-items-start flex-column' style={{backgroundColor:"#0F4392"}}>

          <h3 className='text-white'>How it works</h3>
          <p className='text-white'>Step 1
Select the product or contact us Lorem ipsum dolor sit amet.</p>
    </div>
    </div>

  )
}

export default CardSlider