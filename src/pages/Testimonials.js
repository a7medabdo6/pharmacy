import React from "react";
import styles from "@/styles/Testimonials.module.css";
import Header from "../Components/Ulits/Header";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import avatar from "../assets/img/Avatar.png";
import ButtomReview from "../Components/Requests/ButtomReview";
import ButtonWriteReview from "../Components/Testimonials/ButtonWriteReview";
import getAllReviews from "../Apis/Testimonails";
import { useState, useEffect } from "react";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReviewDesk from "../Components/desk/ReviewDesk";
const Testimonials = () => {
  const [open, setOpen] = useState(false);

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
  const [reviews, setReviews] = useState([]);
  const getReviewsData = async () => {
    const res = await getAllReviews();
    console.log(res, "ressss");
    setReviews(res?.results);
    return res;
  };
  useEffect(() => {
    // getReviewsData();
  }, []);
  return (
    <div classNameName="container text-center">
      <div className="row">
        <div className="d-sm-none">
          <main className={styles.main} style={{ backgroundColor: "#EDEDED" }}>
            <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
              <Header title="Testimonials" />
            </div>
            <cardTestimonials />

            <div
              className="  d-flex justify-content-center align-items-center flex-column"
              style={{ width: "90%", overflow: "scroll" }}
            >
              {reviews?.length > 0 &&
                reviews.map((item) => {
                  return (
                    <div className={styles.boxtest}>
                      <div className="ms-3">
                        <Image
                          src={avatar}
                          alt="Next.js Logo"
                          width={60}
                          height={60}
                          priority
                        />
                      </div>
                      <div className="ms-2">
                        <p className={styles.username}>user name</p>
                        <div>
                          <StarIcon style={{ color: "#E67136" }} />
                          <StarIcon style={{ color: "#E67136" }} />
                          <StarIcon style={{ color: "#E67136" }} />
                          <StarIcon style={{ color: "#E67136" }} />
                          <StarIcon style={{ color: "#E67136" }} />
                        </div>
                        <p>“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”</p>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "50%", position: "fixed", bottom: "15px" }}
            >
              <ButtonWriteReview
                txtColor="white"
                bckColor="#0F4392"
                BRColor="#0F4392"
                text="Write a review"
              />
            </div>
          </main>
        </div>
        {/* <div className="d-none d-sm-block d-md-none">deskllll</div> */}
        <div className="d-none d-md-block w-100">
          <div className="d-flex justify-content-center w-100 align-items-center flex-column">
            <h3 style={{ color: "#0F4392" }}>All reviews</h3>
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
              className="d-flex justify-content-center flex-wrap align-items-center"
              style={{ width: "75%" }}
            >
              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3">
                <Testimonialdesk />
              </div>

              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3">
                <Testimonialdesk />
              </div>

              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3">
                <Testimonialdesk />
              </div>

              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3">
                <Testimonialdesk />
              </div>

              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3 ">
                <Testimonialdesk />
              </div>
              <div className="boxshadow m-3">
                <Testimonialdesk />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
