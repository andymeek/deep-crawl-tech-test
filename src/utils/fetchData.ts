import axios from "axios";

const fetchData = async (url: string): Promise<any> => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (e) {
    console.error("Error fetching data");
  }
};

export default fetchData;
