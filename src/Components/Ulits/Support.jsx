import React from "react";
import Image from "next/image";
import support from "../../assets/img/contact_support.png";
import Link from "next/link";

const Support = () => {
  return (
    <Link
      href="/contactus"
      style={{
        position: "absolute",
        right: "0",
        top: "85%",
        cursor: "pointer",
      }}
      className="support-btn"
    >
      <Image src={support} />
    </Link>
  );
};

export default Support;
