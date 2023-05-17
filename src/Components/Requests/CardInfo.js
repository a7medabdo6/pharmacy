import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
const CardInfo = ({ user }) => {
  return (
    <div
      className="w-100 d-flex -justify-content-start align-items-center"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <div className="w-100 m-3">
        <div className="d-flex justify-content-between flex-row align-items-center mb-3">
          <div className="d-flex justify-content-start flex-row align-items-center ">
            <p
              className="mb-0"
              style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
            >
              Name:{" "}
              <span style={{ color: "#DD1717", fontSize: "17px" }}>
                Shorouq Hossam
              </span>
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faPen}
              style={{ fontSize: 15, color: "#0F4392" }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-start flex-row align-items-center mb-3">
          <div className="d-flex justify-content-center flex-row align-items-center ">
            <p
              className="mb-0"
              style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
            >
              Hotel:{" "}
              <span style={{ color: "#DD1717", fontSize: "17px" }}>
                Marriott
              </span>
            </p>
          </div>

          <div className="d-flex justify-content-center flex-row align-items-center ms-5">
            <p
              className="mb-0"
              style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
            >
              Room Number: <span style={{ color: "#DD1717" }}>A107</span>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-start flex-row align-items-center mb-3">
          <p
            className="mb-0"
            style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
          >
            Phone Number:{" "}
            <span style={{ color: "#DD1717" }}>(+20)01202255222</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
