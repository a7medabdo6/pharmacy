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
import Button from "../Components/Ulits/Button";
import ButtonRequestOrder from "../Components/Ulits/ButtonRequestOrder";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import ModalContent from "../Components/Ulits/ModalContent";

const contactus = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to

  return (
    <main className={styles.main} style={{ backgroundColor: "#EDEDED" }}>
      <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
        <Header title="Contact us" />
      </div>
      <div
        style={{ backgroundColor: "white", width: "95%", borderRadius: "15px" }}
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
          />
        </div>
        <p className={styles.textsub}> Social media contacts</p>
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
        <div
          className="my-2"
          style={{ height: "1px", backgroundColor: "grey", width: "80%" }}
        ></div>

        <p className={styles.textsub}> Reach us via</p>
        <div className="w-90 d-flex text-center justify-content-around align-items-center  flex-column">
          <div className="w-100 d-flex text-center justify-content-between align-items-center mx-5 ">
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
            <div className=" d-flex justify-content-center align-items-center  ">
              <Button
                txtColor="#0F4392"
                bckColor="white"
                BRColor="#0F4392"
                text="Call now"
              />
            </div>
          </div>
          <div className="w-100 d-flex text-center justify-content-start align-items-center mt-3 ">
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

      <div
        className="position-absolute "
        style={{ bottom: 0, width: "95%", borderRadius: "15px" }}
      >
        {/* <BottomNav /> */}
      </div>

      <div
        className="position-absolute "
        style={{ bottom: 0, width: "100%", borderRadius: "15px" }}
      >
        <BottomNav />
      </div>
    </main>
  );
};

export default contactus;
