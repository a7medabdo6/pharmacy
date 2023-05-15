import React, { useEffect } from "react";
import styles from "@/styles/contact.module.css";
import Header from "../../../../Components/Ulits/Header";
import NavBar from "../../../../Components/desk/NavBar";
import iconfilter from "../../../../assets/img/iconfilter.png";
import panadol from "../../../../assets/img/pnadol.png";
import { useSelector, useDispatch } from "react-redux";
import FooterDesk from "../../../../Components/desk/FooterDesk";

import { useState } from "react";
import ModalContent from "../../../../Components/Ulits/ModalContent";
import Slideshow from "../../../../Components/Slideshow";
import ButtonProductDetails from "../../../../Components/Ulits/ButtonProductDetails";
import Link from "next/link";
import NavBarMobail from "../../../../Components/desk/NavBarMobail";
import Image from "next/image";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import SearchInput from "../../../../Components/products/SearchInput";
import SerachBar from "../../../../Components/SerachBar";
import SliderProductDetails from "../../../../Components/products/SliderProductDetails";
import Quantity from "../../../../Components/Ulits/Quantity";

const productdetails = () => {
  const [isOpen, setOpen] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to
  const details = useSelector((state) => state.ProductDetails.details);

  useEffect(() => {
    console.log(details, "details");
  }, [details]);
  return (
    <div className="product-details mb-2">
      <NavBar />
      <NavBarMobail titlePage="Products details" />

      <Container className="mt-3 pb-5">
        <Breadcrumb
          style={{ fontSize: "12px" }}
          className="d-none d-lg-block mt-3"
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Our products</Breadcrumb.Item>
          <Breadcrumb.Item active>Products details</Breadcrumb.Item>
        </Breadcrumb>
        <SerachBar showBigScreen={true} />

        <h1
          className="text-center h3 my-4 d-none d-lg-block fw-bold"
          style={{ color: "#0F4392" }}
        >
          Product details
        </h1>

        <Row>
          <Col sm={12} md={6}>
            <SliderProductDetails />
          </Col>
          <Col sm={12} md={6}>
            <div className="details mt-4 mt-lg-0">
              <div className="top">
                <h6 className="fw-bold mb-1" style={{ fontSize: "1.2rem" }}>
                  Product category
                </h6>
                <h2 className="mt-4 mb-2">Panadol Extra XX mg</h2>
                <p style={{ fontSize: "1.5rem", color: "#828282" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                {isRequest ? (
                  <Quantity />
                ) : (
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => setIsRequest(true)}
                  >
                    Make a request
                  </button>
                )}
              </div>
              <div className="bottom mt-3">
                <h6
                  className="fw-bold mb-1 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Product details
                </h6>
                <h3 className="mt-4 mb-2">Panadol Extra XX mg</h3>
                <p className="mb-1 fs-5">Brand: Lorem Ipsum</p>
                <p className="mb-1 fs-5">Active ingredients : Lorem Ipsum</p>
                <p className="mb-1 fs-5">Use: Lorem Ipsum</p>
                <p className="mb-1 fs-5">Russian similar: Lorem Ipsum</p>
                <p
                  className="mb-1 fs-5"
                  style={{ fontSize: "1.5rem", color: "#4f4f4f" }}
                >
                  Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <FooterDesk />
    </div>
  );
};

export default productdetails;
