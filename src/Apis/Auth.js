import axios from "axios";

async function loginUser(credentials) {
  try {
    const response = await axios.post(
      "http://18.130.40.220/accounts/register/",
      credentials
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));

    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default loginUser;
