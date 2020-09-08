import axios from 'axios';

const url = 'https://www.breakingbadapi.com/api/characters';

export const fetchItems = async (query) => {
  let changeableUrl = url;

  if (query) {
    changeableUrl = `https://www.breakingbadapi.com/api/characters?name=${query}`;
  }

  try {
    const data = await axios.get(changeableUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
