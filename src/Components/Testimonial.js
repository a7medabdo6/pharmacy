import Image from "next/image";
import React from "react";
import usertesty from "../assets/img/usertesty.png";
import Rateing from "./Ulits/Rateing";

function Testimonial({ item }) {
  return (
    <div
      className=" mt-2 p-3 d-flex justify-content-start align-items-start"
      style={{ backgroundColor: "white", borderRadius: 10, width: "95%" }}
    >
      <Image
        //  className="w-20"
        src={item?.file}
        alt="Next.js Logo"
        width={40}
        height={40}
        priority
      />
      <div
        className=" m-2 mt-0 d-flex justify-content-start align-items-start flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="text-primary mb-1">User Name</h3>
        <Rateing setrate={undefined} Val={item?.rate} />

        <p className="text-dark"> {item?.description}</p>
      </div>
    </div>
  );
}

export default Testimonial;
