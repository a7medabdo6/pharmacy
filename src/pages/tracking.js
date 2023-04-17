import React, { useState } from 'react'
import styles from '@/styles/Tracking.module.css'
import Header from '../Components/Ulits/Header'
import StepProgress from '../Components/Ulits/StepProgressBar'
import Group from '../assets/img/Group.png';
import ButtonTrack from "../Components/tracking/ButtonTrack"
import Image from 'next/image'
import Group2 from '../assets/img/Group2.png';
import vector from '../assets/img/vector.png';

const tracking = () => {
  const [value,setvalue] =useState(70)
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
        <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>

        <Header title='Order tracking'/>
        <StepProgress value={value}/>
        <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>
          {
            value === 35 ? (
              <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>
               <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>
              <Image
              //  className="w-20"
              src={Group}
              
              style={{marginBottom:"30px"}}
  
              alt="Next.js Logo"
              width="100%"
              height="100%"
              priority
              />

               </div>
               <div className='w-80 text-center d-flex justify-content-center align-items-center flex-column'>
            <p className={styles.title}>We are preparing your order now.
                Get well soon!</p>
                
            </div>

            


                <ButtonTrack
                txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Back to our products"/>
               </div>
               ):null
          }
          {
            value === 70 ? ( <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>
               <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>
        <Image
            //  className="w-20"
            src={Group2}
            className='me-5'
            style={{marginBottom:"30px",marginLeft:"25px"}}

            alt="Next.js Logo"
            width="100%"
            height="100%"
            priority
            />
            </div>
            <div className='w-80 text-center d-flex justify-content-center align-items-center flex-column'>
            <p className={styles.title}>Your order is on its way to you now.
Get ready!</p>
                
            </div>

            


                <ButtonTrack
                txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Back to our products"/>
        
            </div>) :null
          }
            {
            value === 100 ? ( 
              <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'> 
                <div className={styles.Bigcircle} >
              <div className={styles.circle} style={{backgroundColor:"#0f439242"}}>
                  <div  className=' d-flex justify-content-center align-items-center mt-3 ' style={{position:"absolute"}}>
                  <Image
              //  className="w-20"
              src={vector}
              style={{position:"absolute",bottom:"-24px",left:"-66px"}}
              alt="Next.js Logo"
              width={165}
              height={130}
              priority
             
            />
                  </div>
             
              </div>
  
              </div>
              <div className='w-80 text-center d-flex justify-content-center align-items-center flex-column'>
            <p className={styles.title}>Your order has een delivered successfully.</p>
            <p className={styles.title}>We wish you speedy recovery.</p>

            </div>

            


                <ButtonTrack txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Write a review"/>
                <h4 className={styles.contact} style={{color:"#2C6ECB",marginTop:0}}>contact us</h4>
        

              </div>) :null
          }
            </div>
            {/* <div className='w-80 text-center d-flex justify-content-center align-items-center flex-column'>
            <p className={styles.title}>We are preparing your order now.
                Get well soon!</p>
                
            </div>

            


                <ButtonTrack
                txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Back to our products"/>
         */}

     
        </div>
      
      </main>
  )
}

export default tracking