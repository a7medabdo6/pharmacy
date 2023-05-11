import Image from "next/image";
import React from "react";
import Category from "../assets/img/category.png";
import Link from "next/link";

function CategorySliderCard({ item }) {
  return (
    <Link href={`/products/${item?.id}`}>
      <div className=" mt-5 m-4 flex-column d-flex justify-content-center align-items-center flex-wrap">
        <div className="CategorySliderCard">
          <Image
            className=" product"
            src={item?.icon_image}
            alt="Next.js Logo"
            width={150}
            height={100}
            priority
          />
        </div>
        <div className="mt-4" style={{ color: "black" }}>
          {item?.name}
        </div>
      </div>
    </Link>
  );
}

export default CategorySliderCard;
