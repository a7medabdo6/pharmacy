import axios from "axios";

async function Postcontactus(Data) {
  try {
    const response = await axios.post("http://18.130.40.220/contactus/", Data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default Postcontactus;
