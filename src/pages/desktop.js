import React, { useEffect, useState } from "react";
import Image from "next/image";

import OurServicesCard from "@/Components/OurServicesCard";
import Footer from "../Components/Footer";

import ver from "../assets/desk/ver.png";
import logo2 from "../assets/img/logo2.png";
import ReactPhoneInput from "react-phone-input-2";
import Link from "next/link";
import Steps from "../Components/desk/Steps";
import step1 from "../assets/desk/step1.png";
import step2 from "../assets/desk/step2.png";
import step3 from "../assets/desk/step3.png";
import cart from "../assets/desk/cart.png";
import line from "../assets/desk/line.png";
import maik from "../assets/desk/maik.png";
import descond from "../assets/desk/descond.png";
import SearchIcon from "@mui/icons-material/Search";
import CategorySliderCard from "../Components/CategorySliderCard";
import getallCategories from "../Apis/Category";
import Testimonial from "@/Components/Testimonial";

import CategorySliderDesk from "../Components/desk/CategorySliderDesk";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import FooterDesk from "../Components/desk/FooterDesk";
import SliderOffer from "../Components/desk/SliderOffer";

const desktop = () => {
  const [categories, setcateogies] = useState([]);
  const getHomeData = async () => {
    const res = await getallCategories();
    setcateogies(res?.results);
    return res;
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(localStorage?.getItem("user"));
    }
  }, []);
  return (
    <div
      className="d-flex justify-content-between align-items-start flex-column  position-relative w-100"
      style={{ minHeight: "100vh" }}
    >
      <div
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
      <div className="d-flex justify-content-start align-items-start flex-column    w-100">
        <div className="w-100">
          <nav className="navbar navbar-expand-lg bg-body-tertiary boxshadow w-100">
            <div className="container-fluid" style={{ width: "80%" }}>
              <div className="d-flex justify-content-center align-items-center">
                <a className="navbar-brand" href="#">
                  <Image
                    //  className="w-20"
                    src={logo2}
                    alt="Next.js Logo"
                    width={50}
                    height={30}
                    priority
                  />{" "}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item mx-3">
                      <a className="nav-link" href="#">
                        Our Products
                      </a>
                    </li>
                    <li className="nav-item mx-3">
                      <a className="nav-link" href="#">
                        Requests
                      </a>
                    </li>
                    <li className="nav-item mx-3">
                      <a className="nav-link " href="#">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                {user ? null : (
                  <form className="d-flex" role="search">
                    <Link href={"/login"}>
                      <button
                        className="btn btn-outline-success me-2"
                        type="submit"
                        style={{
                          backgroundColor: "white",
                          borderColor: "#0F4392",
                          color: "#0F4392",
                          width: "100px",
                        }}
                      >
                        sign in
                      </button>
                    </Link>

                    <button
                      className="btn btn-outline-success"
                      style={{
                        color: "white",
                        backgroundColor: "#0F4392",
                        width: "100px",
                      }}
                      type="submit"
                    >
                      sign up
                    </button>
                  </form>
                )}
              </div>
            </div>
          </nav>
        </div>

        <div
          class="input-group mb-3 position-relative mt-3 d-flex justify-content-center align-items-center flex-column"
          style={{ width: "100%" }}
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
        <div style={{ marginRight: "20px" }}>
          <Image
            //  className="w-20"
            src={cart}
            alt="Next.js Logo"
            width={200}
            height={180}
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
              return <CategorySliderDesk item={item} text="All medicines" />;
            })}
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center flex-column mb-5 mt-5  "
        style={{ width: "100%" }}
      >
        <h5 style={{ marginBottom: 0, color: "#0F4392" }}> Our services</h5>

        <div
          className="d-flex justify-content-center align-items-center  mt-5 boxshadow boxshadow"
          style={{ width: "78%" }}
        >
          <OurServicesCard />
          <OurServicesCard />
          <OurServicesCard />
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
          <div className="boxshadow ">
            <Testimonialdesk />
          </div>
          <div className="boxshadow mx-2">
            <Testimonialdesk />
          </div>
          <div className="boxshadow ">
            <Testimonialdesk />
          </div>
        </div>
      </div>

      <div
        className=" mt-3 d-flex justify-content-center align-items-center flex-column w-100 "
        style={{ width: "100%" }}
      >
        <h5 style={{ color: "#0F4392", fontSize: "14px !important" }}>
          Check all reviews
        </h5>
        <FooterDesk />
      </div>
    </div>
  );
};

export default desktop;
