import Image from 'next/image'
import React from 'react'
import Category from '../assets/img/category.png';

function CategorySliderCard() {
  return (
    <div 
    className='w-30 mt-2 m-2 pb-4 d-flex justify-content-center align-items-center'
     >
      <div className='CategorySliderCard'>
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