import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/verification.module.css'

import verification from '../assets/img/verification.png';
import Left from '../assets/img/Left.png';

import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [phone, setphone] = useState("us")
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className='d-flex justify-content-center align-items-center flex-row w-100 m-4'>
      <Image
            //  className="w-20"
            src={Left}
            alt="Next.js Logo"
            width={35}
            height={30}
            priority
          />
          <h1 className='text-primary w-80 m-0' style={{textAlign:"center"}}>
          Verification
          </h1>
      </div>
      <div className={styles.background}>
       
           <Image
            className={styles.welcome}
            src={verification}
            alt="Next.js Logo"
            width={100}
            height={37}
            priority
          />
      </div>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h3 className='m-3 text-center'>Please enter the code that have been sent to <span className='text-primary'>22655987411236</span>  </h3>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-column' style={{
    width:" 90%",
    borderRadius: "15px",
    marginBlock: "20px"}}>
 <form className='d-flex justify-content-center  flex-column w-100'>
  <div  className='d-flex justify-content-center  flex-row'>
  <div className="form-group m-2" style={{width:"55px"}}>
    <input type="text" className="form-control p-2 text-center"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
  </div>
  <div className="form-group m-2" style={{width:"55px"}}>
    <input type="text" className="form-control p-2 text-center"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
  </div><div className="form-group m-2" style={{width:"55px"}}>
    <input type="text" className="form-control p-2 text-center"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
  </div><div className="form-group m-2" style={{width:"55px"}}>
    <input type="text" className="form-control p-2 text-center"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
  </div>
  </div>
 
  <Link href="/Home" className='w-100'>

  <button type="submit" className="btn btn-primary mb-3 mt-3 w-100">Next</button>
  </Link>
</form>
      </div>

         <p className='m-1'>Didn’t receive the code?</p>
<p className='text-primary'>Resend code</p>
     
      </main>
    </>
  )
}
