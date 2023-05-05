import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/verification.module.css";

import verification from "../assets/img/verification.png";
import Left from "../assets/img/Left.png";

import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Link from "next/link";
import ver from "../assets/desk/ver.png";
import well from "../assets/desk/well.png";
import { useRouter } from "next/router";
import left from "../assets/img/Leftwhite.png";

export default function Home() {
  const [phone, setphone] = useState("us");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className=" text-center" style={{ backgroundColor: "white" }}>
      <div className="row">
        <div className="d-sm-none">
          {" "}
          <>
            <main className={styles.main}>
              <div
                className="w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center "
                style={{
                  backgroundColor: "#0F4392",
                  borderRadius: 10,
                  height: "117px",
                  position: "relative",
                }}
              >
                <div className="w-100 d-flex justify-content-between align-items-center ">
                  <div
                    onClick={handleBack}
                    className="d-flex justify-content-center align-items-center ms-3"
                    style={{
                      border: "1px solid white",
                      borderRadius: "5px",
                      width: "32px",
                      height: "25px",
                    }}
                  >
                    <Image
                      //  className="w-20"
                      src={left}
                      alt="Next.js Logo"
                      width={14}
                      height={16}
                      priority
                    />
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center me-5 ">
                    <h3
                      style={{
                        color: "white",
                        margin: "0px",
                        fontWeight: "500",
                      }}
                    >
                      Verification
                    </h3>
                  </div>
                </div>
              </div>
              <div className={styles.background}>
                <Image
                  className={styles.welcome}
                  src={verification}
                  alt="Next.js Logo"
                  width={100}
                  height={37}
                  priority
                />
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h5 className="m-3 text-center">
                  Please enter the code that have been sent to
                  <span className="text-primary">22655987411236</span>{" "}
                </h5>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  width: " 90%",
                  borderRadius: "15px",
                  marginBlock: "20px",
                }}
              >
                <form className="d-flex justify-content-center  flex-column w-100">
                  <div className="d-flex justify-content-center  flex-row">
                    <div className="form-group m-2" style={{ width: "55px" }}>
                      <input
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                    </div>
                    <div className="form-group m-2" style={{ width: "55px" }}>
                      <input
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                    </div>
                    <div className="form-group m-2" style={{ width: "55px" }}>
                      <input
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                    </div>
                    <div className="form-group m-2" style={{ width: "55px" }}>
                      <input
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <Link href="/login" className="w-100">
                    <button
                      type="submit"
                      className="btn btn-primary mb-3 mt-3 w-100"
                    >
                      Next
                    </button>
                  </Link>
                </form>
              </div>

              <p className="m-1">Didn’t receive the code?</p>
              <p className="text-primary">Resend code</p>
            </main>
          </>{" "}
        </div>
        <div className="d-none d-md-block">
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ minHeight: "100vh" }}
          >
            <div className="divlogosignup">
              <Image
                src={well}
                alt="Next.js Logo"
                className="logowell"
                //   width={381}
                //   height={122}
                priority
              />

              <Image src={ver} alt="Next Logo" className="logoFrame" priority />
            </div>

            <div className="divsignup d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h5 className="m-3 font-xs-16">Welcome to Well Medic</h5>
                <h6
                  style={{ color: "red", marginBottom: "45px", marginTop: 0 }}
                >
                  live healthy … live well
                </h6>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  backgroundColor: "rgba(15, 67, 146, 0.07)",
                  borderRadius: "3%",
                  width: "75%",
                }}
              >
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h3
                    className="text-primary mt-3"
                    style={{ fontSize: "20px" }}
                  >
                    Verification
                  </h3>{" "}
                  <h4 className="m-3 large text-center titlever">
                    Please enter the code that have been sent to{" "}
                    <span className="text-primary">22655987411236</span>{" "}
                  </h4>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{
                    width: " 90%",
                    borderRadius: "15px",
                    marginBlock: "20px",
                  }}
                >
                  <form className="d-flex justify-content-center  flex-column w-100">
                    <div className="d-flex justify-content-center  flex-row">
                      <div className="form-group m-2" style={{ width: "55px" }}>
                        <input
                          type="text"
                          className="form-control p-2 text-center"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="0"
                        />
                      </div>
                      <div className="form-group m-2" style={{ width: "55px" }}>
                        <input
                          type="text"
                          className="form-control p-2 text-center"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="0"
                        />
                      </div>
                      <div className="form-group m-2" style={{ width: "55px" }}>
                        <input
                          type="text"
                          className="form-control p-2 text-center"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="0"
                        />
                      </div>
                      <div className="form-group m-2" style={{ width: "55px" }}>
                        <input
                          type="text"
                          className="form-control p-2 text-center"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    <Link href="/login" className="w-100">
                      <button
                        type="submit"
                        className="btn btn-primary mb-3 mt-3 w-100"
                      >
                        Verify
                      </button>
                    </Link>
                  </form>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-3 ">
                  <p className="me-4 mb-0">Didn’t receive the code?</p>
                  <p className="text-primary ms-4 mb-0">Resend code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
