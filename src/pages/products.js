import React from "react";
import styles from "@/styles/products.module.css";
import Header from "../Components/Ulits/Header";
import StepProgress from "../Components/Ulits/StepProgressBar";
import Frame from "../assets/img/Frame.png";
import viber from "../assets/img/viber.png";
import messenger from "../assets/img/messenger.png";
import whatsapp from "../assets/img/whatsapp.png";
import telegram from "../assets/img/telegram.png";
import location from "../assets/img/location.png";
import phone from "../assets/img/phone.png";
import BottomNav from "../Components/Ulits/BottomNav.js";

import PhoneIcon from "@mui/icons-material/Phone";
import ButtonTrack from "../Components/tracking/ButtonTrack";
import Image from "next/image";
import Button from "../Components/Ulits/Button";
import ButtonRequestOrder from "../Components/Ulits/ButtonRequestOrder";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import icon from "../assets/img/icon.png";
import alert from "../assets/img/alert.png";
import left from "../assets/img/Leftwhite.png";
import exit from "../assets/img/exit.png";

import iconfilter from "../assets/img/iconfilter.png";
import SearchInput from "../Components/products/SearchInput";
import ButtonContact from "../Components/products/ButtonContact";
import CardProduct from "../Components/products/CardProduct";
import { useRouter } from "next/router";
import Link from "next/link";
import DropdownFilter from "../Components/products/DropdownFilter";

const products = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <main className={styles.main} style={{ backgroundColor: "#EDEDED" }}>
      <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
        <div
          className="w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center flex-column "
          style={{
            backgroundColor: "#0F4392",
            borderRadius: 10,
            height: "150px",
            position: "relative",
          }}
        >
          <div className="w-100 d-flex justify-content-between align-items-center ">
            <div
              onClick={handleBack}
              className="d-flex justify-content-center align-items-center ms-3"
              style={{
                border: "1px solid white",
                borderRadius: "5px",
                width: "25px",
                height: "25px",
              }}
            >
              <Image
                //  className="w-20"
                src={left}
                alt="Next.js Logo"
                width={14}
                height={16}
                priority
              />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center me-5 ">
              <h3 style={{ color: "white", margin: "0px", fontWeight: "500" }}>
                products
              </h3>
            </div>

            <div className="d-flex justify-content-center align-items-center ">
              <Link href="/Notifications" className="w-100">
                <Image
                  //  className="w-20"
                  src={alert}
                  style={{ position: "absolute", right: "80px", top: "24px" }}
                  alt="Next.js Logo"
                  width={19}
                  height={24}
                  priority
                />
              </Link>
              <div
                className=" d-flex justify-content-center align-items-center "
                style={{
                  height: "24px",
                  width: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#C5CAD4",
                  position: "absolute",
                  right: "20px",
                }}
              >
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
          <div
            style={{ width: "95%" }}
            className=" d-flex justify-content-between mx-3 align-items-center flex-row-reverse mt-5 "
          >
            <div onClick={() => setOpen(true)} className={styles.boxfilter}>
              <Image
                //  className="w-20"
                src={iconfilter}
                className={styles.iconfilter}
                alt="Next.js Logo"
                width={14}
                height={16}
                priority
              />

              <p className={styles.txtfilter}>Filter</p>
            </div>
            <div>
              <SearchInput />
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-start align-items-center  mt-3 flex-wrap"
          style={{ width: "95%" }}
        >
          <div
            className="d-flex justify-content-center align-items-center "
            style={{
              backgroundColor: "#DD1717",
              borderRadius: "4px",
              width: "32px",
              height: "28px",
            }}
          >
            <p className={styles.label}>all</p>
          </div>

          <div
            className="d-flex justify-content-center align-items-center mx-2"
            style={{
              backgroundColor: "rgba(221, 23, 23, 0.2)",
              borderRadius: "4px",
              width: "119px",
              height: "28px",
            }}
          >
            <p className={styles.label}>Top 50 medicines</p>
          </div>

          <div
            className="d-flex justify-content-center align-items-center mx-2"
            style={{
              backgroundColor: "rgba(221, 23, 23, 0.2)",
              borderRadius: "4px",
              width: "119px",
              height: "28px",
            }}
          >
            <p className={styles.label}>Natural oils and herbs </p>
          </div>

          <div
            className="d-flex justify-content-center align-items-center mx-2"
            style={{
              backgroundColor: "rgba(221, 23, 23, 0.2)",
              borderRadius: "4px",
              width: "119px",
              height: "28px",
            }}
          >
            <p className={styles.label}>Cosmtics </p>
          </div>
        </div>

        <div className={styles.boxwhite}>
          <p className={styles.txtExplore}>Explore our products or </p>
          <ButtonContact
            txtColor="#0F4392"
            bckColor="white"
            BRColor="#0F4392"
            text="Contact a pharmacist"
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-start align-items-center flex-wrap "
        style={{ width: "95%" }}
      >
        <div className={styles.greybox}>
          <p className={styles.txtofboxgrey}>Diclofenac Sodium</p>
          <Image
            //  className="w-20"
            src={exit}
            className="mx-1"
            alt="Next.js Logo"
            width={10}
            height={10}
            priority
          />
        </div>
        <div className={styles.greybox} style={{ width: "134px" }}>
          <p className={styles.txtofboxgrey}>Sodium Chloride</p>
          <Image
            //  className="w-20"
            src={exit}
            className="mx-1"
            alt="Next.js Logo"
            width={10}
            height={10}
            priority
          />
        </div>
        <div className={styles.greybox} style={{ width: "94px" }}>
          <p className={styles.txtofboxgrey}>Ibuprofen</p>
          <Image
            //  className="w-20"
            src={exit}
            className="mx-1"
            alt="Next.js Logo"
            width={10}
            height={10}
            priority
          />
        </div>
        <div className={styles.greybox} style={{ width: "134px" }}>
          <p className={styles.txtofboxgrey}>Sodium Chloride</p>
          <Image
            //  className="w-20"
            src={exit}
            className="mx-1"
            alt="Next.js Logo"
            width={10}
            height={10}
            priority
          />
        </div>
      </div>

      <div
        className="d-flex justify-content-center mt-3 align-items-center flex-wrap "
        style={{ width: "95%" }}
      >
        <CardProduct dis={true} />
        <CardProduct />
        <CardProduct dis={true} />
        <CardProduct />
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
              <DropdownFilter />
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
      </div>
      <div
        className="position-relative "
        style={{ bottom: 0, width: "100%", borderRadius: "15px" }}
      >
        <BottomNav />
      </div>
    </main>
  );
};

export default products;
