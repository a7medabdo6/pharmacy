import React from "react";
import styles from "@/styles/contact.module.css";
import Header from "../Components/Ulits/Header";
import StepProgress from "../Components/Ulits/StepProgressBar";
import Frame from "../assets/img/Frame.png";
import viber from "../assets/img/viber.png";
import messenger from "../assets/img/messenger.png";
import whatsapp from "../assets/img/whatsapp.png";
import telegram from "../assets/img/telegram.png";
import location from "../assets/img/location.png";
import phone from "../assets/img/phone.png";
import BottomNav from "../Components/Ulits/BottomNav";

import PhoneIcon from "@mui/icons-material/Phone";
import ButtonTrack from "../Components/tracking/ButtonTrack";
import Image from "next/image";
import ButtonRequestOrder from "../Components/Ulits/ButtonRequestOrder";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import ModalContent from "../Components/Ulits/ModalContent";
import NavBar from "../Components/desk/NavBar";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <div className="w-100 d-flex  justify-content-center align-items-center  ">
                  <h4 style={{ color: "#0F4392" }}>Request a call</h4>
                </div>        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ModalContent setModalShow={setModalShow} />

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const contactus = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <main
      style={{
        backgroundColor: "white",
        width: "100%",
        margin: "auto",
        height: "100%",
      }}
      className="d-flex  align-items-center flex-column"
    >
      <div className="d-block d-sm-none w-100">
        <Header title="Contact Us" />
      </div>

      <div className="d-none d-sm-block w-100 ">
        <NavBar />
      </div>
      <div
        style={{ backgroundColor: "#EDEDED", width: "95%", borderRadius: "15px" }}
        className=" mt-2  d-flex justify-content-center align-items-center flex-column"
      >
        <p className={styles.title}> We are here for you</p>

        <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
          <Image
            //  className="w-20"
            src={Frame}
            alt="Next.js Logo"
            width="100%"
            height="100%"
            priority
            style={{ maxWidth: "90%" }}
          />
        </div>


<div   className="d-flex w-100 justify-content-center align-items-center mt-3">

<div  style={{backgroundColor:"white",width:"40%"}} className="d-flex w-100 justify-content-center align-items-center mt-3 flex-column">
        <p className={styles.textsub} style={{ marginTop: 15 }}>
          {" "}
          Social media contacts
        </p>
        <p className={styles.textsub1}>
          {" "}
          If you need a help from our pharmacists or want to order a specific
          prescription contact us via{" "}
        </p>
        <div className="w-100 text-center d-flex justify-content-center align-items-center ">
          <Image
            //  className="w-20"
            src={telegram}
            style={{ margin: "10px" }}
            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
          />
          <Image
            //  className="w-20"
            src={whatsapp}
            style={{ margin: "10px" }}
            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
          />
          <Image
            //  className="w-20"
            src={messenger}
            style={{ margin: "10px" }}
            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
          />
          <Image
            //  className="w-20"
            src={viber}
            style={{ margin: "10px" }}
            alt="Next.js Logo"
            width="32px"
            height="32px"
            priority
          />
        </div>
        </div>
       
        {/* <div
          className="my-2"
          style={{ height: "1px", backgroundColor: "grey", width: "90%" }}
        ></div> */}
<div style={{backgroundColor:"white",width:"40%"}}  className="d-flex w-100 justify-content-center align-items-center mt-3 flex-column">

<p className={styles.textsub}> Reach us via</p>
        <div className="w-90 d-flex text-center justify-content-around align-items-center  flex-column">
          <div className="w-90 d-flex text-center justify-content-center align-items-center mx-5 ">
            <Row className=" d-flex text-center justify-content-center align-items-center ">
              <Col
                className="col-12 col-sm-6 col-md-6"
                style={{ backgroundColor: "white" }}
              >
                <Row>
                  <Col className="col-12 d-flex text-center justify-content-between align-items-cente">
                    <div className=" d-flex text-center justify-content-center align-items-center ">
                      <Image
                        //  className="w-20"
                        src={phone}
                        alt="Next.js Logo"
                        width="15px"
                        height="20px"
                        priority
                      />{" "}
                      <p className={styles.number}>(+20)1050777117</p>
                    </div>
                    <button
                      className="btn btn-outline-primary"
                      style={{ color: "#0F4392", border: "1px solid #0F4392" }}
                    >
                      <Image
                        //  className="w-20"
                        src={phone}
                        alt="Next.js Logo"
                        width="15px"
                        height="20px"
                        priority
                        style={{ marginInline: 8 }}
                      />{" "}
                      Call Now
                    </button>
                  </Col>
                  <Col className="col-12">
                    <div className=" d-flex text-center justify-content-center align-items-center">
                      <Image
                        //  className="w-20"
                        src={location}
                        alt="Next.js Logo"
                        width="15px"
                        height="20px"
                        priority
                      />{" "}
                      <p className={styles.number}>
                        Tal avenu- white hills hotel, Sharm Elsheikh, Egypt
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className=" d-flex d-none text-center justify-content-center align-items-center ">
              <Col className="col-6">
                <div className=" d-flex text-center justify-content-center align-items-center ">
                  <Image
                    //  className="w-20"
                    src={phone}
                    alt="Next.js Logo"
                    width="15px"
                    height="20px"
                    priority
                  />{" "}
                  <p className={styles.number}>(+20)1050777117</p>
                </div>
              </Col>
              <Col className="col-6">
                <button
                  className="btn btn-outline-primary"
                  style={{ color: "#0F4392", border: "1px solid #0F4392" }}
                >
                  <Image
                    //  className="w-20"
                    src={phone}
                    alt="Next.js Logo"
                    width="15px"
                    height="20px"
                    priority
                    style={{ marginInline: 8 }}
                  />{" "}
                  Call Now
                </button>
                <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
              </Col>
              <Col className="col-12 mt-3">
                <Row>
                  <Col className="col-1">
                    <Image
                      //  className="w-20"
                      src={location}
                      alt="Next.js Logo"
                      width="15px"
                      height="20px"
                      priority
                    />{" "}
                  </Col>
                  <Col>
                    <p className={styles.number}>
                      Tal avenu- white hills hotel, Sharm Elsheikh, Egypt
                    </p>
                    
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="w-80 d-flex  justify-content-start align-items-center  ">
            <Sheet
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              snapPoints={snapPoints}
            >
              <Sheet.Container className={styles.bottomsheet}>
                <Sheet.Header />
                <div className="w-100 d-flex  justify-content-center align-items-center  ">
                  <h4 style={{ color: "#0F4392" }}>Request a call</h4>
                </div>

                <Sheet.Content>
                  <ModalContent setOpen={setOpen} />
                </Sheet.Content>
              </Sheet.Container>

              <Sheet.Backdrop />
            </Sheet>
          </div>
          <div style={{ width: "50%", cursor:"pointer" }} onClick={() => setModalShow(true)}>
            <ButtonRequestOrder
              txtColor="white"
              bckColor="#0F4392"
              BRColor="#0F4392"
              text="Request a call"
            />
          </div>
        </div>

</div>

</div>





     

      </div>

      <div
        className="position-absolute "
        style={{ bottom: 0, width: "95%", borderRadius: "15px" }}
      >
        {/* <BottomNav /> */}
      </div>
    </main>
  );
};

export default contactus;
