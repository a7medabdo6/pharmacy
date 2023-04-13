import React from 'react'
import styles from '@/styles/contact.module.css'
import Header from '../Components/Ulits/Header'
import StepProgress from '../Components/Ulits/StepProgressBar'
import Frame from '../assets/img/Frame.png';
import viber from '../assets/img/viber.png';
import messenger from '../assets/img/messenger.png';
import whatsapp from '../assets/img/whatsapp.png';
import telegram from '../assets/img/telegram.png';
import PhoneIcon from '@mui/icons-material/Phone';
import ButtonTrack from "../Components/tracking/ButtonTrack"
import Image from 'next/image'
import Button from '../Components/Ulits/Button';
const contactus = () => {
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
    <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>

    <Header title='Contact us'/>

    </div>
    <div style={{backgroundColor:"white",width:"95%"}} className=' mt-2  d-flex justify-content-center align-items-center flex-column'>
        <p className={styles.title}> We are here for you</p>

        <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>
        <Image
            //  className="w-20"
            src={Frame}
           

            alt="Next.js Logo"
            width="100%"
            height="100%"
            priority
            />
            </div>
            <p className={styles.textsub}> Social media contacts</p>
            <p className={styles.textsub1}> If you need a help from our pharmacists or want to order a specific prescription contact us via </p>
            <div className='w-100 text-center d-flex justify-content-center align-items-center '>
            <Image
            //  className="w-20"
            src={telegram}
           
            style={{margin:"10px"}}

            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
            />
            <Image
            //  className="w-20"
            src={whatsapp}
            style={{margin:"10px"}}

            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
            />
            <Image
            //  className="w-20"
            src={messenger}
            style={{margin:"10px"}}

            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
            />
            <Image
            //  className="w-20"
            src={viber}
            style={{margin:"10px"}}

            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
            />
            </div>
            <p className={styles.textsub}> Reach us via</p>
            <div className=' d-flex text-center justify-content-between align-items-center '>  
            
            <div className=' d-flex text-center justify-content-between align-items-center '>  
            
                          <div className=' d-flex text-center justify-content-center align-items-center '>
                <PhoneIcon />
                <p className={styles.number}>(+20)1050777117</p>
                    </div>
                    <div className=' d-flex justify-content-center align-items-center '>
                    <Button txtColor="#0F4392" bckColor="white" BRColor="#0F4392" text="Place Order"/>

                    </div>
                </div>
            </div>


        </div>
  
  </main>
  )
}

export default contactus