import React, { useState } from "react";
import styles from "@/styles/Tracking.module.css";
import Header from "../Components/Ulits/Header";
import StepProgress from "../Components/Ulits/StepProgressBar";
import Group2 from "../assets/img/Group2.png";
import ButtonTrack from "../Components/tracking/ButtonTrack";
import Image from "next/image";
import vector from "../assets/img/vector.png";
import Group from "../assets/img/Group.png";

import NavBar from "../Components/desk/NavBar";
const trackingway = () => {
  const [value, setvalue] = useState(35);

  return (
    <main
      style={{
        backgroundColor: "#EDEDED",
        width: "100%",
        margin: "auto",
        height: "100%",
      }}
      className="d-flex  align-items-center flex-column"
    >
      <div className="d-block d-sm-none w-100">
        <Header title="Order tracking" />
      </div>

      <div className="d-none d-sm-block w-100 ">
        <NavBar />
      </div>
      <div className="d-flex justify-content-center confirm-custom-grey align-items-center flex-column">
        <h5 className="text-primary">Order Tracking</h5>
        <StepProgress value={value} />
        <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
          {value < 34 && (
            <div className="d-flex w-100 justify-content-center align-items-center  m-4 flex-column">
              <Image
                //  className="w-20"
                src={Group}
                className="me-5"
                style={{
                  marginBottom: "30px",
                  marginLeft: "25px",
                  width: "100%",
                }}
                alt="Next.js Logo"
                width="100%"
                height="100%"
                priority
              />
              <div className="w-80 text-center d-flex justify-content-center align-items-center flex-column">
                <p className={styles.title}>
                  Your order has een delivered successfully. We wish you speedy
                  recovery.{" "}
                </p>
              </div>

              <div className="w-100">
                <div className="w-100">
                  <button
                    className="btn  btn-primary mt-5  pr-5 pl-5"
                    style={{ fontSize: "20px", width: "90%" }}
                  >
                    {" "}
                    Back to our products
                  </button>
                </div>
              </div>
            </div>
          )}
          {value == 35 && (
            <div className="d-flex w-100 justify-content-center align-items-center  m-4 flex-column">
              <Image
                //  className="w-20"
                src={Group}
                className="me-5"
                style={{
                  marginBottom: "30px",
                  marginLeft: "25px",
                  width: "100%",
                }}
                alt="Next.js Logo"
                width="100%"
                height="100%"
                priority
              />
              <div className="w-80 text-center d-flex justify-content-center align-items-center flex-column">
                <p className={styles.title}>
                  Your order has een delivered successfully. We wish you speedy
                  recovery.{" "}
                </p>
              </div>

              <div className="w-100">
                <div className="w-100">
                  <button
                    className="btn  btn-primary mt-5  pr-5 pl-5"
                    style={{ fontSize: "20px", width: "90%" }}
                  >
                    {" "}
                    Back to our products
                  </button>
                </div>
              </div>
            </div>
          )}
          {value == 70 && (
            <div className="d-flex w-100 justify-content-center align-items-center  flex-column">
              <Image
                //  className="w-20"
                src={Group2}
                className="me-5"
                style={{
                  marginBottom: "30px",
                  marginLeft: "25px",
                  width: "100%",
                }}
                alt="Next.js Logo"
                width="100%"
                height="100%"
                priority
              />
              <div className="w-80 text-center d-flex justify-content-center align-items-center flex-column">
                <p className={styles.title}>
                  Your order has een delivered successfully. We wish you speedy
                  recovery.{" "}
                </p>
              </div>

              <div className="w-100">
                <div className="w-100">
                  <button
                    className="btn w-100 btn-primary mt-5  pr-5 pl-5"
                    style={{ fontSize: "20px" }}
                  >
                    {" "}
                    Back to our products
                  </button>
                </div>
              </div>
            </div>
          )}
          {value == 100 && (
            <div className="d-flex justify-content-center align-items-center  flex-column">
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
              <div className="w-80 text-center d-flex justify-content-center align-items-center flex-column">
                <p className={styles.title}>
                  Your order has een delivered successfully. We wish you speedy
                  recovery.{" "}
                </p>
              </div>
              <div className="w-100">
                <button
                  className="btn w-100 btn-primary mt-5  pr-5 pl-5"
                  style={{ fontSize: "20px" }}
                >
                  Write a review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default trackingway;
