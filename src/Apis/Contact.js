import axios from "axios";

async function Postcontactus(Data) {
  try {
    const response = await axios.post("http://46.101.241.139/contactus/", Data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default Postcontactus;
