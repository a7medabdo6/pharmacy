import axios from "axios";

async function getAllReviews(credentials) {
  try {
    const response = await axios.get("http://18.130.40.220/reviews/", {
      headers: {
        Authorization: "",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default getAllReviews;
