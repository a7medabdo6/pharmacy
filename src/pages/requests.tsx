import React from 'react'
import styles from '@/styles/requests.module.css'
import ButtonRequests from '../Components/Requests/ButtonRequests'
import CardInfo from "../Components/Requests/CardInfo"
import CardOrder from "../Components/Requests/CardOrder"
import BottomNav from "../Components/Ulits/BottomNav.js"
import InputWithButton from "../Components/Requests/InputWithButton"
import Header from "../Components/Ulits/Header"
const requests = () => {
  const circleStyle = {
    backgroundColor: '#0F4392',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '16px',
    
  };
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
        <div className='w-100  pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
     style={{backgroundColor:"white",borderRadius:10,height:"300px",position:"relative"}}>
      <div className='w-100 d-flex justify-content-center align-items-center ' style={{position:"absolute",top:0}}>
      <Header title="requests" />

      </div>
{/* <div className='w-100  pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
     style={{backgroundColor:"#0F4392",borderRadius:10,position:"absolute",top:0,left:0,height:"117px"}}>
     

        </div> */}

        <div className='  d-flex justify-content-start align-items-center flex-column  '
       style={{position:"absolute",bottom:0,height:"166px",marginLeft:"5px",width:"95%"}}>
        <div className='w-100  d-flex justify-content-start align-items-center  ' style={{marginBottom:"20px"}}>
        <div style={circleStyle}>
      <span>4</span>
    </div>
          <p style={{color:"#0F4392",fontFamily:"400",fontSize:"16px",lineHeight:"24px",marginLeft:"10px"}}>Products have been selected</p>
        </div>

        <div className='w-100  d-flex justify-content-start align-items-center '>
        <ButtonRequests txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Place Order"/>

        </div>
        <div className='w-100  d-flex justify-content-start align-items-center '>
        <p style={{textAlign:"center",color:"#DD1717"}}>Note that: your order will not be confirmed before you receive a call from us to let you know your order price to confirm.</p>

        </div>

      </div>

        </div>

        <div className=' flex-column  d-flex justify-content-start align-items-center ' style={{overflowY:"scroll"}}>
        <div className=' ms-5 mt-5 me-1  d-flex justify-content-start align-items-center ' style={{width:"90%"}}>
          <h3>Your Info</h3>
        </div>
        <div className='  mt-1  d-flex justify-content-start align-items-center ' style={{width:"90%"}}>
          <CardInfo />
        </div>

        <div className=' ms-5 mt-5 me-1  d-flex justify-content-start align-items-center ' style={{width:"90%"}}>
          <h3>Your Order</h3>
        </div>

        <div className='  mt-1  d-flex justify-content-start flex-column align-items-center ' style={{width:"90%"}}>
          <CardOrder />
          <CardOrder />

        </div>
        <div style={{width:"90%"}} className='my-5'>
        <InputWithButton/>
        </div>
        </div>
       
        <div className='position-relative ' style={{bottom:0,width:"90%",    borderRadius: '15px'
}}>
        <BottomNav />
        </div>
        
        




     


     

    
     
      </main>
  )
}

export default requests