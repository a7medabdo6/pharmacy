import React from 'react'


import icon from '../../assets/img/icon.png';
import alert from '../../assets/img/alert.png';
import left from '../../assets/img/Leftwhite.png';

import Image from 'next/image'

const Header = ({title}) => {
  return (
    <div className='w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
 style={{backgroundColor:"#0F4392",borderRadius:10,height:"117px",position:"relative"}}>
    <div className='w-100 d-flex justify-content-between align-items-center '>
      <div className='d-flex justify-content-center align-items-center ms-3' style={{border:"1px solid white",borderRadius:"5px",width:"25px",height:"25px"}}>
      <Image
        //  className="w-20"
        src={left}
        

        alt="Next.js Logo"
        width={14}
        height={16}
        priority
        />
      </div>
      <div className='w-100 d-flex justify-content-center align-items-center me-5 '>
      <h3 style={{color:"white",margin:"0px",fontWeight:"500"}}>{title} 
       </h3>

      </div>
  
        <div className='d-flex justify-content-center align-items-center '>

        <Image
        //  className="w-20"
        src={alert}
        style={{position:"absolute",right:"80px"}}

        alt="Next.js Logo"
        width={19}
        height={24}
        priority
        />
         <div className=' d-flex justify-content-center align-items-center ' style={{height:"24px",width:'24px',borderRadius:"50%",backgroundColor:"#C5CAD4",position:"absolute",right:"20px"}}>
        <Image
        //  className="w-20"
        src={icon}

        alt="Next.js Logo"
        width={14}
        height={16}
        priority
        />
        </div>
        </div>
 


    </div>


    </div>)
}

export default Header