import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import telfast from "../../assets/img/telfast.webp";
import Quantity from "../Ulits/Quantity";

const CardOrderDesk = () => {
  return (
    <div
      className="w-100 d-flex justify-content-start align-items-center mt-3 pe-3"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        height: "164px",
        position: "relative",
      }}
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        style={{
          fontSize: 15,
          color: "red",
          marginRight: "20px",
          top: "13px",
          right: "-5px",
          position: "absolute",
        }}
      />

      <Row className="align-items-center">
        <Col md={4}>
          <div
            className="m-3"
            style={{
              borderRadius: "5px",
              display: "flex",
              width: "145px",
              height: "80%",
              justifyContent: "center",
              border: "1px solid #C9CCCF",
            }}
          >
            <Image
              src={telfast}
              alt="Next.js Logo"
              width={100}
              height={116}
              style={{ width: "100%", height: "100%" }}
              priority
            />
          </div>
        </Col>
        <Col md={8}>
          <div>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>
                Telfast 180mg
              </h5>
            </div>

            <p style={{ color: "grey", fontSize: "12px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempo Lorem ipsum dolor sit amet, co....
            </p>
            <Quantity />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardOrderDesk;
