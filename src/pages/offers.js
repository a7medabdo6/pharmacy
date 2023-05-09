import React, { useEffect, useState } from 'react'
import styles from '@/styles/offers.module.css'
import Header from '../Components/Ulits/Header'
import CardOffers from '../Components/Offers/CardOffers'
import GetCart from '../Apis/Cart/GetCart'

const offers = () => {

  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
    <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>

    <Header title='Big deals'/>

    </div>
    <div className='  mt-1  d-flex justify-content-start flex-column align-items-center ' style={{width:"95%"}}>
  
          <CardOffers />
          <CardOffers />

        </div>
   
  
  </main>  )
}

export default offers