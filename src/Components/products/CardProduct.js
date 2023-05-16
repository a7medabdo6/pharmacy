import React, { useState } from "react";
import styles from "@/styles/products.module.css";
import Image from "next/image";
import { setProductDetails } from "../../Slices/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import ButtonMak from "./ButtonMak";
import { useEffect } from "react";
import PostCart from "../../Apis/Cart/PostCart";
import { Button } from "react-bootstrap";

const CardProduct = ({ item, id }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const SendCartFun = async (e) => {
    const formData = {
      product: id,
      quantity: 1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };
  useEffect(() => {
    if (isLoading) {
      SendCartFun().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  const onCardClick = () => {
    router.push(`/products/${id}/details/${item?.id}`);
    dispatch(setProductDetails(item));
  };

  return (
    <div className={`${styles.boxcardprdoduct} px-2`}>
      <div
        style={{ width: "100%", padding: "5px 8px" }}
        className="pb-0"
        onClick={onCardClick}
      >
        <div
          className="d-flex justify-content-center align-items-center w-100 mb-3"
          style={{
            boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.1)",
            borderRadius: "3px",
          }}
        >
          <Image
            loader={() => item?.home_image}
            src={item?.home_image}
            className={styles.cardproductImage}
            alt="Next.js Logo"
            width={100}
            height={150}
            priority
          />
        </div>

        <div className={styles.boxinfo}>
          <p className={styles.titlecard}>{item?.name}</p>
          <p className={styles.txtcard}>{item?.description}</p>
        </div>
      </div>
      <Button
        variant="primary"
        className="w-100"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Make A Request"}
      </Button>
      {item?.description === true ? (
        <div className={styles.discount}>
          <p style={{ color: "#0F4392", fontSize: "10px" }}>-10 %</p>
        </div>
      ) : null}
    </div>
  );
};

export default CardProduct;
