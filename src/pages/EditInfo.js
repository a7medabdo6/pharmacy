import React from 'react'
import styles from '@/styles/confirmation.module.css'
import vector from '../assets/img/vector.png';

import icon from '../assets/img/icon.png';
import alert from '../assets/img/alert.png';

import Image from 'next/image'
import ButtonCheckOurPrpducts from "../Components/Requests/ButtonCheckOurPrpducts"
import ButtonEditInfo from "../Components/EditInfo/buttonEditInfo"


import Head from 'next/head'
import { Inter } from 'next/font/google'
import left from '../assets/img/Leftwhite.png';
import welcome from '../assets/img/welcome.png';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'
const EditInfo = () => {
    const [phone, setphone] = useState("us")
    function handleOnChange(value) {
  setphone(value)
    }
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
    <div className='w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
 style={{backgroundColor:"#0F4392",borderRadius:10,height:"117px",position:"relative"}}>
    <div className='w-100 d-flex justify-content-between align-items-center '>
      <div className='d-flex justify-content-center align-items-center ms-2' style={{border:"1px solid white",borderRadius:"5px",width:"25px",height:"25px"}}>
      <Image
        //  className="w-20"
        src={left}
        

        alt="Next.js Logo"
        width={14}
        height={16}
        priority
        />
      </div>
      <div className='w-100 d-flex justify-content-center align-items-center '>
      <h2 style={{color:"white",margin:"0px",fontWeight:"500"}}>Edit info </h2>

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


    </div>

    <div className='d-flex justify-content-center align-items-center flex-column my-2' style={{
        backgroundColor:"rgba(15, 67, 146, 0.07)",
    width:" 93%",
    borderRadius: "15px",
    marginBlock: "20px"}}>
 <h2 style={{color:"#0F4392"}} className='m-2'>Sign up</h2>
 <form className='d-flex justify-content-center  flex-column ' style={{width:"90%"}}>
  <div className="form-group m-2">
    <label htmlFor="exampleInputEmail1">Your Name*</label>
    <input type="text" className="form-control "  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write here"/>
  </div>
  <div className="form-group m-2">
    <label htmlFor="exampleInputPassword1">Phone Number* </label>
    <ReactPhoneInput defaultCountry={'us'} value={phone} onChange={handleOnChange} className="w-100"/>
  </div>
  <div className="form-group m-2">
    <label htmlFor="exampleInputPassword1">Select Hotel Name </label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Select here"/>
  </div>
  <div className="form-group m-2">
    <label htmlFor="exampleInputEmail1">Room Number*</label>
    <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write here"/>
  </div>
  <div className='w-100 d-flex justify-content-center align-items-center  mt-5'>
  <ButtonEditInfo txtColor="#0F4392" bckColor="white" BRColor="#0F4392" text="Discard"/>
  <ButtonEditInfo txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Save Changes  "/>

  </div>
</form>
      </div>
 

    

    
  

 
  </main>
  )
}

export default EditInfo
