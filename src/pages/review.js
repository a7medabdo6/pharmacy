import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/verification.module.css";
import Header from "../Components/Ulits/Header";

import thanksrate from "../assets/img/thanksrate.png";
import Rateing from "../Components/Ulits/Rateing";
import UploadFile from "../Components/Ulits/UploadFile";
import starGreat from "../assets/img/star_great.png";
import upload from "../assets/img/arrow_up.png";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ReviewDesk from "../Components/desk/ReviewDesk";
import PolicyText from "../Components/Ulits/PolicyText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtomReview from "../Components/Requests/ButtomReview";
import PostReview from "../Apis/PostReview";
import FooterDesk from "@/Components/desk/FooterDesk";
import logo2 from "../assets/img/logo2.png";
import NavBarMobile from "../Components/desk/NavBarMobail";

export default function Home() {
  const [phone, setphone] = useState("us");
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [modalShow, setModalShow] = useState(false);
  const [description, setdescription] = useState();
  const [file, setfile] = useState();
  const [rate, setrate] = useState();
  const [Data, setData] = useState();
  const Onchangemessage = (e) => {
    setdescription(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    padding: "7px",
  };

  const SendReview = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("file", file);
    formData.append("rate", rate);
    formData.append("user", 1);

    const res = await PostReview(formData);
    if (res) setData(res);

    console.log(`${Data} => data`);
  };

  useEffect(() => {
    setTimeout(() => {
      if (Data) {
        setOpen(true);
      }
    }, 2000);
  }, [Data]);
  return (
    <div>
      <div
        className="d-none d-sm-flex justify-content-center align-items-center"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <main
          className="d-flex flex-column align-items-center bg-white mx-auto pt-5 pb-3 px-2 rounded-3"
          style={{ width: "600px" }}
        >
          <h2 className="text-primary">Write a review</h2>
          <h3>Rate your experience</h3>
          <div className="d-flex justify-content-around align-items-around flex-row">
            <Rateing setrate={setrate} />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column w-80 ">
            <div className="form-group w-100">
              <label htmlFor="exampleFormControlTextarea1">
                Leave your message*
              </label>
              <textarea
                onChange={Onchangemessage}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
              ></textarea>
            </div>
            <p className="w-100 m-0 mt-2">Upload a file</p>
            <div className="d-flex justify-content-center align-items-center flex-column box-grey">
              <Image
                src={upload}
                alt="Next.js Logo"
                // width={80}
                // height={37}
                priority
              />
              <div
                style={{ cursor: "pointer" }}
                className="d-flex justify-content-center align-items-center flex-column box-grey-20 "
              >
                <UploadFile setfile={setfile} />
              </div>
              <p className="text-muted m-2">Or drop files to upload</p>
            </div>
            <button
              onClick={SendReview}
              type="submit"
              className="btn btn-primary mb-3 mt-3 w-100"
            >
              Submit
            </button>
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
                ></Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  className="text-center"
                >
                  <div>
                    <Image
                      src={thanksrate}
                      alt="Next.js Logo"
                      width={366}
                      height={315}
                      priority
                    />
                    <h3>Your review has been submitted successfully</h3>
                  </div>

                  <div className="w-100  d-flex justify-content-center align-items-center mt-3">
                    <ButtomReview
                      txtColor="white"
                      bckColor="#0F4392"
                      BRColor="#0F4392"
                      text="Go To Home Page "
                    />
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
        </main>
      </div>
      <div className="d-sm-none">
        <div>
          <NavBarMobile titlePage="Write a review" />

          <main className={styles.main}>
            <h3>Rate your experience</h3>
            <div className="d-flex justify-content-around align-items-around flex-row">
              <Rateing setrate={setrate} />
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column w-80 ">
              <div className="form-group w-100">
                <label htmlFor="exampleFormControlTextarea1">
                  Leave your message*
                </label>
                <textarea
                  onChange={Onchangemessage}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                ></textarea>
              </div>
              <p className="w-100 m-0 mt-2">Upload a file</p>
              <div className="d-flex justify-content-center align-items-center flex-column box-grey">
                <Image
                  src={upload}
                  alt="Next.js Logo"
                  // width={80}
                  // height={37}
                  priority
                />
                <div
                  style={{ cursor: "pointer" }}
                  className="d-flex justify-content-center align-items-center flex-column box-grey-20 "
                >
                  <UploadFile setfile={setfile} />
                </div>
                <p className="text-muted m-2">Or drop files to upload</p>
              </div>
              <button
                onClick={SendReview}
                type="submit"
                className="btn btn-primary mb-3 mt-3 w-100"
              >
                Submit
              </button>
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
                  ></Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    className="text-center"
                  >
                    <div>
                      <Image
                        src={thanksrate}
                        alt="Next.js Logo"
                        width={366}
                        height={315}
                        priority
                      />
                      <h3>Your review has been submitted successfully</h3>
                    </div>

                    <div className="w-100  d-flex justify-content-center align-items-center mt-3">
                      <ButtomReview
                        txtColor="white"
                        bckColor="#0F4392"
                        BRColor="#0F4392"
                        text="Go To Home Page "
                      />
                    </div>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
