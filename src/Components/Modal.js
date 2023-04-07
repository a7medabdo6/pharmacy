import React from 'react'
import { Button, Header,  Modal } from 'semantic-ui-react'
import Thanks from '../assets/img/thanks.png';
import Image from 'next/image'

function ModalExampleModal({open,setOpen}) {

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      style={{height: "70%",
        top: "15%",
        backgroundColor:"#8080808f"
    }}
    >
      <Modal.Content image className='flex-column' >
        {/* <Image size='medium' src={Thanks} wrapped /> */}
        <Image
            src={Thanks}
            alt="Next.js Logo"
            // width={80}
            // height={37}
            className='w-auto h-auto'
            priority
          />
        <Modal.Description className='  d-flex justify-content-center align-items-center flex-column'>
          <Header className='text-center'>Your review has been submitted successfully</Header>
          <button onClick={()=>setOpen(false)} type="submit" className="btn btn-primary mb-3 mt-3 w-100">Go To Home Page</button>

        </Modal.Description>
      </Modal.Content>
      
    </Modal>
  )
}

export default ModalExampleModal