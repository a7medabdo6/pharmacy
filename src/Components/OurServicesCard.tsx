import Image from 'next/image'
import React from 'react'
import Service from '../assets/img/Service.png';

function OurServicesCard() {
  return (
    <div 
    className='w-100   pb-4 d-flex justify-content-center align-items-center flex-column'
     >
      <div className='OurServicesCard  justify-content-center align-items-start '>
      <Image
             className=" Service"
            src={Service}
            width={152}
            height={104}
            alt="Next.js Logo"
           
            
          />
          <div className=' d-flex flex-column justify-content-start align-items-start ms-3 '>
          <p className='text-service text-primary'>Online doctors</p>  
                <p className='info-card'>You can consult with one of our online doctors in all specialties.</p>
          </div>
              

      </div>

    </div>

  )
}

export default OurServicesCard