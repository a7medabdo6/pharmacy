import useNotifications from "../Components//Notification";
import axios from "axios";
import { useEffect, useState } from "react";

export async function GetNotification(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();
  if (!token) {
    return null;
  }
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "http://46.101.241.139/notification/",

      config
    );
    return response.data;
  } catch (error) {
    for (const key in error.response.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
}
export async function MakeNotificationRead(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `http://46.101.241.139/notification/`,
      {},
      config
    );
    // showNotification(`Item Deleted Successfuly`, "success");
    return response.data;
  } catch (error) {
    console.log(error.response);
    // for (const key in error.response.data) {
    //   showNotification(
    //     `${(key.toUpperCase(), error.response.data[key])}`,
    //     "error"
    //   );
    // }
  }
}