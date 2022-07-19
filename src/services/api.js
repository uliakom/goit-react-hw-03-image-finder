import axios from 'axios';

const MY_KEY = '8682108-caaa83b2d6a66c1f39bba0100';
axios.defaults.baseURL = 'https://pixabay.com/api/';
 

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};