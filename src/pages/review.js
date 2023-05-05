import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/verification.module.css";
import Header from "../Components/Ulits/Header";
import verification from "../assets/img/verification.png";
import Left from "../assets/img/Left.png";
import user from "../assets/img/user.svg";
import starTerible from "../assets/img/star_terrible.png";
import starBad from "../assets/img/star_bad.png";
import starGood from "../assets/img/star_good.png";
import startOk from "../assets/img/star_ok.png";
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
import NavBar from "@/Components/desk/NavBar";

const inter = Inter({ subsets: ["latin"] });

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

    return res;
  };

  useEffect(() => {
    setTimeout(() => {
      if (Data) {
        setOpen(true);
      }
    }, 2000);
  }, [Data]);
  return (
    <div className=" text-center">
      <div className="row">
        <div className="d-sm-none">
          <>
            <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
              <div
                className="d-flex justify-content-center  align-items-center "
                style={{ width: "83%" }}
              >
                <Header title="Contact us" />
              </div>
              <h3>Rate your experience</h3>
              <div
                className={
                  "d-flex justify-content-around align-items-around flex-row"
                }
              >
                <Rateing setrate={setrate} />
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column w-80 mt-5">
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
          </>{" "}
        </div>
        {/* <div className="d-none d-sm-block d-md-none">deskllll</div> */}
        <div className="d-none d-md-block">
          <div
            className="d-flex justify-content-center w-100 align-items-center flex-column"
            style={{ backgroundColor: "#C7C7C7" }}
          >
            <NavBar />

            <h5 style={{ color: "#0F4392" }}>Our policy</h5>
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
                    <ReviewDesk />
                  </Typography>
                </Box>
              </Modal>
            </div>
            <div
              onClick={() => {
                setOpen(true);
              }}
              style={{
                backgroundColor: "#DD1717",
                width: "130px",
                height: "25px",
                right: "-52px",
                top: "19%",
                transform: "rotate(-90deg)",
                textAlign: "center",
              }}
              className="position-absolute d-flex justify-content-center align-items-center"
            >
              <p style={{ color: "white", fontSize: "12px !important" }}>
                Write Review
              </p>
            </div>
            <div
              style={{
                background: "white",
                borderRadius: "5px",
                width: "70%",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <PolicyText
                title="1- Introduction"
                text='
This policy outlines the terms and conditions of use for our pharmacy website ("www.well-medic.com"). By accessing and using the Website, you agree to be bound by the terms and conditions described herein. We reserve the right to amend or update this policy at any time, and it is your responsibility to check for updates periodically. Your continued use of the Website signifies your acceptance of any changes to this policy.
...
'
              />

              <PolicyText
                title="2- Privacy and Security"
                text="
We take the privacy and security of our users very seriously. Our Privacy Policy describes the types of personal information we collect, how we use it, and how we protect it. By using the Website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy."
              />

              <PolicyText
                title="3- User Accounts and Access"
                text="
To access certain features of the Website, users may be required to create an account. Users are responsible for maintaining the confidentiality of their account credentials and are solely responsible for all activities occurring under their account. We reserve the right to suspend or terminate any account without notice if we suspect unauthorized use, fraud, or any other violation of this policy."
              />

              <PolicyText
                title="4- Prescription and Over-the-Counter Medications"
                text="
Prescription medications may only be ordered by users with a valid prescription from a licensed healthcare provider. Users are required to provide accurate and complete prescription information when placing an order. We reserve the right to verify any prescription before processing an order. Over-the-counter medications and other products may be purchased without a prescription, subject to any restrictions imposed by applicable laws and regulations."
              />

              <PolicyText
                title="5- Order Processing and Shipping"
                text="
All orders are subject to availability and confirmation of the order price. We reserve the right to cancel any order if there are any issues with the order or if the requested products are out of stock. Shipping and delivery times may vary depending on the destination and other factors. We will not be held responsible for any delays in delivery due to circumstances beyond our control, such as natural disasters, strikes, or customs clearance issues."
              />

              <PolicyText
                title="6-  Returns and Refunds"
                text="
Our returns and refunds policy outlines the conditions under which products may be returned or refunded. Please review this policy before placing an order."
              />

              <PolicyText
                title="7- Limitation of Liability"
                text="
To the maximum extent permitted by law, we disclaim all warranties, express or implied, regarding the accuracy, reliability, or completeness of the information and content on the Website. We shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use the Website or its content."
              />

              <PolicyText
                title="8- Intellectual Property"
                text="
All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of the pharmacy or its content suppliers and is protected by international copyright laws. The reproduction, modification, distribution, or transmission of any content without our express written permission is strictly prohibited."
              />

              <PolicyText
                title="9- Governing Law"
                text="
This policy and any disputes relating to it or the use of the Website shall be governed by and construed in accordance with the laws of the jurisdiction in which the pharmacy is registered.
"
              />

              <PolicyText
                title="10- Contact Information"
                text="
If you have any questions or concerns regarding this policy or the Website, please contact our customer support team using the contact information provided on the Website."
              />
            </div>
            <FooterDesk />
          </div>
        </div>
      </div>
    </div>
  );
}