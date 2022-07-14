import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js"
import CountriesList from "./components/CountriesList.js";
import CountryDetails from "./components/CountryDetails.js"
import countryJsonData from "./countries.json"
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [countryList, setCountryList] = useState(countryJsonData)

  useEffect(()=>{
    const getCountryData = async () =>{
      const countryAxiosData = await axios.get("https://ih-countries-api.herokuapp.com/countries")
      setCountryList(countryAxiosData)
    }
  },[])

  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<CountriesList countryListProp={countryList}/>} />
        <Route path="/:alpha3Code" element={<CountryDetails countryJsonDataProp={countryList}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
