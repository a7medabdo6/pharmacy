import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo2 from "../../assets/img/logo2.png";
import alertblue from "../../assets/img/alertblue.png";
import profile from "../../assets/img/icon.png";
import Link from "next/link";

const NavBar = () => {
  // const token = JSON.parse(localStorage.getItem("token"));
  const [user, setuser] = useState(null);
  const [showNotify, setShowNotify] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(localStorage?.getItem("user"));
    }
  }, []);
  return (
    <nav
      class="navbar navbar-expand-lg bg-white d-none d-lg-block"
      style={{
        boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div class="container">
        <Link class="navbar-brand" href="/">
          <Image
            src={logo2}
            alt="Next.js Logo"
            width={50}
            height={30}
            priority
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/products/all">
                Our Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/requests">
                Requests
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/contactus">
                Contact us
              </Link>
            </li>
          </ul>
          <div class="d-flex justify-content-center align-items-center gap-3">
            {user ? (
              <>
                <div
                  className="position-relative"
                  onClick={() => setShowNotify(true)}
                >
                  <Image
                    src={alertblue}
                    alt="Next.js Logo"
                    width={19}
                    height={24}
                    priority
                  />
                  <div
                    className="position-absolute text-white rounded-5 d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "red",
                      top: "-5px",
                      left: "-8px",
                      width: "15px",
                      height: "15px",
                      fontSize: "10px",
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
                        fontSize: "15px",
                      }}
                    >
                      <h6 className="text-primary text-end fw-bold">
                        Make all as read
                      </h6>

                      <h6 className="fw-bold">New</h6>
                    </div>
                  )}
                </div>
                <div
                  className="d-flex justify-content-center align-items-center rounded-5"
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#0F4392",
                  }}
                >
                  <Image
                    src={profile}
                    alt="Next.js Logo"
                    width={15}
                    height={15}
                    priority
                  />
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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
