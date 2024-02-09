import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = import.meta.env.VITE_APIKEY

const getCountryWeather = async (capital) => {
  try {
    const req = await axios.get(`${baseUrl}?q=${capital}&appid=${apiKey}`)
    if (req.status === 200) return req.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export default {
  getCountryWeather
}