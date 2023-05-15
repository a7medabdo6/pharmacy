import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NavBar from "../Components/desk/NavBar";
import Header from "../Components/Ulits/Header";
import ButtonConfirmation from "../Components/Requests/ButtonConfirmation";
import BottomNav from "../Components/Ulits/BottomNav";
import FooterDesk from "../Components/desk/FooterDesk";
// CSS Module
import styles from "@/styles/confirmation.module.css";
// IMGS
import vector from "../assets/img/vector.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  padding: "7px",
};

const confirmation = () => {
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <main
        style={{ backgroundColor: "#EDEDED", width: "100%", margin: "auto" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <div className="d-block d-sm-none w-100">
          <Header title="Confirmation" />
        </div>

        <div className="d-none d-sm-block w-100 ">
          <NavBar />
        </div>
        <div className="d-flex justify-content-center confirm-custom align-items-center flex-column">
          <div className=" d-flex justify-content-center align-items-center my-5 ">
            <p
              style={{ color: "#0F4392", fontWeight: "900", fontSize: "27px" }}
            >
              Thank you
            </p>
          </div>

          <div>
            <div className={styles.Bigcircle}>
              <div
                className={styles.circle}
                style={{ backgroundColor: "#0f439242" }}
              >
                <div
                  className=" d-flex justify-content-center align-items-center mt-3 "
                  style={{ position: "absolute" }}
                >
                  <Image
                    //  className="w-20"
                    src={vector}
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      left: "-66px",
                    }}
                    alt="Next.js Logo"
                    width={165}
                    height={130}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-center align-items-center flex-column mt-3 ">
            <p
              className="m-0"
              style={{
                fontSize: "1.2rem",
                textAlign: "center",
                color: "black",
              }}
            >
              {" "}
              Your order has been placed succesfully , you will receice a call
              to confirm.
            </p>

            <p
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "1.2rem",
                marginTop: "20px",
              }}
            >
              Get Well Soon!
            </p>
          </div>
          <div className="w-100  d-flex justify-content-center align-items-center mt-3">
            <ButtonConfirmation
              clicking={handleOpen}
              txtColor="red"
              bckColor="white"
              BRColor="red"
              text="Cancel order"
            />
            <ButtonConfirmation
              txtColor="white"
              bckColor="#0F4392"
              BRColor="#0F4392"
              text="Got it "
            />
          </div>
          <div className="w-100  d-flex justify-content-center align-items-center mt-3">
            <h5
              style={{ fontSize: "15px", color: "#2C6ECB", fontWeight: "bold" }}
            >
              Track Your Order
            </h5>
          </div>

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className="text-center"
                  style={{
                    color: "#0F4392",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Order Cancellation
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  className="text-center"
                >
                  <p className="m-0">Are you sure you want to cancel</p>
                  <p className="m-0">your order ?</p>

                  <div className="w-100  d-flex justify-content-center align-items-center mt-3">
                    <ButtonConfirmation
                      txtColor="red"
                      bckColor="white"
                      BRColor="red"
                      text="Yes Cancel "
                    />
                    <ButtonConfirmation
                      txtColor="white"
                      bckColor="#0F4392"
                      BRColor="#0F4392"
                      text="Keep it "
                    />
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
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

export default confirmation;
