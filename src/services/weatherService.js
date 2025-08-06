import axios from 'axios';

// Use this approach if process.env isn't working
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric'
    }
  });
  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      cnt: 40
    }
  });
  return response.data;
};