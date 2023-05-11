import Image from "next/image";
import React from "react";
import Category from "../../assets/img/category.png";
import Link from "next/link";

function CategorySliderDesk({ item }) {
  return (
    <Link href={`/products/${item?.id}`}>
      <div className=" position-relative" style={{ bottom: "20px" }}>
        <div className=" mt-5 m-4  d-flex justify-content-center align-items-center flex-wrap">
          <div className="CategorySliderCarddesk position-relative">
            <Image
              className=" product"
              src={item?.icon_image}
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
            bottom: "22px",
            zIndex: 5,
            color: "black",
          }}
          className=" w-100 d-flex justify-content-center align-items-center"
        >
          {item.name}
        </h6>
      </div>
    </Link>
  );
}

export default CategorySliderDesk;
