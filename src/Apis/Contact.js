import axios from "axios";

async function Postcontactus(Data) {
  try {
    const response = await axios.post(
      "https://d465-41-239-186-167.ngrok-free.appcontactus/",
      Data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default Postcontactus;
