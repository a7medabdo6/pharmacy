import Image from "next/image";
import React from "react";

function OurServicesCard({ image, desc, title }) {
  return (
    <div className="w-100   pb-4 d-flex justify-content-center align-items-center flex-column">
      <div
        style={{ width: "95%" }}
        className="OurServicesCard   align-items-start "
      >
        <Image
          className=" Service"
          src={image}
          width={152}
          height={104}
          alt="Next.js Logo"
        />
        <div className=" d-flex flex-column justify-content-start align-items-start ms-3 ">
          <p className="text-service text-primary">{title}</p>
          <p className="info-card">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default OurServicesCard;
