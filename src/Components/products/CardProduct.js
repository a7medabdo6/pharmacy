import React from "react";
import styles from "@/styles/products.module.css";
import Image from "next/image";
import { setProductDetails } from "../../Slices/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import ButtonMak from "./ButtonMak";
import { useEffect } from "react";
import PostCart from "../../Apis/Cart/PostCart";

const CardProduct = ({ item, id }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onCardClick = () => {
    router.push(`/products/${id}/details/${item?.id}`);
    dispatch(setProductDetails(item));
  };
  const SendCartFun = async (e) => {
    e.preventDefault();

 const formData = {
  "product":id,
  "quantity":1
}

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };
  return (
    <div className={styles.boxcardprdoduct} onClick={onCardClick}>
      <Image
        //  className="w-20"
        loader={() => item?.home_image}
        src={item?.home_image}
        className={styles.cardproductImage}
        alt="Next.js Logo"
        width={92}
        height={150}
        priority
      />
      <div className={styles.boxinfo}>
        <p className={styles.titlecard}>{item?.name}</p>
        <p className={styles.txtcard}>{item?.description}</p>
      </div>
      <button className="btn btn-primary " onClick={SendCartFun} style={{ width: "90%" }}>
        Make a request
      </button>

      {item?.description === true ? (
        <div className={styles.discount}>
          <p style={{ color: "#0F4392", fontSize: "10px" }}>-10 %</p>
        </div>
      ) : null}
    </div>
  );
};

export default CardProduct;
