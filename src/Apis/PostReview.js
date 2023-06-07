import useNotifications from "@/Components/Notification";
import axios from "axios";
import { useEffect, useState } from "react";

async function PostReview(formdata) {
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
      "http://167.71.53.196/reviews/",
      formdata,
      config
    );
    console.log(response.data);
    showNotification(`Review Sent Successfuly`, "success");

    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default PostReview;
