export const CountryList = ({ countries }) => {
  if (countries === null) {
    return null
  }
  return (
    <>
      {countries.map(country => (
              <div key={country.area}>
                <span key={country.flag}>{country.name.common}</span>
              </div>
          ))}
    </>
  )
}