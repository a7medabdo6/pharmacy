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
import Footer from "../Components/Footer";

import PhoneIcon from "@mui/icons-material/Phone";
import ButtonTrack from "../Components/tracking/ButtonTrack";
import Image from "next/image";
import Button from "../Components/Ulits/Button";
import ButtonRequestOrder from "../Components/Ulits/ButtonRequestOrder";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import ModalContent from "../Components/Ulits/ModalContent";
import NavBar from "../Components/desk/NavBar";
import { Col, Row } from "react-bootstrap";
import NavBarMobail from "../Components/desk/NavBarMobail";
import FooterDesk from "../Components/desk/FooterDesk";

const contactus = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to

  return (
    <>
      <NavBar />
      <NavBarMobail titlePage="Contact Us" />
      <main
        style={{
          backgroundColor: "#EDEDED",
          width: "100%",
          margin: "auto",
        }}
        className="d-flex align-items-center flex-column pb-4"
      >
        <div className="d-none d-sm-block w-100 ">
          <Row>
            <Col className="col-12">
              <h3 className="text-center mt-5 ">Contact Us</h3>
              <p className={styles.title} style={{ marginBottom: "15px" }}>
                We are here for you
              </p>
            </Col>
            <Col className="col-12 mb-5">
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
            </Col>
            <Col className="col-12">
              <Row className="d-flex justify-content-around">
                <Col
                  className="col-5"
                  style={{ background: "white", borderRadius: "15px" }}
                >
                  <p className={styles.textsub} style={{ marginTop: 15 }}>
                    {" "}
                    Social media contacts
                  </p>
                  <p className={styles.textsub1}>
                    {" "}
                    If you need a help from our pharmacists or want to order a
                    specific prescription contact us via{" "}
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
                </Col>
                <Col
                  className="col-5"
                  style={{ background: "white", borderRadius: "15px" }}
                >
                  <p className={styles.textsub} style={{ marginTop: "15px" }}>
                    {" "}
                    Reach us via
                  </p>
                  <div className="w-90 d-flex text-center justify-content-around align-items-center  flex-column">
                    <div className="w-95 d-flex text-center justify-content-center align-items-center mx-5 ">
                      <Row className=" d-flex text-center justify-content-center align-items-center ">
                        <Col
                          className="col-12 col-sm-12 col-md-12"
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
                                style={{
                                  color: "#0F4392",
                                  border: "1px solid #0F4392",
                                }}
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
                              <div className=" d-flex text-center justify-content-start align-items-center">
                                <Image
                                  //  className="w-20"
                                  src={location}
                                  alt="Next.js Logo"
                                  width="15px"
                                  height="20px"
                                  priority
                                />{" "}
                                <p className={styles.number}>
                                  Tal avenu- white hills hotel, Sharm Elsheikh,
                                  Egypt
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
                            style={{
                              color: "#0F4392",
                              border: "1px solid #0F4392",
                            }}
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
                                Tal avenu- white hills hotel, Sharm Elsheikh,
                                Egypt
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>

                    <div style={{ width: "95%" }} onClick={() => setOpen(true)}>
                      <ButtonRequestOrder
                        txtColor="white"
                        bckColor="#0F4392"
                        BRColor="#0F4392"
                        text="Request a call"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="d-block d-sm-none w-100 pb-4">
          <div
            style={{
              backgroundColor: "white",
              width: "95%",
              borderRadius: "15px",
            }}
            className="mt-3 mx-auto d-flex justify-content-center align-items-center flex-column"
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
            <h4 className={styles.textsub} style={{ marginTop: 15 }}>
              Social media contacts
            </h4>
            <p className="text-center px-4" style={{ fontSize: "16px" }}>
              If you need a help from our pharmacists or want to order a
              specific prescription contact us via
            </p>
            <div className="w-100 text-center d-flex justify-content-center align-items-center">
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
            <div
              className="my-2"
              style={{ height: "1px", backgroundColor: "grey", width: "90%" }}
            ></div>

            <p className={styles.textsub}>Reach us via</p>
            <div className="w-90 d-flex text-center justify-content-around align-items-center  flex-column">
              <div className="w-95 d-flex text-center justify-content-center align-items-center mx-5 ">
                <Row className=" d-flex text-center justify-content-center align-items-center">
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
                          style={{
                            color: "#0F4392",
                            border: "1px solid #0F4392",
                          }}
                        >
                          <Image
                            //  className="w-20"
                            src={phone}
                            alt="Next.js Logo"
                            width="15px"
                            height="20px"
                            priority
                            style={{ marginInline: 8 }}
                          />
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

              <div style={{ width: "95%" }} onClick={() => setOpen(true)}>
                <ButtonRequestOrder
                  txtColor="white"
                  bckColor="#0F4392"
                  BRColor="#0F4392"
                  text="Request a call"
                />
              </div>
            </div>

            <></>
          </div>
        </div>

        <div className="w-80 d-flex justify-content-start align-items-center">
          <Sheet
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            snapPoints={snapPoints}
            className={styles.modalDesktop}
          >
            <Sheet.Container className={styles.bottomsheet}>
              <Sheet.Header />
              <div className="w-100 d-flex  justify-content-center align-items-center">
                <h4 style={{ color: "#0F4392" }}>Request a call</h4>
              </div>

              <Sheet.Content>
                <ModalContent setOpen={setOpen} />
              </Sheet.Content>
            </Sheet.Container>

            <Sheet.Backdrop />
          </Sheet>
        </div>
      </main>
      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block ">
        <FooterDesk />
      </div>
    </>
  );
};

export default contactus;
