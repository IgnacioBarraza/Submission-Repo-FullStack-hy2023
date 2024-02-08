import { useState, useEffect } from 'react'
// import './App.css'
import apiService from './services/apiService'
import { CountryList } from './components/countryList';
import { Message } from './components/message';
import { Country } from './components/country';


function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null)
  const [msg, setMsg] = useState(null);
  const [country, setCountry] = useState(null);

  const getCountries = async () => {
    await  apiService.getCountries().then(res => {
      setCountries(res.data);
    })
  }

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const searchResults = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
    if (searchResults.length === 0 && search === '') {
      setMsg('Enter a filter to start the search');
      setResults(null);
      setCountry(null);
    }
    else if (searchResults.length >= 10) {
      setResults(null);
      setCountry(null);
      setMsg('Too many matches, enter another filter...');
    } else if (searchResults.length < 10 && searchResults.length > 1) {
      setMsg(null);
      setResults(searchResults);
      setCountry(null);
    } else if (searchResults.length === 1) {
      setMsg(null);
      setResults(null);
      setCountry(searchResults[0])
    }
  }, [search]);

  const Searcher = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
    <div>
      <span>Find countries </span>
      <input onChange={Searcher} value={search}/>
      <Message msg={msg}></Message>
      <CountryList countries={results}></CountryList>
      <Country country={country}></Country>
    </div>
    </>
  )
}

export default App
