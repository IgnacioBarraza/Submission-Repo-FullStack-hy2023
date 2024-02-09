import '../App.css'
import { useState } from "react";
import { Country } from './country';

export const CountryList = ({ data }) => {
  const [country, setCountry] = useState(null)

  if (data === null) return null
  const showCountry = () => {
    setCountry(data)
  }
  return (
    <>
      <div className='country-list'>
        <span className='country-text'>{data.name.common}</span>
        <button onClick={showCountry} className="country-btn">Show</button>
        <Country country={country} />
      </div>
    </>
  );
}