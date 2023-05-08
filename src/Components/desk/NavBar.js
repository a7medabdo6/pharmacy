import React from "react";
import Image from "next/image";
import logo2 from "../../assets/img/logo2.png";
import Link from "next/link";

const NavBar = () => {
  // const token = JSON.parse(localStorage.getItem("token"));
  


    
  return (
    <div className="w-100" style={{ backgroundColor: "white" }}>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary  w-100"
        style={{ boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.06)" }}
      >
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-3 d-flex justify-content-between align-items-center ">
                  <Link
                    href="/"
                    className="d-flex justify-content-between align-items-center "
                  >
                    {" "}
                    Our Products
                  </Link>
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
  );
};

export default NavBar;
