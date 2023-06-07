import axios from "axios";

async function getallCategories(credentials) {
  try {
    const response = await axios.get("http://167.71.53.196/category/", {
      headers: {
        Authorization: "",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response);
    // throw new Error(error.response.data.message);
  }
}
export async function getallBrandsApi(credentials) {
  try {
    const response = await axios.get("http://167.71.53.196/category/brands", {
      headers: {
        Authorization: "",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response);
    // throw new Error(error.response.data.message);
  }
}
export async function getallDiseaseApi(credentials) {
  try {
    const response = await axios.get("http://167.71.53.196/category/disease", {
      headers: {
        Authorization: "",
      },
    });
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
      "http://167.71.53.196/category/ingredient",
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
    const response = await axios.get("http://167.71.53.196/category/uses", {
      headers: {
        Authorization: "",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response);
  }
}
export default getallCategories;
