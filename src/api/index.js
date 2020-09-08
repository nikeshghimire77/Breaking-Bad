import axios from 'axios';

const url = 'https://www.breakingbadapi.com/api/characters';

export const fetchItems = async () => {
  try {
    const data = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
