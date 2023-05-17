import React, { useState } from "react";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import NavBar from "../Components/desk/NavBar";
import NavBarMobaile from "../Components/desk/NavBarMobail";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

const allreview = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const myStyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)", // define the box shadow
    padding: "10px",
    backgroundColor: "#f0f0f0",
  };
  return (
    <>
      <NavBar />
      <NavBarMobaile titlePage="Testimonials" />

      <Container className="padding-bottom-sm">
        <Breadcrumb
          style={{ fontSize: "18px" }}
          className="d-none d-lg-block mt-3"
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>All reviews</Breadcrumb.Item>
        </Breadcrumb>

        <h1
          className="text-center h3 my-4 d-none d-lg-block fw-bold"
          style={{ color: "#0F4392" }}
        >
          All reviews
        </h1>

        <Row>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
          <Col md={4}>
            <Testimonialdesk />
          </Col>
        </Row>
      </Container>

      <div
        className="actio p-4 bg-white position-fixed bottom-0 start-0 w-100 d-block d-md-none"
        style={{ boxShadow: "0px -18px 40px 0px #00000033" }}
      >
        <button className="btn btn-primary w-100">Write a review</button>
      </div>
    </>
  );
};

export default allreview;
