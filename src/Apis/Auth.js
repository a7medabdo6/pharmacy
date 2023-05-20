import axios from "axios";
import useNotifications from "../Components//Notification";
import { useRouter } from "next/router";

export const Register = async (credentials) => {
  const { showNotification } = useNotifications();
  try {
    const response = await axios.post(
      "http://18.130.40.220/accounts/register/",
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
    console.log(error.response);
    for (const key in error.response.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
  }
};

export const loginUser = async (credentials) => {
  const { showNotification } = useNotifications();

  try {
    const response = await axios.post(
      "http://18.130.40.220/accounts/login/",
      credentials
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User Login Successfuly`, "success");
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
};
export const GetHotels = async (credentials) => {
  try {
    const response = await axios.get("http://18.130.40.220/hotels/");

    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
};
export const GetHotelsDetails = async (credentials) => {
  try {
    const response = await axios.get(
      "http://18.130.40.220/hotels/" + credentials?.hotel_id
    );

    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
};

export const GetRooms = async (credentials) => {
  try {
    const response = await axios.get("http://18.130.40.220/hotels/rooms/");

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const updateUser = async (credentials) => {
  const { showNotification } = useNotifications();

  try {
    const response = await axios.patch(
      "http://18.130.40.220/accounts/update_profile/" + credentials?.id,
      credentials
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User updated Successfuly`, "success");
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
};
