import '../App.css'

export const Country = ({ country }) => {
  if (country === null) return null;
  console.log(country)
  const languages = Object.values(country.languages)
  console.log(languages)
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
      </div>
    </>
  )
}