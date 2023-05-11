import styles from "@/styles/verification.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logo from "../assets/img/logo2.png";
import user from "../assets/img/user.svg";
import SerachBar from "../Components/SerachBar";
import { Input } from "semantic-ui-react";
import CardSlider from "../Components/cardSlider";
import CardBanner from "../Components/cardBanner";
import CategorySliderCard from "../Components/CategorySliderCard";
import Footer from "../Components/Footer";
import slider from "../assets/img/slider.png";
import slider2 from "../assets/img/slider2.png";
import slider3 from "../assets/img/slider3.png";
import Service from "../assets/img/service.png";
import Service2 from "../assets/img/service2.png";
import Service3 from "../assets/img/service3.png";
import getAllReviews from "../Apis/Testimonails";

import "react-phone-input-2/lib/style.css";
import OurServicesCard from "@/Components/OurServicesCard";
import Testimonial from "@/Components/Testimonial";
import getallCategories from "../Apis/Category";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Steps from "../Components/desk/Steps";
import infoImage from "../assets/desk/info.png";
import step1 from "../assets/desk/step1.png";
import step2 from "../assets/desk/step2.png";
import step3 from "../assets/desk/step3.png";
import cart from "../assets/desk/shopping.png";
import line from "../assets/desk/line.png";
import maik from "../assets/desk/maik.png";
import CategorySliderDesk from "../Components/desk/CategorySliderDesk";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import FooterDesk from "../Components/desk/FooterDesk";
import SliderOffer from "../Components/desk/SliderOffer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtomReview from "@/Components/Requests/ButtomReview";
import ReviewDesk from "../Components/desk/ReviewDesk";
import NavBar from "../Components/desk/NavBar";
import { Col, Row } from "react-bootstrap";

export default function Main() {
  const [open, setOpen] = useState(false);

  const [phone, setphone] = useState("us");
  const [categories, setcateogies] = useState([]);
  const getHomeData = async () => {
    const res = await getallCategories();
    setcateogies(res?.results);
    return res;
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const [reviews, setReviews] = useState([]);
  const getReviewsData = async () => {
    const res = await getAllReviews();
    console.log(res, "ressss");
    setReviews(res?.results);
    return res;
  };
  useEffect(() => {
    getReviewsData();
  }, []);
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      classNameName="container text-center"
      style={{ backgroundColor: "white" }}
    >
      <div className="row">
        <div className="d-sm-none">
          <>
            <main
              className={styles.main}
              style={{ backgroundColor: "#EDEDED" }}
            >
              <div
                style={{ width: "95%" }}
                className="  d-flex justify-content-between align-items-center flex-row  m-4"
              >
                <Image
                  //  className="w-20"
                  src={logo}
                  alt="Next.js Logo"
                  width={35}
                  height={30}
                  priority
                />
                <div
                  className="text-primary  m-0"
                  style={{ textAlign: "center" }}
                >
                  <Image
                    //  className="w-20"
                    src={user}
                    alt="Next.js Logo"
                    width={35}
                    height={30}
                    priority
                  />
                </div>
              </div>

              <div
                style={{ width: "95%" }}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <SerachBar />
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  showIndicators={false}
                  style={{ backgroundColor: "white", width: "100%" }}
                >
                  <CardSlider
                    title=" Step 1"
                    desc="You can contact our pharmacists for help and consultations"
                    sec_title="Select your products ."
                    slider={slider}
                  />
                  <CardSlider
                    title=" Step 2"
                    desc="We will contact you with prices before we ship the order to you "
                    sec_title="confirm your order ."
                    slider={slider2}
                  />
                  <CardSlider
                    title=" Step 3"
                    desc="After confirming your order price, we will deliver the order to your address"
                    sec_title="shipment and delivery"
                    slider={slider3}
                  />
                </Carousel>
                <h4
                  style={{ width: "95%" }}
                  className=" align-start m-0 pt-2 pb-2"
                >
                  Big deals
                </h4>
                <CardBanner />
                {categories?.length > 0 && (
                  <div
                    style={{ width: "95%" }}
                    className="d-flex justify-content-between align-items-center "
                  >
                    <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                      Categories.
                    </h4>
                    <Link
                      href="/CategoriesViewall"
                      className="d-flex justify-content-between align-items-center "
                    >
                      <p className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                        view all
                      </p>
                    </Link>
                  </div>
                )}

                <div
                  className=" mt-3 d-flex justify-content-start align-items-center flex-row "
                  style={{ width: "95%", overflow: "scroll" }}
                >
                  {/* {categories?.length > 0 && (
                    <CategorySlider categories={categories} />
                  )} */}
                  {categories?.length > 0 &&
                    categories.map((item) => {
                      return <CategorySliderCard item={item} />;
                    })}
                </div>
                <div
                  style={{ width: "95%" }}
                  className="d-flex justify-content-between align-items-center "
                >
                  <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                    Our services.
                  </h4>
                  <Link
                    href="/CategoriesViewall"
                    className="d-flex justify-content-between align-items-center "
                  >
                    <p className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                      view all
                    </p>
                  </Link>
                </div>

                <div className="w-100 mt-3 d-flex justify-content-between align-items-center flex-column ">
                  <OurServicesCard
                    image={Service}
                    title="Online doctors"
                    desc="You can consult with one of our online doctors in all specialties."
                  />

                  <OurServicesCard
                    image={Service2}
                    title="Delivery to your room"
                    desc="Make a request to receive what you want at your hotel room."
                  />
                  <OurServicesCard
                    image={Service3}
                    title="Call us"
                    desc="You can call our pharmacists to request what you want or send a prescription"
                  />
                </div>
                <div
                  style={{ width: "95%" }}
                  className="d-flex justify-content-between align-items-center "
                >
                  <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                    Testimonial
                  </h4>
                  <Link
                    href="/testimonials"
                    className="d-flex justify-content-between align-items-center "
                  >
                    <p className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                      view all
                    </p>
                  </Link>
                </div>
                {reviews.map((item, i) => {
                  if (i < 1) {
                    return (
                      <div
                        className="boxshadow w-100"
                        style={{ background: "white" }}
                      >
                        <Testimonial item={item} />
                      </div>
                    );
                  }
                })}
              </div>
              <div style={{ width: "100%" }}>
                <Footer />
              </div>
            </main>
          </>
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
                <ReviewDesk />
              </Typography>
            </Box>
          </Modal>
        </div>
        {/* <div className="d-none d-sm-block d-md-none">deskllll</div> */}
        <div className="d-none d-md-block">
          <div
            className="d-flex justify-content-between align-items-start flex-column  position-relative w-100"
            style={{ minHeight: "100vh" }}
          >
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
                cursor: "pointer",
              }}
              className="position-absolute d-flex justify-content-center align-items-center"
            >
              <p style={{ color: "white", fontSize: "12px !important" }}>
                Write Review
              </p>
            </div>
            <div className="d-flex justify-content-start align-items-start flex-column    w-100">
              {/*  */}
              <>
                <NavBar />
                <div
                  class="input-group mb-3 position-relative mt-3 d-flex justify-content-center align-items-center flex-column"
                  style={{ width: "80%", margin: "auto" }}
                >
                  <input
                    type="text"
                    style={{
                      backgroundColor: "#FAFBFB",
                      borderRadius: "10px",
                      width: "78% !important",
                    }}
                    className="form-control w-100 inputsearch"
                    placeholder="Search products"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  {/* <SearchIcon style={{ position: "absolute", left: "0px" }} /> */}
                </div>
              </>

              <div className="d-flex justify-content-center align-items-center flex-column mt-5   w-100">
                <h5 style={{ color: "#0F4392" }}>How it works</h5>
                <div
                  className="d-flex justify-content-around align-items-center  position-relative  "
                  style={{ width: "78%" }}
                >
                  <Steps
                    imgsource={step1}
                    title="step1"
                    text="
              Select your products"
                    desc="You can contact our pharmacists for help and consultations"
                  />
                  <Steps
                    imgsource={step2}
                    title="Step2"
                    text="
             
 confirm your order"
                    desc="We will contact you with prices before we ship the order to you "
                  />
                  <Steps
                    imgsource={step3}
                    title="Step3"
                    text="
              shipment and delivery"
                    desc="After confirming your order price, we will deliver the order to your address"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5 getofferbox w-100">
              <div
                style={{ width: "60%", marginLeft: "2%" }}
                className="position-relative d-flex justify-content-center align-items-center "
              >
                <div style={{ left: "-20px" }} className="position-absolute">
                  <Image
                    //  className="w-20"
                    src={maik}
                    style={{ width: "100%", height: "100%" }}
                    alt="Next.js Logo"
                    height={50}
                    width={50}
                    priority
                  />{" "}
                </div>
                <div
                  style={{ width: "100%", height: "95%" }}
                  className="position-absolute"
                >
                  <Image
                    //  className="w-20"
                    src={line}
                    style={{ width: "100%", height: "100%" }}
                    alt="Next.js Logo"
                    priority
                  />{" "}
                </div>
                <SliderOffer />
              </div>
              <div>
                <Image
                  //  className="w-20"
                  src={cart}
                  alt="Next.js Logo"
                  width={200}
                  height={180}
                  priority
                />{" "}
              </div>
              <div style={{ marginRight: "20px" }}>
                <Image
                  //  className="w-20"
                  src={infoImage}
                  alt="Next.js Logo"
                  width={80}
                  height={80}
                  priority
                />{" "}
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-column mt-5 w-100">
              <h5 style={{ marginBottom: 0, color: "#0F4392" }}> Categories</h5>
              <div
                className=" mt-3 d-flex justify-content-center align-items-center flex-row w-100 "
                style={{ width: "100%", overflow: "scroll" }}
              >
                {categories?.length > 0 &&
                  categories.map((item) => {
                    return (
                      <CategorySliderDesk item={item} text="All medicines" />
                    );
                  })}
              </div>
            </div>

            <div
              className="d-flex justify-content-center align-items-center flex-column mb-5 mt-5  "
              style={{ width: "100%" }}
            >
              <h5 style={{ marginBottom: 0, color: "#0F4392" }}>
                {" "}
                Our services
              </h5>

              <div
                className="d-flex justify-content-center align-items-center  mt-5 boxshadow boxshadow"
                style={{ width: "78%" }}
              >
                <OurServicesCard
                  image={Service}
                  title="Online doctors"
                  desc="You can consult with one of our online doctors in all specialties."
                />
                <OurServicesCard
                  image={Service2}
                  title="Delivery to your room"
                  desc="Make a request to receive what you want at your hotel room."
                />
                <OurServicesCard
                  image={Service3}
                  title="Call us"
                  desc="You can call our pharmacists to request what you want or send a prescription"
                />
              </div>
            </div>

            <div
              className="d-flex justify-content-center align-items-center flex-column mb-5 mt-5  "
              style={{ width: "100%" }}
            >
              <h5 style={{ marginBottom: 0, color: "#0F4392" }}>Testimonial</h5>

              <div
                className="d-flex justify-content-between align-items-center  mt-5  "
                style={{ width: "78%" }}
              >
                <Row className="w-100">
                  {reviews.map((item, i) => {
                    if (i < 3) {
                      return (
                        <Col className="col-4">
                          <div className="boxshadow ">
                            <Testimonialdesk item={item} />
                          </div>
                        </Col>
                      );
                    }
                  })}
                </Row>
              </div>
            </div>

            <div
              className=" mt-3 d-flex justify-content-center align-items-center flex-column w-100 "
              style={{ width: "100%" }}
            >
              <Link href="/testimonials">
                <p style={{ color: "#0F4392", fontSize: "14px !important" }}>
                  Check all reviews
                </p>
              </Link>
              <FooterDesk />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
