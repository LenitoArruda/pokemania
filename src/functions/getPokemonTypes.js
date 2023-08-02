import { fetchData } from "../components/pokeapi/types";

async function fetchTypesData() {
  try {
    return await fetchData();
  } catch (error) {
    console.log(error);
  }
}

export default fetchTypesData;
