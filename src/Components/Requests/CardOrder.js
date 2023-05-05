import React from "react";
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

const CardOrder = () => {
  return (
    <div
      className="w-100 d-flex -justify-content-start align-items-center mt-3"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        height: "148px",
      }}
    >
      <div
        className="m-3"
        style={{
          border: "1px solid grey",
          borderRadius: "5px",
          height: "116px",
        }}
      >
        <Image
          //  className="w-20"
          src={telfast}
          alt="Next.js Logo"
          width={100}
          height={116}
          priority
          className="py-3 px-0"
        />
      </div>

      <div>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <h5 style={{ fontSize: "16px", fontWeight: "bold" }} className="mb-1">
            telfast 180gm
          </h5>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ fontSize: 15, color: "red", marginRight: "20px" }}
          />
        </div>

        <p
          className={styles.heddin}
          style={{ color: "grey", fontSize: "12px" }}
        >
          loremtelfast loremtelfast loremtelfast orem hand band extintion in
          hand go our band loremtelfast loremtelfast loremtelfast orem hand band
          extintion in hand go our bandloremtelfast loremtelfast loremtelfast
          orem hand band extintion in hand go our band
        </p>
        <div className="d-flex justify-content-start align-items-center">
          <button
            style={{
              width: "36px",
              height: "32px",
              backgroundColor: "#0F4392",
              borderRadius: "5px 0px 0px 5px",
              border: "none",
              color: "white",
            }}
          >
            +
          </button>

          <h5
            className="my-0 d-flex justify-content-center align-items-center "
            style={{
              backgroundColor: "#EEEEEE",
              width: "64px",
              height: "32px",
            }}
          >
            3
          </h5>
          <button
            style={{
              width: "36px",
              height: "32px",
              backgroundColor: "#0F4392",
              borderRadius: "0px 5px 5px 0px",
              border: "none",
              color: "white",
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
