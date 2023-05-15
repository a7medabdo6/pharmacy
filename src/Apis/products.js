import axios from "axios";

async function getallProducts(data) {
  try {
    const response = await axios.get(
      `http://18.130.40.220/product/?category=${data.id}`,
      {
        headers: {
          Authorization: "",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}
export async function getallProductsWithNoCategory(data) {
  try {
    const response = await axios.get(`http://18.130.40.220/product/`, {
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
export async function searchAllProducts(txt) {
  try {
    const response = await axios.get(
      `http://18.130.40.220/product/?name=${txt}`,
      {
        headers: {
          Authorization: "",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default getallProducts;
