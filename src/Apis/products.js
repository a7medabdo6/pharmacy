import axios from "axios";

async function getallProducts(data) {
  try {
    const response = await axios.get(
      `https://d465-41-239-186-167.ngrok-free.app/product/?limit=${20}&offset=${
        (data.active - 1) * 20
      }`,

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
      `https://d465-41-239-186-167.ngrok-free.app/product/${data.id}`,
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
      `https://d465-41-239-186-167.ngrok-free.app/product/?limit=${10}&offset=${
        (data.active - 1) * 10
      }`,
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
      `https://d465-41-239-186-167.ngrok-free.app/product/?name=${txt}`,
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
      `https://d465-41-239-186-167.ngrok-free.app/product/?best_seller=true`,
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
