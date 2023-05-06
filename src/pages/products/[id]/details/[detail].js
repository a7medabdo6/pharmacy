import React, { useEffect } from "react";
import styles from "@/styles/contact.module.css";
import Header from "../../../../Components/Ulits/Header";
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import ModalContent from "../../../../Components/Ulits/ModalContent";
import Slideshow from "../../../../Components/Slideshow";
import ButtonProductDetails from "../../../../Components/Ulits/ButtonProductDetails";
import Link from "next/link";

const productdetails = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to
  const details = useSelector((state) => state.ProductDetails.details);
  useEffect(() => {
    console.log(details, "details");
  }, [details]);
  return (
    <main className={styles.main} style={{ backgroundColor: "#EDEDED" }}>
      <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
        <Header title="Product details" />
      </div>
      {details?.images?.length > 0 && (
        <div
          style={{ width: "100%", background: "white" }}
          className=" d-flex justify-content-center align-items-center "
        >
          <Slideshow />
        </div>
      )}

      <div
        style={{ width: "95%" }}
        className="d-flex justify-content-between align-items-center mx-2 mt-3"
      >
        <div style={{ width: "50%", marginRight: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: "bold",
              color: "black",
              marginBottom: 0,
            }}
          >
            Product Category
          </h3>
          <h2
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            {details?.name}
          </h2>
          <p style={{ fontSize: "12px", lineHeight: "16px", color: "#828282" }}>
            {" "}
            {details?.description}
          </p>
        </div>

        <div style={{ width: "50%" }}>
          
            <ButtonProductDetails
              txtColor="white"
              bckColor="#0F4392"
              BRColor="#0F4392"
              text="Make a  request"
            />
          
        </div>
      </div>

      <div
        style={{
          background: "grey",
          width: "95%",
          height: "1px",
          marginTop: "15px",
          marginBottom: "30px",
        }}
      ></div>
      <div
        style={{ width: "95%" }}
        className="d-flex justify-content-start align-items-center  2"
      >
        {" "}
        <h3 style={{ color: "#0F4392" }}>Product details</h3>
      </div>
      <div
        style={{ width: "95%" }}
        className="d-flex justify-content-start align-items-center flex-column  "
      >
        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            Brand:
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>  {details?.brand} </p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            Active ingredients :
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>Lorem Ipsum</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2  "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            User:
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>Lorem Ipsum</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            Russian similar:
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>{details?.russian_similar}</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p>
            {" "}
            <span
              style={{
                marginBottom: 0,
                fontWeight: "bold",
                fontSize: "18px",
                opacity: "77%",
              }}
            >
              Description:
            </span>{" "}
            <span style={{ color: "grey", fontSize: "18px" }}>
              {details?.description}
            </span>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default productdetails;
