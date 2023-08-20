import axios from "axios";

async function GetCart(credentials) {
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.app/cart/",
      config
    );
    // console.log(response.data)
    return response.data;
  } catch (error) {
    // console.log(error.response)
    // throw new Error(error.response.data.message);
  }
}

export default GetCart;
