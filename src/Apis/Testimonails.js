import axios from "axios";

async function getAllReviews(credentials) {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.appreviews/",
      {
        headers: {
          Authorization: "",
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response);
    // throw new Error(error.response.data.message);
  }
}

export default getAllReviews;
