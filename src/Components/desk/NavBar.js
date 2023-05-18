import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// CSS Module
import styles from "@/styles/Notifications.module.css";
// IMGS
import logo2 from "../../assets/img/logo2.png";
import alertblue from "../../assets/img/alertblue.png";
import profile from "../../assets/img/icon.png";

const NavBar = () => {
  const [user, setuser] = useState(null);
  const [showNotify, setShowNotify] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setuser(localStorage?.getItem("user"));
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white d-none d-lg-flex"
      style={{
        boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.06)",
        height: "80px",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={logo2}
            alt="Next.js Logo"
            width={80}
            height={50}
            priority
          />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              className={`${router.pathname === "/" ? "active" : ""} nav-item`}
            >
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/products/all" ? "active" : ""
              } nav-item`}
            >
              <Link className="nav-link" href="/products/all">
                Our Products
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/requests" ? "active" : ""
              } nav-item`}
            >
              <Link className="nav-link" href="/requests">
                Requests
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/contactus" ? "active" : ""
              } nav-item`}
            >
              <Link className="nav-link" href="/contactus">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center gap-4">
            {user ? (
              <>
                <div
                  className="position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowNotify((old) => !old)}
                >
                  <Image
                    src={alertblue}
                    alt="Next.js Logo"
                    width={30}
                    height={40}
                    priority
                  />
                  <div
                    className="position-absolute text-white rounded-5 d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "red",
                      top: "-5px",
                      left: "-8px",
                      width: "20px",
                      height: "20px",
                      fontSize: "12px",
                    }}
                  >
                    3
                  </div>

                  {showNotify && (
                    <div
                      className="position-absolute bg-white p-3 rounded-3"
                      style={{
                        top: "35px",
                        boxShadow: "0px 18px 40px 0px #00000029",
                        right: "10px",
                        width: "430px",
                        fontSize: "16px",
                        zIndex: "11111",
                      }}
                    >
                      <h6 className="text-primary text-end fw-bold">
                        Make all as read
                      </h6>
                      <div
                        className="box-new-notify pb-3"
                        style={{
                          borderBottom: "0.5px solid #828282",
                        }}
                      >
                        <h6 className="fw-bold mb-4">New</h6>
                        <div className={`${styles.notifyItem} ${styles.new}`}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                          <div
                            className="offer position-absolute"
                            style={{
                              top: "5px",
                              right: "5px",
                              background: "#C3EFB9",
                              color: "#219653",
                              padding: "0 12px",
                              fontSize: "12px",
                              borderRadius: "12px",
                            }}
                          >
                            Offer
                          </div>
                        </div>
                        <div className={`${styles.notifyItem} ${styles.new}`}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                        </div>
                        <div className={`${styles.notifyItem} ${styles.new}`}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                        </div>
                        <div className={`${styles.notifyItem} ${styles.new}`}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                        </div>
                      </div>
                      <div className="box-notify mt-2">
                        <div className={styles.notifyItem}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                          <div
                            className="offer position-absolute"
                            style={{
                              top: "5px",
                              right: "5px",
                              background: "#C3EFB9",
                              color: "#219653",
                              padding: "0 12px",
                              fontSize: "12px",
                              borderRadius: "12px",
                            }}
                          >
                            Offer
                          </div>
                        </div>
                        <div className={styles.notifyItem}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                        </div>
                        <div className={styles.notifyItem}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                        </div>
                        <div className={styles.notifyItem}>
                          Order Placed Successfully. Thank you for shopping with
                          us.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="d-flex justify-content-center align-items-center rounded-5"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#0F4392",
                    cursor: "pointer",
                  }}
                >
                  <Link href={"/edit-info"}>
                    <Image
                      src={profile}
                      alt="Next.js Logo"
                      width={25}
                      height={30}
                      priority
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href={"/login"}
                  className="btn btn-outline-success me-2"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#0F4392",
                    color: "#0F4392",
                    width: "100px",
                  }}
                >
                  sign in
                </Link>

                <Link
                  href={"/register"}
                  className="btn btn-outline-success"
                  style={{
                    color: "white",
                    backgroundColor: "#0F4392",
                    width: "100px",
                  }}
                  type="submit"
                >
                  sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
