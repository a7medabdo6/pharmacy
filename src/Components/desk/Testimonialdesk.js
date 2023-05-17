import Image from "next/image";
import React, { useState } from "react";
import usertesty from "../../assets/img/usertesty.png";
import Rateing from "../../Components/Ulits/Rateing";

function Testimonialdesk({ item }) {
  const [rate, setrate] = useState();
  const [img, setimg] = useState(item?.file.toString());
  console.log(img);
  return (
    <div
      className="p-3 d-flex justify-content-start align-items-start m-2 rounded-3"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
        width: "366px",
        height: "135px",
      }}
    >
      <Image
        src={item?.file}
        alt="Next.js Logo"
        width={30}
        height={30}
        style={{ marginTop: "7px", width: "50px", height: "50px" }}
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
        <div className="d-flex mb-2 justify-content-start align-items-start">
          <Rateing setrate={undefined} Val={item?.rate} />
        </div>

        <p className="text-dark" style={{ fontSize: "10px !important" }}>
          {item?.description}
        </p>
      </div>
    </div>
  );
}

export default Testimonialdesk;
