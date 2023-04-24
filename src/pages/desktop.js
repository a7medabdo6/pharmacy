import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import ver from "../assets/desk/ver.png";
import logo2 from "../assets/img/logo2.png";
import ReactPhoneInput from "react-phone-input-2";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const desktop = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-start   w-100"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex justify-content-start align-items-start flex-column mt-5 mx-5  w-100">
        <div className="w-100">
          <nav className="navbar navbar-expand-lg bg-body-tertiary boxshadow w-100">
            <div className="container-fluid">
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
                <form className="d-flex" role="search">
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
              </div>
            </div>
          </nav>
        </div>

        <div
          class="input-group mb-3  mt-3 d-flex justify-content-center align-items-start flex-column"
          style={{ width: "100%" }}
        >
          <input
            type="text"
            style={{
              backgroundColor: "#FAFBFB",
              borderRadius: "10px",
            }}
            className="form-control w-100 inputsearch"
            placeholder="Search products"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
    </div>
  );
};

export default desktop;
