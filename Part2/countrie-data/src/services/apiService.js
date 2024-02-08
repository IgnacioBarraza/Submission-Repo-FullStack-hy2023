import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountries = () => {
  return axios.get(`${baseUrl}/all`)
}

const getCountry = (name) => {
  return axios.get(`${baseUrl}/name/${name}`)
}

export default {
  getCountries,
  getCountry
}