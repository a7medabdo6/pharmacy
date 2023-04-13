import Image from 'next/image'
import React from 'react'
import Service from '../assets/img/Service.png';

function OurServicesCard() {
  return (
    <div 
    className='w-30   pb-4 d-flex justify-content-center align-items-center flex-column'
     >
      <div className='OurServicesCard flex-column justify-content-center align-items-center'>
      <Image
             className=" Service"
            src={Service}
            alt="Next.js Logo"
           
            
          />
                <p className='text-service text-primary'>Online doctors</p>  

      </div>

    </div>

  )
}

export default OurServicesCard