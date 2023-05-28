import React from "react";
import styles from "@/styles/products.module.css";
import panadolImg from "../../assets/img/product123.jpg";
import { Button } from "react-bootstrap";
import Image from "next/image";

const CardBestProduct = () => {
  return (
    <div className={`${styles.boxcardprdoduct} px-0 px-md-2 py-0 pb-2 py-md-3`}>
      <div
        style={{ width: "100%", padding: "5px 8px" }}
        className={styles.boxImg1}
      >
        <div
          className="d-flex justify-content-center align-items-center w-100 mb-3"
          style={{
            boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.1)",
            borderRadius: "3px",
          }}
        >
          <Image
            src={panadolImg}
            className={styles.cardproductImage}
            alt="Next.js Logo"
            width={100}
            height={150}
            style={{ width: "100%", height: "100%", margin: 0 }}
            priority
          />
        </div>

        <div className={styles.boxinfo}>
          <p className={styles.titlecard}>Panadol Extra</p>
          <p className={styles.txtcard}>
            Lorem ipsum is the most well known filler text and comes from
            various passages of a book from Cicero, written in 45 BC.
          </p>
        </div>
      </div>
      <Button variant="primary" className="w-95">
        Make A Request
      </Button>
      {/* {item?.description === true ? (
        <div className={styles.discount}>
          <p style={{ color: "#0F4392", fontSize: "10px" }}>-10 %</p>
        </div>
      ) : null} */}
    </div>
  );
};

export default CardBestProduct;
