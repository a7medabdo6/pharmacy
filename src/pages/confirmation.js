import React from 'react'
import styles from '@/styles/confirmation.module.css'
import vector from '../assets/img/vector.png';

import icon from '../assets/img/icon.png';
import alert from '../assets/img/alert.png';

import Image from 'next/image'
import ButtonConfirmation from "../Components/Requests/ButtonConfirmation"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
  borderRadius:"10px",
  padding:"7px"
};

const confirmation = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
        <div className='w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
     style={{backgroundColor:"#0F4392",borderRadius:10,height:"117px",position:"relative"}}>
        <div className=' d-flex justify-content-center align-items-center '>
            <h2 style={{color:"white",margin:"0px",fontWeight:"500"}}>confirmation</h2>
            <Image
            //  className="w-20"
            src={alert}
            style={{position:"absolute",right:"60px"}}

            alt="Next.js Logo"
            width={19}
            height={24}
            priority
            />
             <div className=' d-flex justify-content-center align-items-center ' style={{height:"24px",width:'24px',borderRadius:"50%",backgroundColor:"#C5CAD4",position:"absolute",right:"20px"}}>
            <Image
            //  className="w-20"
            src={icon}

            alt="Next.js Logo"
            width={14}
            height={16}
            priority
            />
            </div>


        </div>


        </div>
        <div  className=' d-flex justify-content-center align-items-center my-5 '>
            <h3 style={{color:"#0F4392",fontWeight:"900",fontSize:"27px" }}>Thank you</h3>
        </div>

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

        <div  className=' d-flex justify-content-center align-items-center flex-column mt-3 '>
            <h3 className='m-0'  style={{fontSize:"29px",color:"black",fontWeight:"200"}}> Your order has been placed  </h3>
            <h3 className='m-0'  style={{fontSize:"29px",color:"black",fontWeight:"200"}}> succesfully , you will receice a call to  </h3>
            <h3 className='m-0' style={{fontSize:"29px",color:"black",fontWeight:"200"}}> confirm. </h3>
            <h3  style={{fontSize:"29px",color:"black",fontWeight:"200"}}>Get Well Soon!</h3>

        </div>
        <div className='w-100  d-flex justify-content-center align-items-center mt-3'>
        <ButtonConfirmation clicking={handleOpen} txtColor="red" bckColor="#EDEDED" BRColor="red" text="Cancel order"/>
        <ButtonConfirmation txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Got it "/>

      </div>
      <div className='w-100  d-flex justify-content-center align-items-center mt-3'>
        <h4 style={{fontSize:"15px",color:"#2C6ECB",fontWeight:"bold"}}>Track Your Order</h4>

      </div>

      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center' style={{color:"#0F4392",fontWeight:"bold",fontSize:"20px"}}>
            Order Cancellation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-center' >
            
             <h3 className='m-0'>
              Are you sure you want to cancel 
              </h3> 
               <h3 className='m-0'>
              your order ?
              </h3> 
              

            
            
            <div className='w-100  d-flex justify-content-center align-items-center mt-3'>
        <ButtonConfirmation  txtColor="red" bckColor="white" BRColor="red" text="Yes Cancel "/>
        <ButtonConfirmation txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Keep it "/>

      </div>
          </Typography>
        </Box>
      </Modal>
    </div>
     
      </main>
  )
}

export default confirmation
