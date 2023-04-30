import Image from "next/image";
import React from "react";
import usertesty from "../../assets/img/usertesty.png";

function Testimonialdesk() {
  return (
    <div
      className="  p-3 d-flex justify-content-start align-items-start "
      style={{ backgroundColor: "white" }}
    >
      <Image
        //  className="w-20"
        src={usertesty}
        alt="Next.js Logo"
        width={40}
        height={40}
        priority
      />
      <div
        className=" m-2 mt-0 d-flex justify-content-start align-items-start flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h3
          className="text-primary mb-1"
          style={{ fontSize: "14px !important" }}
        >
          User Name
        </h3>
        <div className="d-flex mb-2 justify-content-start align-items-start ">
          <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i>
        </div>

        <p className="text-dark" style={{ fontSize: "10px !important" }}>
          {" "}
          “Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”
        </p>
      </div>
    </div>
  );
}

export default Testimonialdesk;
