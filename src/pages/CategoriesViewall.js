import React from 'react'
import styles from '@/styles/contact.module.css'
import Header from '../Components/Ulits/Header'
import CategorySliderCard from "../Components/CategorySliderCard"

import { useState } from 'react';
import ButtonContact from '../Components/products/ButtonContact';

const CategoriesViewall = () => {
    const [isOpen, setOpen] = useState(false);
    const snapPoints = [ 400, 600]; // Define the height values that the modal can snap to


  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
    <div className='w-100 text-center d-flex justify-content-center align-items-center flex-column'>

    <Header title='Categories'/>

    </div>

    <div  className={styles.boxwhite}> 
      <p className={styles.txtExplore}>Explore our products or </p>
      <ButtonContact txtColor="#0F4392" bckColor="white" BRColor="#0F4392" text="Contact a pharmacist"/>

    </div>

    <div  className=' mt-3 d-flex justify-content-between align-items-center flex-wrap  '
 style={{width:"95%"}}>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>
<CategorySliderCard/>

</div>

  
  </main>
  )
}


export default CategoriesViewall