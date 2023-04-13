import React from 'react'
import styles from '@/styles/Tracking.module.css'
import Header from '../Components/Ulits/Header'
import StepProgress from '../Components/Ulits/StepProgressBar'
import Group from '../assets/img/Group.png';
import ButtonTrack from "../Components/tracking/ButtonTrack"
import Image from 'next/image'
const tracking = () => {
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
        <div className='w-80 text-center d-flex justify-content-center align-items-center flex-column'>

        <Header title='Order tracking'/>
        <StepProgress/>
        <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>
        <Image
            //  className="w-20"
            src={Group}
            className='me-5'
            style={{marginBottom:"30px",marginLeft:"25px"}}

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
      
      </main>
  )
}

export default tracking