import axios from "axios";
import useNotifications from "../Components//Notification";
import { useRouter } from "next/router";

export const Register = async (credentials) => {
  const { showNotification } = useNotifications();
  try {
    const response = await axios.post(
      "https://d465-41-239-186-167.ngrok-free.appaccounts/register/",
      credentials
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User Registered Successfuly`, "success");
    setTimeout(() => {
      window.location.replace("/login");
    }, 2000);
    return response.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error?.response?.data[key])}`,
        "error"
      );
    }
  }
};

export const loginUser = async (credentials) => {
  const { showNotification } = useNotifications();

  try {
    const response = await axios.post(
      "https://d465-41-239-186-167.ngrok-free.appaccounts/login/",
      credentials
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User Login Successfuly`, "success");
    return response.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error?.response?.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
};
export const GetHotels = async (credentials) => {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.apphotels/"
    );

    return response.data;
  } catch (error) {
    // throw new Error(error.response.data.message);
  }
};
export const GetHotelsDetails = async (credentials) => {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.apphotels/" +
        credentials?.hotel_id
    );

    return response.data;
  } catch (error) {
    // throw new Error(error.response.data.message);
  }
};

export const GetRooms = async (credentials) => {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.apphotels/rooms/"
    );

    return response.data;
  } catch (error) {}
};
export const updateUser = async (credentials) => {
  const { showNotification } = useNotifications();
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.patch(
      "https://d465-41-239-186-167.ngrok-free.appaccounts/update_profile/" +
        credentials?.id +
        "/",
      credentials,
      config
    );
    console.log(response.data);
    //localStorage.setItem("user", JSON.stringify(response.data));
    // localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User updated Successfuly`, "success");
    return response.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
};
