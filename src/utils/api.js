






import axios from 'axios';

const BASE_URL = 'https://youtube-v2.p.rapidapi.com'
const options = {
 
  params: {
    video_id: 'PuQFESk0BrA'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};



