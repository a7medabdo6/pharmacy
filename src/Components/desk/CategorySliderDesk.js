import Image from "next/image";
import React from "react";
import Category from "../../assets/img/category.png";

function CategorySliderDesk({ text }) {
  return (
    <div className=" position-relative" style={{ bottom: "20px" }}>
      <div className=" mt-5 m-4  d-flex justify-content-center align-items-center flex-wrap">
        <div className="CategorySliderCarddesk position-relative">
          <Image
            className=" product"
            src={Category}
            alt="Next.js Logo"
            width={150}
            height={100}
            priority
          />
        </div>
      </div>
      <h6
        style={{
          transform: "rotate(0deg)",
          fontSize: "13px !important",
          bottom: "-22px",
          zIndex: 5,
        }}
        className="position-absolute w-100 d-flex justify-content-center align-items-center"
      >
        {text}
      </h6>
    </div>
  );
}

export default CategorySliderDesk;