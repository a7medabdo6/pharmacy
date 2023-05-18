import React from "react";
import Image from "next/image";
import support from "../../assets/img/contact_support.png";

const Support = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: "0",
        top: "85%",
        cursor: "pointer",
      }}
      className="support-btn"
    >
      <Image src={support} />
    </div>
  );
};

export default Support;
