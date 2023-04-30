import React from "react";
import styles from "@/styles/products.module.css";
import Image from "next/image";
import { setProductDetails } from "../../Slices/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import ButtonMak from "./ButtonMak";
import { useEffect } from "react";

const CardProduct = ({ item, id }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onCardClick = () => {
    router.push(`/products/${id}/details/${item?.id}`);
    dispatch(setProductDetails(item));
  };

  return (
    <div className={styles.boxcardprdoduct} onClick={onCardClick}>
      <div>
        <Image
          //  className="w-20"
          loader={() => item?.home_image}
          src={item?.home_image}
          className={styles.cardproductImage}
          alt="Next.js Logo"
          width={92}
          height={112}
          priority
        />
      </div>
      <div className={styles.boxinfo}>
        <p className={styles.titlecard}>{item?.name}</p>
        <p className={styles.txtcard}>{item?.description}</p>
      </div>
      <ButtonMak
        txtColor="white"
        bckColor="#0F4392"
        BRColor="#0F4392"
        text="Make a request"
      />
      {item?.description === true ? (
        <div className={styles.discount}>
          <p style={{ color: "#0F4392", fontSize: "10px" }}>-10 %</p>
        </div>
      ) : null}
    </div>
  );
};

export default CardProduct;
