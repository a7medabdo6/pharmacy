import React, { useState } from "react";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SerachBar from "../Components/SerachBar";
import NavBar from "../Components/desk/NavBar";
import styles from "@/styles/products.module.css";
import Labeldesk from "../Components/desk/Labeldesk";
import ButtonContact from "../Components/products/ButtonContact";
import Image from "next/image";
import exit from "../assets/img/exit.png";
import CardOffers from "../Components/Offers/CardOffers";
import CardOffersDesk from "../Components/desk/CardOffersDesk";
import Filter from "../Components/desk/Filter";
import ButtonOffers from "../Components/Offers/ButtonOffers";
import ButtonOfferDEsk from "../Components/desk/ButtonOfferDEsk";

const allreview = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const myStyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)", // define the box shadow
    padding: "10px",
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="d-flex justify-content-center w-100 align-items-center flex-column">
      <NavBar />
      <h4 style={{ color: "#0F4392" }} className="my-5">
        {" "}
        Big deals
      </h4>
      <div
        className="d-flex justify-content-center  align-items-center "
        style={{ width: "100%" }}
      >
        <SerachBar />
      </div>
      <div
        className="d-flex justify-content-center align-items-center  mt-3 flex-wrap"
        style={{ width: "78%" }}
      >
        <Labeldesk text="all" backcolor="red" />
        <Labeldesk text="Cosmtics" />
        <Labeldesk text="Cosmtics" />
        <Labeldesk text="Cosmtics" />
        <Labeldesk text="Cosmtics" />
        <Labeldesk text="Cosmtics" />
        <Labeldesk text="Cosmtics" />

        <Labeldesk text="Cosmtics" />

        <Labeldesk text="Cosmtics" />
      </div>
      <div
        className="d-flex justify-content-center align-items-center  "
        style={{ width: "82%" }}
      >
        <div
          style={{
            width: "25%",
            margin: "5px",
            borderRadius: "8px",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="d-flex justify-content-center mt-3 align-items-center flex-column  "
        >
          <h5 className="my-3">Filter by</h5>

          <Filter label="By diseases" />
          <Filter label="By users" />
          <Filter label="By ingredients" />
          <div
            style={{ width: "80%" }}
            className="d-flex justify-content-around my-3 w-100 align-items-end flex-row-reverse "
          >
            <ButtonOfferDEsk
              txtColor="white"
              bckColor="#0F4392"
              BRColor="#0F4392"
              text="Apply"
            />{" "}
            <ButtonOfferDEsk
              txtColor="#0F4392"
              bckColor="white"
              BRColor="#0F4392"
              text="clear all"
            />{" "}
          </div>
        </div>

        <div
          style={{ width: "75%" }}
          className="d-flex justify-content-center align-items-center flex-column "
        >
          <div
            style={{ width: "100%", borderRadius: "8px" }}
            className="d-flex justify-content-between align-items-center border px-2 mt-5 "
          >
            <p className={styles.txtExplore}>Explore our products or </p>
            <div style={{ width: "50%" }}>
              <ButtonContact
                txtColor="#0F4392"
                bckColor="white"
                BRColor="#0F4392"
                text="Contact a pharmacist"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center ">
            <CardOffersDesk />
            <CardOffersDesk />

            <CardOffersDesk />
          </div>
        </div>
      </div>
    </div>
  );
};

export default allreview;
