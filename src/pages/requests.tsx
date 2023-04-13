import React from 'react'
import styles from '@/styles/requests.module.css'
import ButtonRequests from '../Components/Requests/ButtonRequests'
import CardInfo from "../Components/Requests/CardInfo"
import CardOrder from "../Components/Requests/CardOrder"
import BottomNav from "../Components/Ulits/BottomNav.js"
import InputWithButton from "../Components/Requests/InputWithButton"

const requests = () => {
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
        <div className='w-80 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
     style={{backgroundColor:"white",borderRadius:10,height:"196px",position:"relative"}}>

<div className='w-100  pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
     style={{backgroundColor:"#0F4392",borderRadius:10,position:"absolute",top:0,left:0,height:"117px"}}>
     

        </div>

        <div className='w-100  d-flex justify-content-around align-items-center '
       style={{position:"absolute",bottom:0}}>
        <ButtonRequests txtColor="#0F4392" bckColor="white" BRColor="#0F4392" text="Ask For a recepit"/>
        <ButtonRequests txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Place Order"/>

      </div>

        </div>

        <div className=' flex-column  d-flex justify-content-start align-items-center ' style={{overflowY:"scroll"}}>
        <div className='w-80 ms-5 mt-5 me-1  d-flex justify-content-start align-items-center '>
          <h3>Your Info</h3>
        </div>
        <div className='w-80  mt-1  d-flex justify-content-start align-items-center '>
          <CardInfo />
        </div>

        <div className='w-80 ms-5 mt-5 me-1  d-flex justify-content-start align-items-center '>
          <h3>Your Order</h3>
        </div>

        <div className='w-80  mt-1  d-flex justify-content-start flex-column align-items-center '>
          <CardOrder />
          <CardOrder />

        </div>
        <div style={{}} className='my-5'>
        <InputWithButton/>
        </div>
        </div>
       
        <div className='position-relative w-80' style={{bottom:0,}}>
        <BottomNav />
        </div>
        
        




     


     

    
     
      </main>
  )
}

export default requests