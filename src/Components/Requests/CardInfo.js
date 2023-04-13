import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
const CardInfo = () => {
  return (
    <div className='w-100 d-flex -justify-content-start align-items-center' style={{backgroundColor:"white",borderRadius:"10px"}}>
      <div className='w-100 m-3'>
        <div className='d-flex justify-content-between flex-row align-items-center mb-3'>
        <div className='d-flex justify-content-start flex-row align-items-center '>
          <p className='mb-0'  style={{color:"black",fontWeight:"bold"}}>Name : </p>
          <p style={{color:"red"}}> Shrok mohammed</p>
          </div>
          

          <div>
          <FontAwesomeIcon
    icon={faPen}
    style={{ fontSize: 15, color: "#0F4392" }}
/>
          </div>

        </div>
        <div className='d-flex justify-content-start flex-row align-items-center mb-3'>
        <div className='d-flex justify-content-center flex-row align-items-center '>
          <p className='mb-0' style={{color:"black",fontWeight:"bold"}}>Hotel:</p>
          <p style={{color:"red"}}>Marriott</p>
          </div>

          <div className='d-flex justify-content-center flex-row align-items-center ms-5'>
          <p className='mb-0' style={{color:"black",fontWeight:"bold"}}>Room Number:</p>
          <p style={{color:"red"}}>A107</p>
          </div>
         

        </div>

        <div className='d-flex justify-content-start flex-row align-items-center mb-3'>
          <p className='mb-0' style={{color:"black",fontWeight:"bold"}}>Phone Number:</p>
          <p style={{color:"red"}}>+(02) 01001186472 </p>
 
        </div>
      </div>

    </div>
  )
}

export default CardInfo