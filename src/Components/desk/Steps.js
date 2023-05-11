import React from "react";
import Image from "next/image";
import step1 from "../../assets/desk/step1.png";

const Steps = ({ imgsource, title, text, desc }) => {
  return (
    <div
      className="d-flex boxsteps justify-content-center align-items-center flex-column   mx-2"
      style={{ minHeight: "383px" }}
    >
      <p
        style={{
          fontSize: "15px !important",

          marginBottom: 0,
          color: "#0F4392",
        }}
      >
        {title}
      </p>
      <p style={{ color: "#0F4392", fontSize: "17px !important" }}> {text}</p>
      <Image
        //  className="w-20"
        src={imgsource}
        // style={{ width: "75%", height: "50%" }}
        alt="Next.js Logo"
        // width={300}
        priority
      />
      <p
        className="text-center mt-3"
        style={{
          color: "#0F4392",
          fontSize: "13px !important",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default Steps;
