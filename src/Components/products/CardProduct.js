import React from 'react'
import styles from '@/styles/products.module.css'
import Image from 'next/image'
import pandolproduct from '../../assets/img/pandolproduct.png';
import ButtonContact from './ButtonContact';
import ButtonMak from './ButtonMak';

const CardProduct = ({dis}) => {
  return (
    <div className={styles.boxcardprdoduct}> 
    <div>
    <Image
        //  className="w-20"
        src={pandolproduct}
        className={styles.cardproductImage}
        

        alt="Next.js Logo"
        width={92}
        height={112}
        priority
        />
    </div>
    <div className={styles.boxinfo}>
        <p className={styles.titlecard}>Panadol Extra XX mg</p>
        <p className={styles.txtcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo....</p>
    </div>
    <ButtonMak txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Make a request"/>
{
    dis === true ? (<div className={styles.discount}>
        <p style={{color:"#0F4392",fontSize:"10px"}}>-10 %</p>
    </div>):null
}
    

    </div>
  )
}

export default CardProduct