import axios from "axios";

async function getallProducts(data) {
  try {
    const response = await axios.get(
      `https://backend.well-medic.com/product/`,

      {
        params: data,
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
export async function GetOneProduct(data) {
  try {
    const response = await axios.get(
      `https://backend.well-medic.com/product/${data.id}`,
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
export async function getallProductsWithNoCategory(data) {
  try {
    const response = await axios.get(
      `https://backend.well-medic.com/product/`,
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
export async function searchAllProducts(txt) {
  try {
    const response = await axios.get(
      `https://backend.well-medic.com/product/?name=${txt}`,
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
export async function AllBestSellersProducts(txt) {
  try {
    const response = await axios.get(
      `https://backend.well-medic.com/product/?best_seller=true`,
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
export default getallProducts;
