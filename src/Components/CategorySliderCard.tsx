import Image from 'next/image'
import React from 'react'
import Category from '../assets/img/category.png';

function CategorySliderCard() {
  return (
    <div 
    
    className=' mt-5 m-4  d-flex justify-content-center align-items-center flex-wrap'
     >
      <div className='CategorySliderCard' >
      <Image
             className=" product"
            src={Category}
            alt="Next.js Logo"
            width={150}
            height={100}
            priority
          />
              
      </div>
       
    </div>

  )
}

export default CategorySliderCard