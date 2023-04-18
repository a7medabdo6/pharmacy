import React from 'react'
import styles from '@/styles/Testimonials.module.css'
import Header from '../Components/Ulits/Header'
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image'
import avatar from '../assets/img/avatar.png';
import ButtomReview from "../Components/Requests/ButtomReview"
import ButtonWriteReview from '../Components/Testimonials/ButtonWriteReview';
const Testimonials = () => {
  return (
<main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
    <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>

    <Header title='Testimonials'/>

    </div>
    <cardTestimonials />

    <div className='  d-flex justify-content-center align-items-center flex-column' style={{width:"90%"}}>
    <div className={styles.boxtest}>
        <div className='ms-3'>
        <Image
            src={avatar}
            alt="Next.js Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className='ms-2'>
            <p className={styles.username}>user name</p>
            <div>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}} />

            </div>
            <p>“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”</p>
        </div>
    </div>

    <div className={styles.boxtest}>
        <div className='ms-3'>
        <Image
            src={avatar}
            alt="Next.js Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className='ms-2'>
            <p className={styles.username}>user name</p>
            <div>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}} />

            </div>
            <p>“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”</p>
        </div>
    </div>


    <div className={styles.boxtest}>
        <div className='ms-3'>
        <Image
            src={avatar}
            alt="Next.js Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className='ms-2'>
            <p className={styles.username}>user name</p>
            <div>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}} />

            </div>
            <p>“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”</p>
        </div>
    </div>

    <div className={styles.boxtest}>
        <div className='ms-3'>
        <Image
            src={avatar}
            alt="Next.js Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className='ms-2'>
            <p className={styles.username}>user name</p>
            <div>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}} />

            </div>
            <p>“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”</p>
        </div>
    </div>

    <div className={styles.boxtest}>
        <div className='ms-3'>
        <Image
            src={avatar}
            alt="Next.js Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className='ms-2'>
            <p className={styles.username}>user name</p>
            <div>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}}/>
                <StarIcon style={{color:'#E67136'}} />
                <StarIcon style={{color:'#E67136'}} />

            </div>
            <p>“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”</p>
        </div>
    </div>
    </div>

    <div className='d-flex justify-content-center align-items-center' style={{width:"100%"}}>
    <ButtonWriteReview txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Write a review"/>

    </div>
    

     
        
  
  </main>  )
}

export default Testimonials