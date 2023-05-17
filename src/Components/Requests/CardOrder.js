import React, { useState } from "react";
import Image from "next/image";
import telfast from "../../assets/img/telfast.webp";
import ButtonRequests from "./ButtonRequests";
import styles from "@/styles/requests.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import PostCart from "@/Apis/Cart/PostCart";
import Quantity from "../Ulits/Quantity";
import { Col, Row } from "react-bootstrap";

const CardOrder = ({ item }) => {
  const [imag, setimag] = useState(item?.product?.home_image);
  const [count, setcount] = useState(item?.quantity);
  const [quantity, setquantity] = useState(count);
  const [id, setid] = useState(item?.product?.id);

  const SendCartFundes = async (e) => {
    // e.preventDefault();

    const formData = {
      product: id,
      quantity: -1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };

  const SendCartFunplus = async (e) => {
    // e.preventDefault();

    const formData = {
      product: id,
      quantity: 1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };

  const increase = () => {
    setid(item?.product?.id);

    setcount(count + 1);
    console.log(id);
    console.log(item);
    if (item) SendCartFunplus();
  };
  const desincrease = () => {
    setid(item?.product?.id);

    setcount(count - 1);
    if (item) SendCartFundes();
  };
  return (
    <div
      className="w-100 d-flex justify-content-start align-items-center mt-3 pe-3"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        height: "148px",
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

      <Row>
        <Col xs={5}>
          <div
            className="m-3"
            style={{
              borderRadius: "5px",
              display: "flex",
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
              className=""
            />
          </div>
        </Col>
        <Col xs={7}>
          <div>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <h5 style={{ fontSize: "16px", fontWeight: "bold" }} className="">
                Telfast 180mg
              </h5>
            </div>

            <p
              className={styles.heddin}
              style={{ color: "grey", fontSize: "12px" }}
            >
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

export default CardOrder;
