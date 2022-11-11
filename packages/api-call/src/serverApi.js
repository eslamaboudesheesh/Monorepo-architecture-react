import axios from "axios";

export const resFun = async () => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};
