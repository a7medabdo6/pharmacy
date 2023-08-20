import axios from "axios";

async function getallCategories(credentials) {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.appcategory/",
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
export async function getallBrandsApi(credentials) {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.appcategory/brands",
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
export async function getallDiseaseApi(credentials) {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.appcategory/disease",
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
export async function getallIngredientApi(credentials) {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.appcategory/ingredient",
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
  }
}
export async function getallUsesApi(credentials) {
  try {
    const response = await axios.get(
      "https://d465-41-239-186-167.ngrok-free.appcategory/uses",
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
  }
}
export default getallCategories;
