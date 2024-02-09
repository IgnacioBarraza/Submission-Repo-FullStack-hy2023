import '../App.css'
import weatherService from '../services/weatherService';
import {  useState } from "react";

export const Country = ({ country }) => {
  if (country === null) return null;

  const baseIconUrl = 'http://openweathermap.org/img/wn'
  const [temp, setTemp] = useState(0)
  const [icon, setIcon] = useState('')
  const [wind, setWind] = useState(0)
  const languages = Object.values(country.languages)

  weatherService.getCountryWeather(country.capital[0]).then( res => {
    setTemp(Math.floor(res.main.feels_like - 273.15));
    setIcon(res.weather[0].icon);
    setWind(res.wind.speed);
  })

  return (
    <>
      <div className="country-data">
        <h2 className='country-name'>Country name: {country.name.common}</h2>
        <span className='country-text'>Capital: {country.capital[0]}</span>
        <span className='country-text'>Area: {country.area}</span>
        <span className='country-text'>Languages:</span>
        <ul>
          {
            languages.map( (language, index) => {
              return <li key={index} className='country-text'>{language}</li>
            })
          }
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        <div className="weather-data">
          <span className='weather-text'>Weather in {country.capital[0]}</span>
          <span className='weather-text'>Temperature: {temp}</span>
          {
            icon ? <img src={`${baseIconUrl}/${icon}@2x.png`} alt="Weather icon" /> : null
          }
          <span className='weather-text'>Wind: {wind} m/s</span>
        </div>
      </div>
    </>
  )
}