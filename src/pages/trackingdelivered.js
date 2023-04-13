import React from 'react'
import styles from '@/styles/Tracking.module.css'
import Header from '../Components/Ulits/Header'
import StepProgress from '../Components/Ulits/StepProgressBar'
import Group2 from '../assets/img/Group2.png';
import ButtonTrack from "../Components/tracking/ButtonTrack"
import Image from 'next/image'
import vector from '../assets/img/vector.png';

const trackingdelivered = () => {
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
        <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>

        <Header title='Order tracking'/>
        <StepProgress/>
        <div>
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
        </div>
            <div className='w-80 text-center d-flex justify-content-center align-items-center flex-column'>
            <p className={styles.title}>Your order has een delivered successfully.</p>
            <p className={styles.title}>We wish you speedy recovery.</p>

            </div>

            


                <ButtonTrack txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Write a review"/>
                <p className={styles.contact}>contact us</p>
        

     
        </div>
      
      </main>
  )
}

export default trackingdelivered