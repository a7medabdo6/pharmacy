import React, { useState } from "react";
import styles from "@/styles/Tracking.module.css";
import StepProgress from "../Components/Ulits/StepProgressBar";
import Group from "../assets/img/Group.png";
import Image from "next/image";
import Group2 from "../assets/img/Group2.png";
import vector from "../assets/img/vector.png";
import NavBarMobail from "../Components/desk/NavBarMobail";
import NavBar from "../Components/desk/NavBar";
import FooterDesk from "../Components/desk/FooterDesk";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";
import { Breadcrumb, Container } from "react-bootstrap";
import Link from "next/link";

const tracking = () => {
  const [value, setvalue] = useState(0);

  return (
    <div style={{ backgroundColor: "#eaeaea" }}>
      <NavBar />
      <NavBarMobail titlePage="Order tracking" />
      <Container>
        <Breadcrumb
          style={{ fontSize: "18px" }}
          className="d-none d-lg-block mt-3"
        >
          <Breadcrumb.Item linkAs={Link} href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href="/products/all">
            Our products
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href="/requests">
            Requests
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href="/confirmation">
            Confirmation
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Order tracking</Breadcrumb.Item>
        </Breadcrumb>
        <main className="w-100 d-flex justify-content-center">
          <div className="d-flex justify-content-center confirm-custom-grey align-items-center flex-column">
            <h4 className="text-primary fs-3">Order Tracking</h4>
            <StepProgress value={value} />
            <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
              {value < 34 && (
                <div className="d-flex w-100 justify-content-center align-items-center m-4 flex-column">
                  <Image
                    src={Group}
                    className="me-5"
                    style={{
                      marginBottom: "20px",
                      width: "100%",
                    }}
                    alt="Next.js Logo"
                    width="100%"
                    height="100%"
                    priority
                  />
                  <div className="w-95 text-center d-flex justify-content-center align-items-center flex-column">
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.
                    </p>
                  </div>

                  <div className="w-100">
                    <div className="w-100">
                      <button
                        className="btn  btn-primary mt-5  pr-5 pl-5"
                        style={{ fontSize: "20px", width: "90%" }}
                      >
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
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.{" "}
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
                <div className="d-flex w-100 justify-content-center align-items-center flex-column">
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
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.{" "}
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
                <div className="d-flex justify-content-center align-items-center flex-column">
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
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.{" "}
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
      </Container>
      <FooterDesk />
      <WriteReview />
      <Support />
    </div>
  );
};

export default tracking;
