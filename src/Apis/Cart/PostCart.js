import useNotifications from "../../Components//Notification";
import axios from "axios";
import { useEffect, useState } from "react";

async function PostCart(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(
      "http://46.101.241.139/cart/cart_items/",
      formdata,
      config
    );
    showNotification(`Item Added Successfuly`, "success");
    return response.data;
  } catch (error) {
    console.log(error.response);
    for (const key in error.response.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
}
export async function CreateOrder(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(
      "http://46.101.241.139/order/",
      formdata,
      config
    );
    showNotification(` Success!`, "success");
    return response.data;
  } catch (error) {
    console.log(error.response);
    for (const key in error.response.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
}
export async function DeleteCart(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.delete(
      `http://46.101.241.139/cart/cart_items/${formdata?.id}`,
      config
    );
    showNotification(`Item Deleted Successfuly`, "success");
    return response.data;
  } catch (error) {
    console.log(error.response);
    for (const key in error.response.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
}

export default PostCart;
